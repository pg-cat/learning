【2020年5月4日】整理自[【Less 中文网 v3】](https://less.bootcss.com/)


# Less

Less （Leaner Style Sheets 的缩写） 是一门向后兼容的 CSS 扩展语言

* 这里呈现的是 Less 的官方文档（中文版），包含了 Less 语言以及利用 JavaScript 开发的用于将 Less 样式转换成 CSS 样式的 Less.js 工具

* 因为 Less 和 CSS 非常像，因此很容易学习

  而且 Less 仅对 CSS 语言增加了少许方便的扩展，这就是 Less 如此易学的原因之一

> 有关 Less 语言特性的详细文档，请参阅[【 Less 语言特性】](https://less.bootcss.com/features/)章节
> * 有关 Less 内置函数的列表，请参阅[【 Less 函数手册】](https://less.bootcss.com/functions/)章节
> * 有关详细的使用说明，请参阅[【 Less.js 用法】](https://less.bootcss.com/usage/)章节
> * 有关第三方工具的详细信息，请参阅[【工具】](https://less.bootcss.com/tools/)章节

## 安装

### 在 `Node.js` 环境中使用 Less

```
$ npm install -g less
```

或

```
$ lessc styles.less styles.css
```

### 在浏览器环境中使用 Less

```
<link rel="stylesheet/less" type="text/css" href="styles.less" />
<script src="//cdnjs.cloudflare.com/ajax/libs/less.js/3.11.1/less.min.js" ></script>
```

> [【解决 html 中引入 less 在浏览器中没有效果的方法】](https://blog.csdn.net/wls666/article/details/89429637)
>> 提示：开发工具：vscode ，并安装扩展：Live Server

## 变量（Variables）

无需多说，看代码一目了然：

```
@width: 10px;
@height: @width + 10px;

#header {
  width: @width;
  height: @height;
}
```

编译为：

```
#header {
  width: 10px;
  height: 20px;
}
```

> [【了解关于变量（Variables）的更多信息】](https://less.bootcss.com/features/#variables-feature)


## 混合（Mixins）

混合（Mixin）是一种将一组属性从一个规则集包含（或混入）到另一个规则集的方法

假设我们定义了一个类（class）如下：

```
.bordered {
  border-top: dotted 1px black;
  border-bottom: solid 2px black;
}
```

如果我们希望在其它规则集中使用这些属性呢？

* 我们只需像下面这样输入所需属性的类（class）名称即可

```
#menu a {
  color: #111;
  .bordered();
}

.post a {
  color: red;
  .bordered();
}
```

`.bordered` 类所包含的属性就将同时出现在 `#menu a` 和 `.post a` 中了

> 注意，你也可以使用 `#ids` 作为 `mixin` 使用

> [【了解关于混合（Mixin）的更多信息】](https://less.bootcss.com/features/#mixins-feature)

## 嵌套（Nesting）

Less 提供了使用嵌套（nesting）代替层叠或与层叠结合使用的能力

假设我们有以下 CSS 代码：

```
#header {
  color: black;
}
#header .navigation {
  font-size: 12px;
}
#header .logo {
  width: 300px;
}
```

用 Less 语言我们可以这样书写代码：

```
#header {
  color: black;
  .navigation {
    font-size: 12px;
  }
  .logo {
    width: 300px;
  }
}
```

> 用 Less 书写的代码更加简洁，并且模仿了 HTML 的组织结构
> * 你还可以使用此方法将伪选择器（pseudo-selectors）与混合（mixins）一同使用

下面是一个经典的 clearfix 技巧，重写为一个混合（mixin） ( `&` 表示当前选择器的父级）：

```
.clearfix {
  display: block;
  zoom: 1;

  &:after {
    content: " ";
    display: block;
    font-size: 0;
    height: 0;
    clear: both;
    visibility: hidden;
  }
}
```

> [【了解有关夫选择器的详细信息】](https://less.bootcss.com/features/#parent-selectors-feature)

### @ 规则嵌套和冒泡

**`@ 规则`**（例如 `@media` 或 `@supports`）可以与选择器以相同的方式进行嵌套

* **`@ 规则`** 会被放在前面，同一规则集中的其它元素的相对顺序保持不变

  这叫做冒泡（bubbling）

```
.component {
  width: 300px;
  @media (min-width: 768px) {
    width: 600px;
    @media  (min-resolution: 192dpi) {
      background-image: url(/img/retina2x.png);
    }
  }
  @media (min-width: 1280px) {
    width: 800px;
  }
}
```

编译为：

```
.component {
  width: 300px;
}
@media (min-width: 768px) {
  .component {
    width: 600px;
  }
}
@media (min-width: 768px) and (min-resolution: 192dpi) {
  .component {
    background-image: url(/img/retina2x.png);
  }
}
@media (min-width: 1280px) {
  .component {
    width: 800px;
  }
}
```

## 运算（Operations）

算术运算符 `+` 、`-` 、`*` 、`/` 可以对任何数字、颜色或变量进行运算

* 如果可能的话，算术运算符在 **`加`** 、**`减`** 或 **`比较`** 之前会进行单位换算

* 计算的结果以最左侧操作数的单位类型为准

* 如果单位换算无效或失去意义，则忽略单位

  无效的单位换算例如：

  * `px` 到 `cm`
  * `rad` 到 `%` 的转换

```
// 所有操作数被转换成相同的单位
@conversion-1: 5cm + 10mm; // 结果是 6cm
@conversion-2: 2 - 3cm - 5mm; // 结果是 -1.5cm

// conversion is impossible
@incompatible-units: 2 + 5px - 3cm; // 结果是 4px

// example with variables
@base: 5%;
@filler: @base * 2; // 结果是 10%
@other: @base + @filler; // 结果是 15%
```

> 乘法和除法不作转换
> * 因为这两种运算在大多数情况下都没有意义，一个长度乘以一个长度就得到一个区域，而 CSS 是不支持指定区域的
> * Less 将按数字的原样进行操作，并将为计算结果指定明确的单位类型

```
@base: 2cm * 3mm; // 结果是 6cm
```

你还可以对颜色进行算术运算：

```
@color: #224488 / 2; //结果是 #112244
background-color: #112244 + #111; // 结果是 #223355
```

不过，Less 提供的[【色彩函数】](https://less.bootcss.com/functions/#color-operations)更有使用价值

### `calc()` 特例

> Released v3.0.0

为了与 CSS 保持兼容，`calc()` 并不对数学表达式进行计算，但是在嵌套函数中会计算变量和数学公式的值

```
@var: 50vh/2;
width: calc(50% + (@var - 20px));  // 结果是 calc(50% + (25vh - 20px))
```

## 转义（Escaping）

转义（Escaping）允许你使用任意字符串作为属性或变量值

* 任何 `~"anything"` 或 `~'anything'` 形式的内容都将按原样输出，除非[【 interpolation 】](https://less.bootcss.com/features/#variables-feature-variable-interpolation)

```
@min768: ~"(min-width: 768px)";
.element {
  @media @min768 {
    font-size: 1.2rem;
  }
}
```

编译为：

```
@media (min-width: 768px) {
  .element {
    font-size: 1.2rem;
  }
}
```

从 `Less 3.5` 开始，可以简写为：

```
@min768: (min-width: 768px);
.element {
  @media @min768 {
    font-size: 1.2rem;
  }
}
```

> 在 `Less 3.5+` 版本中，许多以前需要 **`引号转义`** 的情况就不再需要了

## 函数（Functions）



















## 命名空间和访问符

## 映射（Maps）

## 作用域（Scope）

## 注释（Comments）

## 导入（Importing）


