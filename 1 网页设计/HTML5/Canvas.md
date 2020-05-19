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

方法|说明
-|-
`fillRect(x, y, width, height)`|绘制一个填充的矩形
`strokeRect(x, y, width, height)`|绘制一个矩形的边框
`clearRect(x, y, widh, height)`|清除指定的矩形区域，然后这块区域会变的完全透明

这三个方法具有相同的参数：

参数|说明
-|-
x ，y|指的是矩形的左上角的坐标，相对于 canvas 的坐标原点
width ，height|指的是绘制的矩形的宽和高

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
x|矩形左上角的 x 坐标
y|矩形左上角的 y 坐标
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

方法|说明
-|-
`beginPath()`|新建一条路径，路径一旦创建成功，图形绘制命令被指向到路径上生成路径
`moveTo(x, y)`|把画笔移动到指定的坐标(x, y)。相当于设置路径的起始点坐标
`closePath()`|闭合路径之后，图形绘制命令又重新指向到上下文中
`stroke()`|通过线条来绘制图形轮廓
`fill()`|通过填充路径的内容区域生成实心的图形

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

> 其实绘制的圆弧就是与这两条直线相切的圆弧

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

#### 绘制二次贝塞尔曲线

```
quadraticCurveTo(cp1x, cp1y, x, y)
```

参数|说明
-|-
cp1x 和 cp1y|控制点坐标
​x 和 y|结束点坐标

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

#### 绘制三次贝塞尔曲线

```
bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
```

参数|说明
-|-
cp1x 和 cp1y|控制点 1 坐标
cp2x 和 cp2y|控制点 2 坐标
​x 和 y|结束点坐标

```js
function draw(){
  var canvas = document.getElementById('tutorial');
  if (!canvas.getContext) return;
  var ctx = canvas.getContext("2d");

  ctx.beginPath();
  ctx.moveTo(40, 200); // 起始点

  var cp1x = 20, cp1y = 100;  // 控制点1
  var cp2x = 100, cp2y = 120;  // 控制点2
  var x = 200, y = 200; // 结束点

  // 绘制二次贝塞尔曲线
  ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
  ctx.stroke();

  ctx.beginPath();
  ctx.rect(40, 200, 10, 10);
  ctx.rect(cp1x, cp1y, 10, 10);
  ctx.rect(cp2x, cp2y, 10, 10);
  ctx.rect(x, y, 10, 10);
  ctx.fill();
}

draw();
```

![图片](https://www.runoob.com/wp-content/uploads/2018/12/3947786617-5b74dd8ec8678_articlex.png)

## 添加样式和颜色

在前面的绘制矩形章节中，只用到了默认的线条和颜色

如果想要给图形上色，有两个重要的属性可以做到：

参数|说明
-|-
fillStyle = color|设置图形的填充颜色
strokeStyle = color|设置图形轮廓的颜色

备注：

* color 可以是表示 css 颜色值的字符串、渐变对象或者图案对象

* 默认情况下，线条和填充颜色都是黑色

* 一旦您设置了 `strokeStyle` 或者 `fillStyle` 的值，那么这个新值就会成为新绘制的图形的默认值

  如果你要给每个图形上不同的颜色，你需要重新设置 `fillStyle` 或 `strokeStyle` 的值

### fillStyle

```js
function draw(){
  var canvas = document.getElementById('tutorial');
  if (!canvas.getContext) return;
  var ctx = canvas.getContext("2d");
  for (var i = 0; i < 6; i++){
    for (var j = 0; j < 6; j++){
      ctx.fillStyle = 'rgb(' + Math.floor(255 - 42.5 * i) + ',' +
        Math.floor(255 - 42.5 * j) + ',0)';
      ctx.fillRect(j * 50, i * 50, 50, 50);
    }
  }
}

draw();
```

![图片](https://www.runoob.com/wp-content/uploads/2018/12/2505008676-5b74dd8ebad41_articlex.png)

### strokeStyle

```js
function draw(){
    var canvas = document.getElementById('tutorial');
    if (!canvas.getContext) return;
    var ctx = canvas.getContext("2d");
    for (var i = 0; i < 6; i++){
        for (var j = 0; j < 6; j++){
            ctx.strokeStyle = `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
            ctx.strokeRect(j * 50, i * 50, 40, 40);
        }
    }
}
draw();
/**
 返回随机的 [from, to] 之间的整数(包括 from ，也包括 to )
 */
function randomInt(from, to){
    return parseInt(Math.random() * (to - from + 1) + from);
}
```

![图片](https://www.runoob.com/wp-content/uploads/2018/12/3288535670-5b74dd8ea12d9_articlex.png)

### 透明度

`globalAlpha = transparencyValue`

* 这个属性影响到 canvas 里所有图形的透明度

* 有效的值范围是 `0.0`（完全透明）到 `1.0`（完全不透明），默认是 `1.0`

> `globalAlpha` 属性在需要绘制大量拥有相同透明度的图形时候相当高效
>> 不过，使用 `rgba()` 设置透明度更加好一些

### 线宽

`line style`

* 线宽

* 只能是正值

* 默认是 `1.0`

* 起始点和终点的连线为中心，上下各占线宽的一半

```js
ctx.beginPath();
ctx.moveTo(10, 10);
ctx.lineTo(100, 10);
ctx.lineWidth = 10;
ctx.stroke();

