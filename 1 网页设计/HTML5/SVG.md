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

`<rect />` 标签可用来创建矩形，以及矩形的变种：

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




















































































































































































































































































































