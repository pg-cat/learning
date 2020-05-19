以下整理自[【菜鸟教程：SVG 教程】](https://www.runoob.com/svg/svg-tutorial.html)

# SVG

SVG 意为可缩放矢量图形（Scalable Vector Graphics）

SVG 使用 XML 格式定义图像

```html
<!DOCTYPE html>
<html>
<body>

<h1>My first SVG</h1>

<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
   <circle cx="100" cy="50" r="40" stroke="black" stroke-width="2" fill="red" />
</svg>

</body>
</html>
```

## 简介

SVG 是使用 XML 来描述二维图形和绘图程序的语言

### 应具备的基础知识

继续学习之前，你应该对以下内容有基本的了解：

* HTML
* XML 基础

### 什么是SVG？

* SVG 指可伸缩矢量图形 (Scalable Vector Graphics)

* SVG 用来定义用于网络的基于矢量的图形

* SVG 使用 XML 格式定义图形

* SVG 图像在放大或改变尺寸的情况下其图形质量不会有所损失

* SVG 是万维网联盟的标准

* SVG 与诸如 DOM 和 XSL 之类的 W3C 标准是一个整体

### 是 W3C 推荐标准

SVG 于 2003 年 1 月 14 日成为 W3C 推荐标准

### 历史和优势

在 2003 年一月，SVG 1.1 被确立为 W3C 标准

参与定义 SVG 的组织有：

* Sun公司（已被Oracle公司收购）

* Adobe、苹果公司

* IBM

* 柯达

与其他图像格式相比，使用 SVG 的优势在于：

* SVG 可被非常多的工具读取和修改（比如记事本）

* SVG 与 JPEG 和 GIF 图像比起来，尺寸更小，且可压缩性更强

* SVG 是可伸缩的

* SVG 图像可在任何的分辨率下被高质量地打印

* SVG 可在图像质量不下降的情况下被放大

* SVG 图像中的文本是可选的，同时也是可搜索的（很适合制作地图）

* SVG 可以与 Java 技术一起运行

* SVG 是开放的标准

* SVG 文件是纯粹的 XML

SVG 的主要竞争者是 Flash

与 Flash 相比，SVG 最大的优势是与其他标准（比如 XSL 和 DOM）相兼容

而 Flash 则是未开源的私有技术

### 查看 SVG 文件

Internet Explorer 9，火狐，谷歌 Chrome，Opera 和 Safari 都支持 SVG

IE8和早期版本都需要一个插件

* 如 Adobe SVG 浏览器，这是免费提供的

### 创建 SVG 文件

由于 SVG 是 XML 文件，SVG 图像可以用任何文本编辑器创建，但它往往是与一个绘图程序一起使用，如[【 Inkscape 】](http://inkscape.org/)，更方便地创建 SVG 图像

## 实例

### 简单的 SVG 实例

一个简单的SVG图形例子：这里是 SVG 文件（ SVG 文件的保存与 SVG 扩展）

```xml
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">

<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <circle cx="100" cy="50" r="40" stroke="black"
  stroke-width="2" fill="red" />
</svg>
```

SVG 代码解析：

* 第一行包含了 XML 声明

  请注意 standalone 属性！

  该属性规定此 SVG 文件是否是 **`独立的`** ，或含有对外部文件的引用

  `standalone="no"` 意味着 SVG 文档会引用一个外部文件（在这里，是 DTD 文件）

* 第二和第三行引用了这个外部的 SVG DTD

  该 DTD 位于 `"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"`

  该 DTD 位于 W3C ，含有所有允许的 SVG 元素

* SVG 代码以 `<svg>` 元素开始，包括开启标签 `<svg>` 和关闭标签 `</svg>`

  这是根元素

  `width` 和 `height` 属性可设置此 SVG 文档的宽度和高度

  `version` 属性可定义所使用的 SVG 版本

  `xmlns` 属性可定义 SVG 命名空间

* SVG 的 `<circle>` 用来创建一个圆

  `cx` 和 `cy` 属性定义圆中心的 x 和 y 坐标（如果忽略这两个属性，那么圆点会被设置为 `(0, 0)` ）

  `r` 属性定义圆的半径

  `stroke` 和 `stroke-width` 属性控制如何显示形状的轮廓（我们把圆的轮廓设置为 `2px` 宽，黑边框）

  `fill` 属性设置形状内的颜色（我们把填充颜色设置为红色）

* 关闭标签的作用是关闭 SVG 元素和文档本身

  > 注释：所有的开启标签必须有关闭标签！

## 在 HTML 页面

SVG 文件可通过以下标签嵌入 HTML 文档：

* `<embed>`
* `<object>`
* `<iframe>`

SVG 的代码可以直接嵌入到 HTML 页面中，或您可以直接链接到 SVG 文件

### 使用 `<embed>` 标签

* 优势：所有主要浏览器都支持，并允许使用脚本

* 缺点：不推荐在 HTML4 和 XHTML 中使用（但在 HTML5 允许）

#### 语法

```html
<embed src="circle1.svg" type="image/svg+xml" />
```

### 使用 `<object>` 标签

* 优势：所有主要浏览器都支持，并支持 HTML4 ，XHTML 和 HTML5 标准

* 缺点：不允许使用脚本

#### 语法

```html
<object data="circle1.svg" type="image/svg+xml"></object>
```

### 使用 `<iframe>` 标签

* 优势：所有主要浏览器都支持，并允许使用脚本

* 缺点：不推荐在 HTML4 和 XHTML 中使用（但在 HTML5 允许）

#### 语法

```html
<iframe src="circle1.svg"></iframe>
```

### 直接在 HTML 嵌入 SVG 代码

在 Firefox 、Internet Explorer 9 、谷歌 Chrome 和 Safari 中，你可以直接在 HTML 嵌入S VG 代码

```html
<!DOCTYPE html>
<html>
<body>

<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
   <circle cx="100" cy="50" r="40" stroke="black" stroke-width="2" fill="red" />
</svg>

</body>
</html>
```

### 链接到 SVG 文件

您还可以用 `<a>` 标签链接到一个 SVG 文件：链接到 SVG 文件

```html
<a href="circle1.svg">View SVG file</a>
```

[【示例：查看 SVG 文件】](https://www.runoob.com/try/demo_source/circle1.svg)

## 形状

SVG 有一些预定义的形状元素，可被开发者使用和操作：

* 矩形 `<rect />`
* 圆形 `<circle />`
* 椭圆 `<ellipse />`
* 线 `<line />`
* 折线 `<polyline />`
* 多边形 `<polygon />`
* 路径 `<path />`

## 矩形 `<rect />`

### 实例 1

`<rect />` 元素可用来创建矩形，以及矩形的变种：

```html
<!DOCTYPE html>
<html>
<body>

<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <rect width="300" height="100" style="fill:rgb(0,0,255);stroke-width:1;stroke:rgb(0,0,0)" />
</svg>

</body>
</html>
```

> 对于 Opera 用户：[【查看 SVG 文件】](https://www.runoob.com/try/demo_source/rect1.svg)（右键单击SVG图形预览源）

代码解析:

* rect 元素的 `width` 和 `height` 属性可定义矩形的高度和宽度

* style 属性用来定义 CSS 属性

* CSS 的 `fill` 属性定义矩形的填充颜色（ rgb 值、颜色名或者十六进制值）

* CSS 的 `stroke-width` 属性定义矩形边框的宽度

* CSS 的 `stroke` 属性定义矩形边框的颜色

### 实例 2

让我们看看另一个例子，它包含一些新的属性：

```html
<!DOCTYPE html>
<html>
<body>

<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <rect x="50" y="20" width="150" height="150" style="fill:blue;stroke:pink;stroke-width:5;fill-opacity:0.1;stroke-opacity:0.9" />
</svg>

</body>
</html>
```

> 对于 Opera 用户：[【查看 SVG 文件】](https://www.runoob.com/try/demo_source/rect2.svg)（右键单击 SVG 图形预览源）

代码解析：

* x 属性定义矩形的左侧位置

  例如，`x="0"` 定义矩形到浏览器窗口左侧的距离是 `0px`

* y 属性定义矩形的顶端位置

  例如，`y="0"` 定义矩形到浏览器窗口顶端的距离是 `0px`

* CSS 的 `fill-opacity` 属性定义填充颜色透明度

  合法的范围是：`0 - 1`

* CSS 的 `stroke-opacity` 属性定义轮廓颜色的透明度

  合法的范围是：`0 - 1`

### 实例 3

定义整个元素的不透明度：

```html
<!DOCTYPE html>
<html>
<body>

<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <rect x="50" y="20" width="150" height="150" style="fill:blue;stroke:pink;stroke-width:5;opacity:0.5" />
</svg>

</body>
</html>
```

> 对于 Opera 用户：[【查看 SVG 文件】](https://www.runoob.com/try/demo_source/rect3.svg)（右键单击 SVG 图形预览源）

代码解析：

* CSS `opacity` 属性用于定义了元素的透明值

  范围: `0 - 1`

### 实例 4

最后一个例子，创建一个圆角矩形：

```html
<!DOCTYPE html>
<html>
<body>

<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <rect x="50" y="20" rx="20" ry="20" width="150" height="150" style="fill:red;stroke:black;stroke-width:5;opacity:0.5" />
</svg>

</body>
</html>
```

> 对于 Opera 用户：[【查看 SVG 文件】](https://www.runoob.com/try/demo_source/rect4.svg)（右键单击 SVG 图形预览源）

代码解析：

* `rx` 和 `ry` 属性可使矩形产生圆角

## 圆形 `<circle />`

`<circle />` 元素可用来创建一个圆：

```html
<!DOCTYPE html>
<html>
<body>

<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
   <circle cx="100" cy="50" r="40" stroke="black" stroke-width="2" fill="red" />
</svg>

</body>
</html>
```

> 对于 Opera 用户：[【查看 SVG 文件】](https://www.runoob.com/try/demo_source/circle1.svg)（右键单击 SVG 图形预览源）

代码解析：

* `cx` 和 `cy` 属性定义圆点的x和y坐标

  如果省略 `cx` 和 `cy` ，圆的中心会被设置为 `(0, 0)`

* `r` 属性定义圆的半径

## 椭圆 `<ellipse />`

### 实例 1

`<ellipse />` 元素是用来创建一个椭圆：

* 椭圆与圆很相似

* 不同之处在于椭圆有不同的 `x` 和 `y` 半径，而圆的 `x` 和 `y` 半径是相同的

```html
<!DOCTYPE html>
<html>
<body>

<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <ellipse cx="300" cy="80" rx="100" ry="50" style="fill:yellow;stroke:purple;stroke-width:2" />
</svg>

</body>
</html>
```

> 对于 Opera 用户：[【查看 SVG 文件】](https://www.runoob.com/try/demo_source/ellipse1.svg)（右键单击 SVG 图形预览源）

代码解析：

* `cx` 属性定义的椭圆中心的 `x` 坐标

* `cy` 属性定义的椭圆中心的 `y` 坐标

* `rx` 属性定义的水平半径

* `ry` 属性定义的垂直半径

### 实例 2

下面的例子创建了三个累叠而上的椭圆：

```html
<!DOCTYPE html>
<html>
<body>

<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <ellipse cx="240" cy="100" rx="220" ry="30" style="fill:purple" />
  <ellipse cx="220" cy="70" rx="190" ry="20" style="fill:lime" />
  <ellipse cx="210" cy="45" rx="170" ry="15" style="fill:yellow" />
</svg>

</body>
</html>
```

> 对于 Opera 用户：[【查看 SVG 文件】](https://www.runoob.com/try/demo_source/ellipse2.svg)（右键单击 SVG 图形预览源）

### 实例 3

下面的例子组合了两个椭圆（一个黄的和一个白的）：

```html
<!DOCTYPE html>
<html>
<body>

<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <ellipse cx="240" cy="50" rx="220" ry="30" style="fill:yellow" />
  <ellipse cx="220" cy="50" rx="190" ry="20" style="fill:white" />
</svg>

</body>
</html>
```

> 对于 Opera 用户：[【查看 SVG 文件】](https://www.runoob.com/try/demo_source/ellipse3.svg)（右键单击 SVG 图形预览源）

## 直线 `<line />`

`<line />` 元素是用来创建一个直线：

```html
<!DOCTYPE html>
<html>
<body>

<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <line x1="0" y1="0" x2="200" y2="200" style="stroke:rgb(255,0,0);stroke-width:2" />
</svg>

</body>
</html>
```

> 对于 Opera 用户：[【查看 SVG 文件】](https://www.runoob.com/try/demo_source/line1.svg)（右键单击 SVG 图形预览源）

代码解析：

* `x1` 属性在 `x` 轴定义线条的开始

* `y1` 属性在 `y` 轴定义线条的开始

* `x2` 属性在 `x` 轴定义线条的结束

* `y2` 属性在 `y` 轴定义线条的结束

## 多边形 `<polygon />`

### 实例 1

`<polygon />` 元素用来创建含有不少于三个边的图形：

* 多边形是由直线组成，其形状是 **`封闭`** 的（所有的 **`线条`** 连接起来）

> `polygon` 来自希腊：`"Poly"` 意味 `"many"` ， `"gon"` 意味 `"angle"`

```html
<!DOCTYPE html>
<html>
<body>

<svg  height="210" width="500">
  <polygon points="200,10 250,190 160,210"
  style="fill:lime;stroke:purple;stroke-width:1"/>
</svg>

</body>
</html>
```

> 对于 Opera 用户：[【查看 SVG 文件】](https://www.runoob.com/try/demo_source/polygon1.svg)（右键单击 SVG 图形预览源）

代码解析：

* `points` 属性定义多边形每个角的 `x` 和 `y` 坐标

### 实例 2

下面的示例创建一个四边的多边形：

```html
<!DOCTYPE html>
<html>
<body>

<svg height="250" width="500">
  <polygon points="220,10 300,210 170,250 123,234" style="fill:lime;stroke:purple;stroke-width:1" />
</svg>

</body>
</html>
```

> 对于 Opera 用户：[【查看 SVG 文件】](https://www.runoob.com/try/demo_source/polygon2.svg)（右键单击 SVG 图形预览源）

### 实例 3

使用 `<polygon>` 元素创建一个星型：

```html
<svg height="210" width="500">
  <polygon points="100,10 40,198 190,78 10,78 160,198"
  style="fill:lime;stroke:purple;stroke-width:5;fill-rule:nonzero;" />
</svg>
```

> 对于 Opera 用户：[【查看 SVG 文件】](https://www.runoob.com/try/demo_source/polygon3.svg)（右键单击 SVG 图形预览源）

### 实例 4
改变 `fill-rule` 属性为 `"evenodd"` ：

```html
<!DOCTYPE html>
<html>
<body>

<svg height="210" width="500">
  <polygon points="100,10 40,198 190,78 10,78 160,198"
  style="fill:lime;stroke:purple;stroke-width:5;fill-rule:evenodd;" />
</svg>

</body>
</html>
```

> 对于 Opera 用户：[【查看 SVG 文件】](https://www.runoob.com/try/demo_source/polygon4.svg)（右键单击 SVG 图形预览源）

## 曲线 `<polyline />`

### 实例 1

`<polyline />` 元素是用于创建任何只有直线的形状：

```html
<!DOCTYPE html>
<html>
<body>

<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <polyline points="20,20 40,25 60,40 80,120 120,140 200,180" style="fill:none;stroke:black;stroke-width:3" />
</svg>

</body>
</html>
```

> 对于 Opera 用户：[【查看 SVG 文件】](https://www.runoob.com/try/demo_source/polyline1.svg)（右键单击 SVG 图形预览源）

### 实例 2

只有直线的另一个例子：

```html
<!DOCTYPE html>
<html>
<body>

<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <polyline points="0,40 40,40 40,80 80,80 80,120 120,120 120,160" style="fill:white;stroke:red;stroke-width:4" />
</svg>

</body>
</html>
```

> 对于 Opera 用户：[【查看 SVG 文件】](https://www.runoob.com/try/demo_source/polyline2.svg)（右键单击 SVG 图形预览源）

## 路径 `<path />`

`<path />` 元素用于定义一个路径

下面的命令可用于路径数据：

* M = moveto 移动
* L = lineto 线条
* H = horizontal lineto 水平线条
* V = vertical lineto 垂直线条
* C = curveto 曲线
* S = smooth curveto 平滑曲线
* Q = quadratic Bézier curve 二次方贝塞尔曲线
* T = smooth quadratic Bézier curveto 平滑二次方贝塞尔曲线
* A = elliptical Arc 椭圆弧
* Z = closepath 闭合路径

> 注意：以上所有命令均允许小写字母
>> 大写表示绝对定位，小写表示相对定位

### 实例 1

下面的例子定义了一条路径，它开始于位置 `150 0` ，到达位置 `75 200` ，然后从那里开始到 `225 200` ，最后在 `150 0` 关闭路径

```html
<!DOCTYPE html>
<html>
<body>

<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <path d="M150 0 L75 200 L225 200 Z" />
</svg>

</body>
</html>
```

> 对于 Opera 用户：[【查看 SVG 文件】](https://www.runoob.com/try/demo_source/path1.svg)（右键单击 SVG 图形预览源）

### 实例 2

下面的例子创建了一个二次方贝塞尔曲线，A 和 C 分别是起点和终点，B 是控制点：

```html
<!DOCTYPE html>
<html>
<body>

<svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="400" width="450">
<path id="lineAB" d="M 100 350 l 150 -300" stroke="red" stroke-width="3" fill="none" />
  <path id="lineBC" d="M 250 50 l 150 300" stroke="red" stroke-width="3" fill="none" />
  <path d="M 175 200 l 150 0" stroke="green" stroke-width="3" fill="none" />
  <path d="M 100 350 q 150 -300 300 0" stroke="blue" stroke-width="5" fill="none" />
  <!-- Mark relevant points -->
  <g stroke="black" stroke-width="3" fill="black">
    <circle id="pointA" cx="100" cy="350" r="3" />
    <circle id="pointB" cx="250" cy="50" r="3" />
    <circle id="pointC" cx="400" cy="350" r="3" />
  </g>
  <!-- Label the points -->
  <g font-size="30" font="sans-serif" fill="black" stroke="none" text-anchor="middle">
    <text x="100" y="350" dx="-30">A</text>
    <text x="250" y="50" dy="-10">B</text>
    <text x="400" y="350" dx="30">C</text>
  </g>
</svg>

</body>
</html>
```

> 对于 Opera 用户：[【查看 SVG 文件】](https://www.runoob.com/try/demo_source/path2.svg)（右键单击 SVG 图形预览源）

> 复杂吗？是的！！
>> 由于在绘制路径时的复杂性，强烈建议使用[【 SVG 编辑器】](https://c.runoob.com/more/svgeditor/)来创建复杂的图形

## 文本 `<text></text>`

`<text></text>` 元素用于定义文本

### 实例 1

写一个文本：

```html
<!DOCTYPE html>
<html>
<body>

<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <text x="0" y="15" fill="red">I love SVG</text>
</svg>

</body>
</html>
```

> 对于 Opera 用户：[【查看 SVG 文件】](https://www.runoob.com/try/demo_source/text1.svg)（右键单击 SVG 图形预览源）

### 实例 2

旋转的文字：

```html
<!DOCTYPE html>
<html>
<body>

<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <text x="0" y="15" fill="red" transform="rotate(30 20,40)">I love SVG</text>
</svg>

</body>
</html>
```

> 对于 Opera 用户：[【查看 SVG 文件】](https://www.runoob.com/try/demo_source/text2.svg)（右键单击 SVG 图形预览源）

### 实例 3

路径上的文字：

```html
<!DOCTYPE html>
<html>
<body>

<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <path id="path1" d="M75,20 a1,1 0 0,0 100,0" />
  </defs>
  <text x="10" y="100" style="fill:red;">
    <textPath xlink:href="#path1">I love SVG I love SVG</textPath>
  </text>
</svg>

</body>
</html>
```

> 对于 Opera 用户：[【查看 SVG 文件】](https://www.runoob.com/try/demo_source/text3.svg)（右键单击 SVG 图形预览源）

### 实例 4

元素可以安排任何分小组与 `<tspan>` 元素的数量

* 每个 `<tspan>` 元素可以包含不同的格式和位置

* 几行文本(与 `<tspan>` 元素)

```html
<!DOCTYPE html>
<html>
<body>

<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <text x="10" y="20" style="fill:red;">Several lines:
    <tspan x="10" y="45">First line</tspan>
    <tspan x="10" y="70">Second line</tspan>
  </text>
</svg>

</body>
</html>
```

> 对于 Opera 用户：[【查看 SVG 文件】](https://www.runoob.com/try/demo_source/text4.svg)（右键单击 SVG 图形预览源）

### 实例 5

作为链接文本（ `<a>` 元素）：

```html
<!DOCTYPE html>
<html>
<body>

<svg xmlns="http://www.w3.org/2000/svg" version="1.1"
xmlns:xlink="http://www.w3.org/1999/xlink">
  <a xlink:href="//www.w3cschool.cc/svg/" target="_blank">
    <text x="0" y="15" fill="red">I love SVG</text>
  </a>
</svg>

</body>
</html>
```

> 对于 Opera 用户：[【查看 SVG 文件】](https://www.runoob.com/try/demo_source/text5.svg)（右键单击 SVG 图形预览源）

## Stroke 属性

SVG 提供了一个范围广泛 stroke 属性

在本章中，我们将看看下面：

* stroke
* stroke-width
* stroke-linecap
* stroke-dasharray

所有 stroke 属性，可应用于任何种类的线条，文字和元素就像一个圆的轮廓

### 实例 1

Stroke 属性定义一条线，文本或元素轮廓颜色：

```html
<!DOCTYPE html>
<html>
<body>

<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <g fill="none">
    <path stroke="red" d="M5 20 l215 0" />
    <path stroke="black" d="M5 40 l215 0" />
    <path stroke="blue" d="M5 60 l215 0" />
  </g>
</svg>

</body>
</html>
```

> 对于 Opera 用户：[【查看 SVG 文件】](https://www.runoob.com/try/demo_source/stroke0.svg)（右键单击 SVG 图形预览源）

### 实例 2

stroke-width 属性定义了一条线，文本或元素轮廓厚度：

```html
<!DOCTYPE html>
<html>
<body>

<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <g fill="none" stroke="black">
    <path stroke-width="2" d="M5 20 l215 0" />
    <path stroke-width="4" d="M5 40 l215 0" />
    <path stroke-width="6" d="M5 60 l215 0" />
  </g>
</svg>

</body>
</html>
```

> 对于 Opera 用户：[【查看 SVG 文件】](https://www.runoob.com/try/demo_source/stroke1.svg)（右键单击 SVG 图形预览源）

### 实例 3

`stroke-linecap` 属性定义不同类型的开放路径的终结：

```html
<!DOCTYPE html>
<html>
<body>

<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <g fill="none" stroke="black" stroke-width="6">
    <path stroke-linecap="butt" d="M5 20 l215 0" />
    <path stroke-linecap="round" d="M5 40 l215 0" />
    <path stroke-linecap="square" d="M5 60 l215 0" />
  </g>
</svg>

</body>
</html>
```

> 对于 Opera 用户：[【查看 SVG 文件】](https://www.runoob.com/try/demo_source/stroke2.svg)（右键单击 SVG 图形预览源）

## 实例 4

`stroke-dasharray` 属性用于创建虚线：

```html
<!DOCTYPE html>
<html>
<body>

<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <g fill="none" stroke="black" stroke-width="4">
    <path stroke-dasharray="5,5" d="M5 20 l215 0" />
    <path stroke-dasharray="10,10" d="M5 40 l215 0" />
    <path stroke-dasharray="20,10,5,5,5,10" d="M5 60 l215 0" />
  </g>
</svg>

</body>
</html>
```

> 对于 Opera 用户：[【查看 SVG 文件】](https://www.runoob.com/try/demo_source/stroke3.svg)（右键单击 SVG 图形预览源）

## 滤镜

> 注意： Internet Explorer 和 Safari 不支持 SVG 滤镜！

SVG 滤镜用来增加对 SVG 图形的特殊效果

> 我们将仅展示一个可能采用的特殊效果
> * 基础知识展示后，你已经学会使用特殊效果，你应该能够适用于其他地方
> * 这里的关键是给你一个怎样做 SVG 的想法，而不是重复整个规范

SVG可用的滤镜有：

* feBlend - 与图像相结合的滤镜
* feColorMatrix - 用于彩色滤光片转换
* feComponentTransfer
* feComposite
* feConvolveMatrix
* feDiffuseLighting
* feDisplacementMap
* feFlood
* feGaussianBlur - 创建模糊效果
* feImage
* feMerge
* feMorphology
* feOffset - 过滤阴影
* feSpecularLighting
* feTile
* feTurbulence
* feDistantLight - 用于照明过滤
* fePointLight - 用于照明过滤
* feSpotLight - 用于照明过滤

> 除此之外，您可以在每个 SVG 元素上使用多个滤镜！

### `defs` 和 `filter`

所有互联网的 SVG 滤镜定义在 `<defs></defs>` 元素中

* `<defs></defs>` 元素定义短并含有特殊元素（如滤镜）

`<filter></filter>` 标签用来定义 SVG 滤镜

* `<filter></filter>` 标签使用必需的 `id` 属性来定义向图形应用哪个滤镜？

## 模糊效果

`<feGaussianBlur />` 元素是用于创建模糊效果：

![图片](https://www.runoob.com/images/svg_fegaussianblur.jpg)

```html
<!DOCTYPE html>
<html>
<body>

<p><b>Note: </b>Internet Explorer and Safari do not support SVG filters yet!</p>

<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <defs>
    <filter id="f1" x="0" y="0">
      <feGaussianBlur in="SourceGraphic" stdDeviation="15" />
    </filter>
  </defs>
  <rect width="90" height="90" stroke="green" stroke-width="3" fill="yellow" filter="url(#f1)" />
</svg>

</body>
</html>
```

> 对于 Opera 用户：[【查看 SVG 文件】](https://www.runoob.com/try/demo_source/fegaussianblur1.svg)（右键单击 SVG 图形预览源）

代码解析：

* `<filter></filter>` 元素 `id` 属性定义一个滤镜的唯一名称

* `<feGaussianBlur />` 元素定义模糊效果

* `in="SourceGraphic"` 这个部分定义了由整个图像创建效果

* `stdDeviation` 属性定义模糊量

* `<rect />` 元素的滤镜属性用来把元素链接到"f1"滤镜

## 阴影

`<feOffset />` 元素是用于创建阴影效果。我们的想法是采取一个SVG图形（图像或元素）并移动它在xy平面上一点儿

### 实例 1

第一个例子偏移一个矩形（带 `<feOffset />` ），然后混合偏移图像顶部（含 `<feBlend />` ）：

![图片](https://www.runoob.com/images/svg_feoffset.gif)

```html
<!DOCTYPE html>
<html>
<body>

<p><b>Note: </b>Internet Explorer and Safari do not support SVG filters yet!</p>

<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <defs>
    <filter id="f1" x="0" y="0" width="200%" height="200%">
      <feOffset result="offOut" in="SourceGraphic" dx="20" dy="20" />
      <feBlend in="SourceGraphic" in2="offOut" mode="normal" />
    </filter>
  </defs>
  <rect width="90" height="90" stroke="green" stroke-width="3"
  fill="yellow" filter="url(#f1)" />
</svg>

</body>
</html>
```

> 对于 Opera 用户：[【查看 SVG 文件】](https://www.runoob.com/try/demo_source/feoffset1.svg)（右键单击 SVG 图形预览源）

代码解析：

* `<filter></filter>` 元素 `id` 属性定义一个滤镜的唯一名称

* `<rect />` 元素的滤镜属性用来把元素链接到 `f1` 滤镜

### 实例 2

现在，偏移图像可以变的模糊（含 `<feGaussianBlur />` ）：

![图片](https://www.runoob.com/images/svg_feoffset2.jpg)

```html
<!DOCTYPE html>
<html>
<body>

<p><b>Note: </b>Internet Explorer and Safari do not support SVG filters yet!</p>

<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <defs>
    <filter id="f1" x="0" y="0" width="200%" height="200%">
      <feOffset result="offOut" in="SourceGraphic" dx="20" dy="20" />
      <feGaussianBlur result="blurOut" in="offOut" stdDeviation="10" />
      <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
    </filter>
  </defs>
  <rect width="90" height="90" stroke="green" stroke-width="3" fill="yellow" filter="url(#f1)" />
</svg>

</body>
</html>
```

> 对于 Opera 用户：[【查看 SVG 文件】](https://www.runoob.com/try/demo_source/feoffset2.svg)（右键单击 SVG 图形预览源）

代码解析：

* `<feGaussianBlur />` 元素的 `stdDeviation` 属性定义了模糊量

### 实例 3

现在，制作一个黑色的阴影：

![图片](https://www.runoob.com/images/svg_feoffset3.jpg)

```html
<!DOCTYPE html>
<html>
<body>

<p><b>Note: </b>Internet Explorer and Safari do not support SVG filters yet!</p>

<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <defs>
    <filter id="f1" x="0" y="0" width="200%" height="200%">
      <feOffset result="offOut" in="SourceAlpha" dx="20" dy="20" />
      <feGaussianBlur result="blurOut" in="offOut" stdDeviation="10" />
      <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
    </filter>
  </defs>
  <rect width="90" height="90" stroke="green" stroke-width="3" fill="yellow" filter="url(#f1)" />
</svg>

</body>
</html>
```

> 对于 Opera 用户：[【查看 SVG 文件】](https://www.runoob.com/try/demo_source/feoffset3.svg)（右键单击 SVG 图形预览源）

代码解析：

* `<feOffset />` 元素的属性改为 `"SourceAlpha"` 在 Alpha 通道使用残影，而不是整个 RGBA 像素

### 实例 4

现在为阴影涂上一层颜色：

![图片](https://www.runoob.com/images/svg_feoffset4.jpg)

```html
<!DOCTYPE html>
<html>
<body>

<p><b>Note: </b>Internet Explorer and Safari do not support SVG filters yet!</p>

<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <defs>
    <filter id="f1" x="0" y="0" width="200%" height="200%">
      <feOffset result="offOut" in="SourceGraphic" dx="20" dy="20" />
      <feColorMatrix result = "matrixOut" in = "offOut" type = "matrix" values = "0.2 0 0 0 0 0 0.2 0 0 0 0 0 0.2 0 0 0 0 0 1 0"/>
      <feGaussianBlur result="blurOut" in="matrixOut" stdDeviation="10" />
      <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
    </filter>
  </defs>
  <rect width="90" height="90" stroke="green" stroke-width="3" fill="yellow" filter="url(#f1)" />
</svg>

</body>
</html>
```

> 对于 Opera 用户：[【查看 SVG 文件】](https://www.runoob.com/try/demo_source/feoffset4.svg)（右键单击 SVG 图形预览源）

代码解析：

* `<feColorMatrix />` 过滤器是用来转换偏移的图像使之更接近黑色的颜色

  `'0.2'` 矩阵的三个值都获取乘以红色，绿色和蓝色通道

  降低其值带来的颜色至黑色（黑色为 `0` ）

#### 变换矩阵的定义和说明

`<feColorMatrix />` 的 `matrix` 是一个 `4*5` 的矩阵

* 前面 `4` 列是颜色通道的比例系数，最后一列是常量偏移

![图片](https://www.runoob.com/wp-content/uploads/2017/09/20160422110932437.png)

上面公式中的 `rr` 表示 `red to red` 系数，以此类推，`c1~c4` 表示常量偏移

* 第一个 `4*5` 矩阵为变换矩阵，第二个单列矩阵为待变换对象的像素值

  右侧单列矩阵为矩阵 `1` 和 `2` 的点积结果

* 这个变换矩阵看起来比较复杂，在实践上常使用一个简化的对角矩阵

  即除了 `rr/gg/bb/aa` 取值非零外，其余行列取值为 `0`

  这就退化成了简单的各颜色通道的独立调整

`<feColorMatrix />` 的语法:

```html
<filter id="f1" x="0%" y="0%" width="100%" height="100%">
  <feColorMatrix
     result="original" id="c1" type="matrix"
     values="1 0 0 0 0
             0 1 0 0 0
             0 0 1 0 0
             0 0 0 1 0" />
</filter>
```

上述 `<feColorMatrix />` 过滤器的类型值为 `matrix` ，除此之外，还有 **`saturate（饱和度）`** 和 **`hueRotate（色相旋转）`** ，取值比较简单，这里不做说明

* 显然当变换矩阵为单位对角矩阵时，变换结果和原值相等

* 我们可以尝试调整比例系数，比如把 `rr` 的值设置为 `0` ，即去除图像中的 `red` 颜色通道含量：

```html
<!DOCTYPE html>
<html>
<body>

<svg width="100%" height="100%" viewBox="0 0 150 120" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">

    <filter id="colorMatrix">
        <feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 0
           0 1 0 0 0
           0 0 1 0 0
           0 0 0 1 0" />
    </filter>
    <g filter="">
        <circle cx="30" cy="30" r="20" fill="red" fill-opacity="0.5" />
    </g>
    <g filter="url(#colorMatrix)">
        <circle cx="80" cy="30" r="20" fill="red" fill-opacity="0.5" />
    </g>
</svg>

</body>
</html>
```

## 渐变

渐变是一种从一种颜色到另一种颜色的平滑过渡

* 另外，可以把多个颜色的过渡应用到同一个元素上

SVG 渐变主要有两种类型：

* Linear
* Radial

## 渐变 - 线性

`<linearGradient></linearGradient>` 元素用于定义线性渐变

* `<linearGradient></linearGradient>` 标签必须嵌套在 `<defs></defs>` 的内部

* `<defs></defs>` 标签是 `definitions` 的缩写，它可对诸如渐变之类的特殊元素进行定义

线性渐变可以定义为水平，垂直或角渐变：

* 当 `y1` 和 `y2` 相等，而 `x1` 和 `x2` 不同时，可创建水平渐变

* 当 `x1` 和 `x2` 相等，而 `y1` 和 `y2` 不同时，可创建垂直渐变

* 当 `x1` 和 `x2` 不同，且 `y1` 和 `y2` 不同时，可创建角形渐变

### 实例 1

定义水平线性渐变从黄色到红色的椭圆形：

```html
<!DOCTYPE html>
<html>
<body>

<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:rgb(255,255,0);stop-opacity:1" />
      <stop offset="100%" style="stop-color:rgb(255,0,0);stop-opacity:1" />
    </linearGradient>
  </defs>
  <ellipse cx="200" cy="70" rx="85" ry="55" fill="url(#grad1)" />
</svg>

</body>
</html>
```

> 对于 Opera 用户：[【查看 SVG 文件】](https://www.runoob.com/try/demo_source/linear1.svg)（右键单击 SVG 图形预览源）

代码解析：

* `<linearGradient></linearGradient>` 标签的 `id` 属性可为渐变定义一个唯一的名称

* `<linearGradient></linearGradient>` 标签的 `X1` ，`X2` ，`Y1` ，`Y2` 属性定义渐变开始和结束位置

* 渐变的颜色范围可由两种或多种颜色组成

  每种颜色通过一个 `<stop />` 标签来规定

  `offset` 属性用来定义渐变的开始和结束位置。

* 填充属性把 `<ellipse />` 元素链接到此渐变

### 实例 2

定义一个垂直线性渐变从黄色到红色的椭圆形：

```html
<!DOCTYPE html>
<html>
<body>

<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:rgb(255,0,0);stop-opacity:1" />
      <stop offset="100%" style="stop-color:rgb(255,255,0);stop-opacity:1" />
    </linearGradient>
  </defs>
  <ellipse cx="200" cy="70" rx="85" ry="55" fill="url(#grad1)" />
</svg>

</body>
</html>
```

> 对于 Opera 用户：[【查看 SVG 文件】](https://www.runoob.com/try/demo_source/linear2.svg)（右键单击 SVG 图形预览源）

### 实例 3

定义一个椭圆形，水平线性渐变从黄色到红色并添加一个椭圆内文本：

```html
<!DOCTYPE html>
<html>
<body>

<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:rgb(255,255,0);stop-opacity:1" />
      <stop offset="100%" style="stop-color:rgb(255,0,0);stop-opacity:1" />
    </linearGradient>
  </defs>
  <ellipse cx="200" cy="70" rx="85" ry="55" fill="url(#grad1)" />
  <text fill="#ffffff" font-size="45" font-family="Verdana" x="150" y="86">SVG</text>
</svg>

</body>
</html>
```

> 对于 Opera 用户：[【查看 SVG 文件】](https://www.runoob.com/try/demo_source/linear3.svg)（右键单击 SVG 图形预览源）

代码解析：

* `<text></text>` 元素是用来添加一个文本

## 渐变- 放射性

`<radialGradient></radialGradient>` 元素用于定义放射性渐变

* `<radialGradient></radialGradient>` 标签必须嵌套在 `<defs></defs>` 的内部

* `<defs></defs>` 标签是 `definitions` 的缩写，它可对诸如渐变之类的特殊元素进行定义

### 实例 1

定义一个放射性渐变从白色到蓝色椭圆：

```html
<!DOCTYPE html>
<html>
<body>

<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <defs>
    <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
      <stop offset="0%" style="stop-color:rgb(255,255,255);stop-opacity:0" />
      <stop offset="100%" style="stop-color:rgb(0,0,255);stop-opacity:1" />
    </radialGradient>
  </defs>
  <ellipse cx="200" cy="70" rx="85" ry="55" fill="url(#grad1)" />
</svg>

</body>
</html>
```

> 对于 Opera 用户：[【查看 SVG 文件】](https://www.runoob.com/try/demo_source/radial1.svg)（右键单击 SVG 图形预览源）

代码解析：

* `<radialGradient></radialGradient>` 标签的 `id` 属性可为渐变定义一个唯一的名称

* `cx` ，`cy` 和 `r` 属性定义的最外层圆和 `fx` 和 `fy` 定义的最内层圆

* 渐变颜色范围可以由两个或两个以上的颜色组成

  每种颜色用一个 `<stop />` 标签指定

  `offset` 属性用来定义渐变色开始和结束

* 填充属性把 `<ellipse />` 元素链接到此渐变

### 实例 2

定义放射性渐变从白色到蓝色的另一个椭圆：

```html
<!DOCTYPE html>
<html>
<body>

<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <defs>
    <radialGradient id="grad1" cx="20%" cy="30%" r="30%" fx="50%" fy="50%">
      <stop offset="0%" style="stop-color:rgb(255,255,255);stop-opacity:0" />
      <stop offset="100%" style="stop-color:rgb(0,0,255);stop-opacity:1" />
    </radialGradient>
  </defs>
  <ellipse cx="200" cy="70" rx="85" ry="55" fill="url(#grad1)" />
</svg>

</body>
</html>
```

> 对于 Opera 用户：[【查看 SVG 文件】](https://www.runoob.com/try/demo_source/radial2.svg)（右键单击 SVG 图形预览源）

## 实例

下面的例子是把 SVG 代码直接嵌入到 HTML 代码中

* 谷歌 Chrome ，火狐，Internet Explorer 9 ，和 Safari 都支持

> 注意：下面的例子将不会在 Opera 运行
>> 即使 Opera 支持 SVG ，它也不支持 SVG 在 HTML 代码中直接使用

### [【 SVG 基本形状】](https://www.runoob.com/svg/svg-examples.html)

一个圆

矩形

不透明矩形

一个矩形不透明2

一个带圆角矩形

一个椭圆

累叠而上的三个椭圆

两个椭圆

一条线

三角形

四边形

一个星星

另一个星星

折线

另一个折线

路径

二次贝塞尔曲线

编写文字

旋转文本

路径上文字

几行文字

文本链接

定义一条线，文本或轮廓颜色（stroke）

定义一条线宽度，文本或轮廓（stroke-width）

stroke-linecap属性定义不同类型的开放路径的终结：

定义虚线（stroke-dasharray）

### [【 SVG 滤镜】](https://www.runoob.com/svg/svg-examples.html)

feGaussianBlur - 模糊效果

feOffset - 偏移一个矩形，然后混合偏移图像顶部

feOffset - 模糊偏移图像

feOffset - 使阴影变黑色

feOffset - 为阴影涂上一层颜色

一个feBlend滤镜

一个feColorMatrix滤镜

一个feComponentTransfer滤镜

feOffset、feFlood、feComposite、feMerge 以及 feMergeNode

一个feMorphology滤镜

滤镜1

滤镜2

滤镜3

滤镜4

滤镜5

滤镜6

### [【 SVG 渐变】](https://www.runoob.com/svg/svg-examples.html)

水平线性渐变从黄色到红色的椭圆形

垂直线性渐变从黄色到红色椭圆形

水平线性渐变从黄色到红色并添加一个椭圆内文本

放射性渐变从白色到蓝色椭圆

放射性渐变从白色到蓝色的另一个椭圆

### [【 SVG 杂项】](https://www.runoob.com/svg/svg-examples.html)

重复用 5 秒时间淡出的矩形

矩形会变大并改变颜色

会改变颜色的三个矩形

沿一个运动路径移动的文本

沿一个运动路径移动、旋转并缩放的文本

沿一个运动路径移动、旋转并缩放的文本 + 逐步放大并改变颜色的矩形

## [【参考手册】](https://www.runoob.com/svg/svg-reference.html)