ctx.beginPath();
ctx.moveTo(110, 10);
ctx.lineTo(160, 10)
ctx.lineWidth = 20;
ctx.stroke()
```

![图片](https://www.runoob.com/wp-content/uploads/2018/12/3410060825-5b74dd8ea12d9_articlex.png)

### 线条末端样式

`lineCap = type`

* 线条末端样式

* `type` 共有 `3` 个值

type 值|说明
-|-
butt|线段末端以方形结束
round|线段末端以圆形结束
square|线段末端以方形结束

> `square` 会增加一个宽度和线段相同，高度是线段厚度一半的矩形区域

```js
var lineCaps = ["butt", "round", "square"];

for (var i = 0; i < 3; i++){
  ctx.beginPath();

  ctx.moveTo(20 + 30 * i, 30);
  ctx.lineTo(20 + 30 * i, 100);

  ctx.lineWidth = 20;
  ctx.lineCap = lineCaps[i];

  ctx.stroke();
}

ctx.beginPath();

ctx.moveTo(0, 30);
ctx.lineTo(300, 30);

ctx.moveTo(0, 100);
ctx.lineTo(300, 100)

ctx.strokeStyle = "red";
ctx.lineWidth = 1;
ctx.stroke();
```

![图片](https://www.runoob.com/wp-content/uploads/2018/12/3380216230-5b74dd8e97e85_articlex.png)

### 线条间接合处的样式

`lineJoin = type`

* 同一个 path 内，设定线条与线条间接合处的样式

* `type` 共有 `3` 个值

type 值|说明
-|-
round|通过填充一个额外的，圆心在相连部分末端的扇形，绘制拐角的形状；圆角的半径是线段的宽度
bevel|在相连部分的末端填充一个额外的以三角形为底的区域，每个部分都有各自独立的矩形拐角
miter (默认)|通过延伸相连部分的外边缘，使其相交于一点，形成一个额外的菱形区域

```js
function draw(){
  var canvas = document.getElementById('tutorial');
  if (!canvas.getContext) return;
  var ctx = canvas.getContext("2d");

  var lineJoin = ['round', 'bevel', 'miter'];
  ctx.lineWidth = 20;

  for (var i = 0; i < lineJoin.length; i++){
    ctx.lineJoin = lineJoin[i];
    ctx.beginPath();

    ctx.moveTo(50, 50 + i * 50);
    ctx.lineTo(100, 100 + i * 50);
    ctx.lineTo(150, 50 + i * 50);
    ctx.lineTo(200, 100 + i * 50);
    ctx.lineTo(250, 50 + i * 50);

    ctx.stroke();
  }
}

draw();
```

![图片](https://www.runoob.com/wp-content/uploads/2018/12/1584506777-5b74dd8e82768_articlex.png)

### 虚线

用 `setLineDash` 方法和 `lineDashOffset` 属性来制定虚线样式

* `setLineDash` 方法接受一个数组，来指定线段与间隙的交替

* `lineDashOffset` 属性设置起始偏移量

```js
function draw(){
  var canvas = document.getElementById('tutorial');
  if (!canvas.getContext) return;
  var ctx = canvas.getContext("2d");

  ctx.setLineDash([20, 5]);  // [实线长度, 间隙长度]
  ctx.lineDashOffset = -0;
  ctx.strokeRect(50, 50, 210, 210);
}

draw();
```

> 备注：`getLineDash()` 返回一个包含当前虚线样式，长度为非负偶数的数组

## 绘制文本

canvas 提供了两种方法来渲染文本：

方法|说明
-|-
fillText(text, x, y [, maxWidth])|在指定的 (x,y) 位置填充指定的文本，绘制的最大宽度是可选的
strokeText(text, x, y [, maxWidth])|在指定的 (x,y) 位置绘制文本边框，绘制的最大宽度是可选的

```js
var ctx;
function draw(){
  var canvas = document.getElementById('tutorial');
  if (!canvas.getContext) return;
  ctx = canvas.getContext("2d");

  ctx.font = "100px sans-serif"
  ctx.fillText("天若有情", 10, 100);
  ctx.strokeText("天若有情", 10, 200)
}

draw();
```

![图片](https://www.runoob.com/wp-content/uploads/2018/12/404304980-5b74dd8e7499e_articlex.png)

### 给文本添加样式

样式|说明
-|-
`font = value`|当前我们用来绘制文本的样式，这个字符串使用和 CSS `font` 属性相同的语法（默认的字体是 `10px sans-serif` ）
`textAlign = value`|文本对齐选项，可选的值包括：`start` ，`end` ，`left` ，right 或 center（默认值是 `start` ）
`textBaseline = value`|基线对齐选项，可选的值包括：`top` ，`hanging` ，`middle` ，`alphabetic` ，`ideographic` ，`bottom`（默认值是 `alphabetic` ）
`direction = value`|文本方向，可能的值包括：`ltr`，`rtl`，`inherit`（默认值是 `inherit` ）

## 绘制图片













































































































































































































































































































































































































































