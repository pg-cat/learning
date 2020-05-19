以下整理自[【菜鸟教程：学习 HTML5 Canvas 这一篇文章就够了】](https://www.runoob.com/w3cnote/html5-canvas-intro.html)

# Canvas

## 简介

`Canvas` 是 HTML5 新增的，一个可以使用脚本(通常为 JavaScript ) 在其中绘制图像的 HTML 元素

* 它可以用来制作照片集或者制作简单(也不是那么简单)的动画

* 甚至可以进行实时视频处理和渲染

最初由苹果内部使用自己 `MacOS X WebKit` 推出，供应用程序使用像仪表盘的构件和 Safari 浏览器使用

* 后来，有人通过 Gecko 内核的浏览器 (尤其是 Mozilla 和 Firefox )，Opera 和 Chrome 和超文本网络应用技术工作组建议为下一代的网络技术使用该元素

`Canvas` 是由 HTML 代码配合高度和宽度属性而定义出的可绘制区域

* JavaScript 代码可以访问该区域，类似于其他通用的二维 API ，通过一套完整的绘图函数来动态生成图形

​Mozilla 程序从 Gecko 1.8 ( Firefox 1.5 ) 开始支持 `canvas`

* Internet Explorer 从 IE9 开始 `canvas`

* Chrome 和 Opera 9+ 也支持 `canvas`

## 基本使用

```html
<canvas id="tutorial" width="300" height="300"></canvas>
```

### `canvas` 元素

`<canvas>` 看起来和 `<img />` 标签一样

* 只是 `<canvas>` 只有两个可选的属性 `width` 、`heigth` 属性，而没有 `src` 、`alt` 属性

* 如果不给 `<canvas>` 设置 `widht` 、`height` 属性时，则默认 `width` 为 `300` 、`height` 为 `150` ，单位都是 `px`

* 也可以使用 css 属性来设置宽高，但是如宽高属性和初始比例不一致，他会出现扭曲

  所以，建议永远不要使用 css 属性来设置 `<canvas>` 的宽高

#### 替换内容

由于某些较老的浏览器（尤其是 IE9 之前的 IE 浏览器）或者浏览器不支持 HTML 元素 `<canvas>` ，在这些浏览器上你应该总是能展示替代内容

* 支持 `<canvas>` 的浏览器会只渲染 `<canvas>` 标签，而忽略其中的替代内容

* 不支持 `<canvas>` 的浏览器则 会直接渲染替代内容

用文本替换：

```html
<canvas>
    你的浏览器不支持 canvas，请升级你的浏览器。
</canvas>
```

用 `<img>` 替换：

```html
<canvas>
    <img src="./美女.jpg" alt="">
</canvas>
```

> 结束标签 `</canvas>` 不可省略
>> 与 `<img>` 元素不同，`<canvas>` 元素需要结束标签( `</canvas>` )
>>> 如果结束标签不存在，则文档的其余部分会被认为是替代内容，将不会显示出来

### 渲染上下文

`​<canvas>` 会创建一个固定大小的画布，会公开一个或多个渲染上下文(画笔)，使用渲染上下文来绘制和处理要展示的内容

​我们重点研究 `2D` 渲染上下文

* 其他的上下文我们暂不研究

* 比如， WebGL 使用了基于 OpenGL ES的3D 上下文 ( `"experimental-webgl"` )

```js
var canvas = document.getElementById('tutorial');
// 获得 2d 上下文对象
var ctx = canvas.getContext('2d');
```

### 检测支持性

```js
var canvas = document.getElementById('tutorial');

if (canvas.getContext){
  var ctx = canvas.getContext('2d');
  // drawing code here
} else {
  // canvas-unsupported code here
}
```

### 代码模板

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>菜鸟教程(runoob.com)</title>

<style type="text/css">
  canvas {
    border: 1px solid black;
  }
</style>

</head>
<body>

<canvas id="tutorial" width="300" height="300"></canvas>

<script type="text/javascript">
function draw(){
  var canvas = document.getElementById('tutorial');
  if(!canvas.getContext) return;
    var ctx = canvas.getContext("2d");
    // 开始代码
}

draw();
</script>

</body>
</html>
```

### 一个简单的例子

以下实例绘制两个长方形：

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>菜鸟教程(runoob.com)</title>

<style type="text/css">
  canvas {
      border: 1px solid black;
  }
</style>

</head>
<body>

<canvas id="tutorial" width="300" height="300"></canvas>

<script type="text/javascript">
function draw(){
  var canvas = document.getElementById('tutorial');
  if(!canvas.getContext) return;
  var ctx = canvas.getContext("2d");

  // 选择颜色
  ctx.fillStyle = "rgb(200,0,0)";
  // 绘制矩形
  ctx.fillRect (10, 10, 55, 50);

  // 选择颜色
  ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
  // 绘制矩形
  ctx.fillRect (30, 30, 55, 50);
}

draw();
</script>

</body>
</html>
```

## 绘制形状

### 栅格 ( grid ) 和坐标空间

![图片](https://www.runoob.com/wp-content/uploads/2018/12/Canvas_default_grid.png)

​如上图所示，canvas 元素默认被网格所覆盖

* 通常来说网格中的一个单元相当于 canvas 元素中的一像素

* 栅格的起点为左上角，坐标为 `(0,0)`

* 所有元素的位置都相对于原点来定位

  所以图中蓝色方形左上角的坐标为距离左边（ `X` 轴）`x` 像素，距离上边（ `Y` 轴）`y` 像素，坐标为 `(x,y)`

### 绘制矩形

canvas 只支持一种原生的图形绘制：矩形

* 所有其他图形都至少需要生成一种路径 ( `path` )

* 不过，我们拥有众多路径生成的方法让复杂图形的绘制成为了可能

canvast 提供了三种方法绘制矩形：

* `fillRect(x, y, width, height)`

  绘制一个填充的矩形

* `strokeRect(x, y, width, height)`

  绘制一个矩形的边框

* `clearRect(x, y, widh, height)`

  清除指定的矩形区域，然后这块区域会变的完全透明

这三个方法具有相同的参数：

* x ，y

  指的是矩形的左上角的坐标

  相对于 canvas 的坐标原点

* width ，height

  指的是绘制的矩形的宽和高

```js
function draw(){
  var canvas = document.getElementById('tutorial');
  if(!canvas.getContext) return;
  var ctx = canvas.getContext("2d");

  // 绘制矩形，填充的默认颜色为黑色
  ctx.fillRect(10, 10, 100, 50);

  // 绘制矩形边框
  ctx.strokeRect(10, 70, 100, 50);
}

draw();
```

![图片](https://www.runoob.com/wp-content/uploads/2018/12/2400420933-5b74dd8f80306_articlex.png)

```js
ctx.clearRect(15, 15, 50, 25);
```

![图片](https://www.runoob.com/wp-content/uploads/2018/12/2347163070-5b74dd8f813a6_articlex.png)

### 创建矩形

`rect()` 方法创建矩形

参数|描述
-|-
x|矩形左上角的 `x` 坐标
y|矩形左上角的 `y` 坐标
width|矩形的宽度，以像素计
height|矩形的高度，以像素计

> 提示：矩形被创建后并不会显示！
>> 需使用 `stroke()` 或 `fill()` 方法在画布上实际地绘制矩形

通过 `rect()` 方法来创建三个不同样式的矩形：

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>创建三个不同样式的矩形</title>
</head>
<body>

<canvas id="myCanvas" width="300" height="150" style="border:1px solid #d3d3d3;">
  您的浏览器不支持 HTML5 canvas 标签。
</canvas>

<script>
var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");

// 红色矩形
ctx.beginPath();
ctx.lineWidth="6";
ctx.strokeStyle="red";
ctx.rect(5,5,290,140);
ctx.stroke();

// 绿色矩形
ctx.beginPath();
ctx.lineWidth="4";
ctx.strokeStyle="green";
ctx.rect(30,30,50,50);
ctx.stroke();

// 蓝色矩形
ctx.beginPath();
ctx.lineWidth="10";
ctx.strokeStyle="blue";
ctx.rect(50,50,150,80);
ctx.stroke();
</script>

</body>
</html>
```

通过 `rect()` 方法来创建三个相同样式的矩形：

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>创建三个相同样式的矩形</title>
</head>
<body>

<canvas id="myCanvas" width="300" height="150" style="border:1px solid #d3d3d3;">
您的浏览器不支持 HTML5 canvas 标签。
</canvas>
<script>
var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");

ctx.beginPath();
ctx.lineWidth="4";
ctx.strokeStyle="green";

// 创建三个相同样式的矩形
ctx.rect(5,5,290,140);
ctx.rect(30,30,50,50);
ctx.rect(50,50,150,80);

ctx.stroke();
</script>

</body>
</html>
```

## 绘制路径 ( path )

图形的基本元素是路径

* 路径是通过不同颜色和宽度的线段或曲线相连形成的不同形状的点的集合

* 一个路径，甚至一个子路径，都是闭合的

使用路径绘制图形需要一些额外的步骤：

* 创建路径起始点

* 调用绘制方法去绘制出路径

* 把路径封闭

* 一旦路径生成，通过描边或填充路径区域来渲染图形

下面是需要用到的方法：

* `beginPath()`

  新建一条路径，路径一旦创建成功，图形绘制命令被指向到路径上生成路径

* `moveTo(x, y)`

  把画笔移动到指定的坐标(x, y)。相当于设置路径的起始点坐标。

* `closePath()`

  闭合路径之后，图形绘制命令又重新指向到上下文中

* `stroke()`

  通过线条来绘制图形轮廓

* `fill()`

  通过填充路径的内容区域生成实心的图形

### 绘制线段

```js
function draw(){
  var canvas = document.getElementById('tutorial');
  if (!canvas.getContext) return;
  var ctx = canvas.getContext("2d");

  // 新建一条path
  ctx.beginPath();

  // 把画笔移动到指定的坐标
  ctx.moveTo(50, 50);

  // 绘制一条从当前位置到指定坐标(200, 50)的直线
  ctx.lineTo(200, 50);

  // 闭合路径，会拉一条从当前点到path起始点的直线
  // 如果当前点与起始点重合，则什么都不做
  ctx.closePath();

  // 绘制路径
  ctx.stroke();
}

draw();
```

### 绘制三角形边框

```js
function draw(){
  var canvas = document.getElementById('tutorial');
  if (!canvas.getContext) return;
  var ctx = canvas.getContext("2d");

  ctx.beginPath();
  ctx.moveTo(50, 50);
  ctx.lineTo(200, 50);
  ctx.lineTo(200, 200);

  // 虽然我们只绘制了两条线段，但是 closePath() 会闭合路径，仍然是一个三角形
  ctx.closePath();

  // 描边，stroke 不会自动 closePath()
  ctx.stroke();
}
draw();
```

![图片](https://www.runoob.com/wp-content/uploads/2018/12/2106846415-5b74dd8f67000_articlex.png)

### 填充三角形

```js
function draw(){
  var canvas = document.getElementById('tutorial');
  if (!canvas.getContext) return;
  var ctx = canvas.getContext("2d");

  ctx.beginPath();
  ctx.moveTo(50, 50);
  ctx.lineTo(200, 50);
  ctx.lineTo(200, 200);

  // 填充闭合区域
  // 如果 path 没有闭合，则 fill() 会自动闭合路径
  ctx.fill();
}

draw();
```

![图片](https://www.runoob.com/wp-content/uploads/2018/12/3457015746-5b74dd8f72860_articlex.png)

### 绘制圆弧

有两个方法可以绘制圆弧：

* `arc(x, y, r, startAngle, endAngle, anticlockwise)`

  以 `(x, y)` 为圆心，以 `r` 为半径，从 `startAngle` 弧度开始到 `endAngle` 弧度结束

  `anticlosewise` 是布尔值，`true` 表示逆时针，`false` 表示顺时针(默认是顺时针)

  > 注意：
  > * 这里的度数都是弧度
  > * `0` 弧度是指的 `x` 轴正方向

  ```js
  // 角度转换成弧度
  radians=(Math.PI/180)*degrees
  ```

```js
// 圆弧案例 1
function draw(){
  var canvas = document.getElementById('tutorial');
  if (!canvas.getContext) return;
  var ctx = canvas.getContext("2d");

  ctx.beginPath();
  ctx.arc(50, 50, 40, 0, Math.PI / 2, false);
  ctx.stroke();
}

draw();
```

![图片](https://www.runoob.com/wp-content/uploads/2018/12/3832141455-5b74dd8f658df_articlex.png)

```js
// 圆弧案例 2
function draw(){
  var canvas = document.getElementById('tutorial');
  if (!canvas.getContext) return;
  var ctx = canvas.getContext("2d");

  ctx.beginPath();
  ctx.arc(50, 50, 40, 0, Math.PI / 2, false);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(150, 50, 40, 0, -Math.PI / 2, true);
  ctx.closePath();
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(50, 150, 40, -Math.PI / 2, Math.PI / 2, false);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(150, 150, 40, 0, Math.PI, false);
  ctx.fill();
}

draw();
```

![图片](https://www.runoob.com/wp-content/uploads/2018/12/2218794221-5b74dd8f43f98_articlex.png)

* `arcTo(x1, y1, x2, y2, radius)`

  根据给定的控制点和半径画一段圆弧，最后再以直线连接两个控制点

```js
// 圆弧案例 3
function draw(){
  var canvas = document.getElementById('tutorial');
  if (!canvas.getContext) return;
  var ctx = canvas.getContext("2d");

  ctx.beginPath();
  ctx.moveTo(50, 50);

  // 参数 1 、2 ：控制点 1 坐标
  // 参数 3 、4 ：控制点 2 坐标
  // 参数 4 ：圆弧半径
  ctx.arcTo(200, 50, 200, 200, 100);
  ctx.lineTo(200, 200)
  ctx.stroke();

  ctx.beginPath();
  ctx.rect(50, 50, 10, 10);
  ctx.rect(200, 50, 10, 10)
  ctx.rect(200, 200, 10, 10)
  ctx.fill()
}

draw();
```

![图片](https://www.runoob.com/wp-content/uploads/2018/12/3556678928-5b74dd8f1bd2a_articlex.png)

`arcTo` 方法的说明：

* 这个方法可以这样理解：绘制的弧形是由两条切线所决定

* 第 1 条切线：起始点和控制点 1 决定的直线

* 第 2 条切线：控制点 1 和控制点 2 决定的直线

​> 其实绘制的圆弧就是与这两条直线相切的圆弧

### 绘制贝塞尔曲线

首先，我们必须先知道：什么是贝塞尔曲线？

贝塞尔曲线( Bézier curve )，又称贝兹曲线或贝济埃曲线，是应用于二维图形应用程序的数学曲线

* 一般的矢量图形软件通过它来精确画出曲线，贝兹曲线由线段与节点组成，节点是可拖动的支点，线段像可伸缩的皮筋

  我们在绘图工具上看到的钢笔工具就是来做这种矢量曲线的

* 贝塞尔曲线是计算机图形学中相当重要的参数曲线，在一些比较成熟的位图软件中也有贝塞尔曲线工具如 PhotoShop 等

  在 Flash 4 中还没有完整的曲线工具，而在 Flash 5 里面已经提供出贝塞尔曲线工具

* 贝塞尔曲线于 1962 ，由法国工程师皮埃尔·贝塞尔（ Pierre Bézier ）所广泛发表，他运用贝塞尔曲线来为汽车的主体进行设计

  贝塞尔曲线最初由 Paul de Casteljau 于 1959 年运用 de Casteljau 演算法开发，以稳定数值的方法求出贝兹曲线

一次贝塞尔曲线其实是一条直线

![图片](https://www.runoob.com/wp-content/uploads/2018/12/240px-b_1_big.gif)

二次贝塞尔曲线

![图片](https://www.runoob.com/wp-content/uploads/2018/12/b_2_big.gif)

![图片](https://www.runoob.com/wp-content/uploads/2018/12/1544764428-5713-240px-BC3A9zier-2-big.svg-.png)

三次贝塞尔曲线

![图片](https://www.runoob.com/wp-content/uploads/2018/12/b_3_big.gif)

![图片](https://www.runoob.com/wp-content/uploads/2018/12/1544764428-2467-240px-BC3A9zier-3-big.svg-.png)

绘制二次贝塞尔曲线：

```
quadraticCurveTo(cp1x, cp1y, x, y)
```

参数说明：

* cp1x 和 cp1y

  控制点坐标
​
* x 和 y

  结束点坐标

```js
function draw(){
  var canvas = document.getElementById('tutorial');
  if (!canvas.getContext) return;
  var ctx = canvas.getContext("2d");

  ctx.beginPath();
  ctx.moveTo(10, 200); // 起始点

  var cp1x = 40, cp1y = 100;  // 控制点
  var x = 200, y = 200; // 结束点

  // 绘制二次贝塞尔曲线
  ctx.quadraticCurveTo(cp1x, cp1y, x, y);
  ctx.stroke();

  ctx.beginPath();
  ctx.rect(10, 200, 10, 10);
  ctx.rect(cp1x, cp1y, 10, 10);
  ctx.rect(x, y, 10, 10);
  ctx.fill();
}

draw();
```

![图片](https://www.runoob.com/wp-content/uploads/2018/12/274915666-5b74dd8ecb2e2_articlex.png)





























































































































































































































































































































































































































































































































