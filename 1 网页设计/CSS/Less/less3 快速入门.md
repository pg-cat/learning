【2020年5月4日】整理自[【Less 中文网 v3】](https://less.bootcss.com/)


# less

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



