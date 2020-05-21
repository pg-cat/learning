以下内容整理自[【 ECharts 官方文档】【 4.0+ 】](https://echarts.apache.org/zh/tutorial.html#5%20分钟上手%20ECharts)

---

<!-- TOC -->

- [五分钟上手](#五分钟上手)
    - [获取 ECharts](#获取-echarts)
    - [引入 ECharts](#引入-echarts)
    - [绘制一个简单的图表](#绘制一个简单的图表)
- [自定义构建 ECharts](#自定义构建-echarts)
    - [创建和安装](#创建和安装)
    - [自定义构建](#自定义构建)
    - [允许被引用的模块](#允许被引用的模块)
    - [引用 lib 还是 src](#引用-lib-还是-src)
    - [直接使用 rollup 自定义构建](#直接使用-rollup-自定义构建)
    - [多语言支持](#多语言支持)
- [在 webpack 中](#在-webpack-中)
    - [npm 安装 ECharts](#npm-安装-echarts)
    - [引入 ECharts](#引入-echarts-1)
    - [按需引入 ECharts 图表和组件](#按需引入-echarts-图表和组件)
- [基础概念概览](#基础概念概览)
    - [实例](#实例)
    - [系列](#系列)
    - [组件](#组件)
    - [用 option 描述图表](#用-option-描述图表)
    - [组件的定位](#组件的定位)
        - [类 CSS 的绝对定位](#类-css-的绝对定位)
        - [中心半径定位](#中心半径定位)
        - [其他定位](#其他定位)
    - [坐标系](#坐标系)
- [个性化图表的样式](#个性化图表的样式)
    - [绘制南丁格尔图](#绘制南丁格尔图)
    - [阴影的配置](#阴影的配置)
    - [深色背景和浅色标签](#深色背景和浅色标签)
    - [设置扇形的颜色](#设置扇形的颜色)
- [样式简介](#样式简介)
    - [颜色主题](#颜色主题)
    - [调色盘](#调色盘)
    - [直接的样式设置](#直接的样式设置)
    - [高亮的样式](#高亮的样式)
    - [通过 visualMap 组件设定样式](#通过-visualmap-组件设定样式)
- [异步数据加载和更新](#异步数据加载和更新)
    - [异步加载](#异步加载)
    - [loading 动画](#loading-动画)
    - [数据的动态更新](#数据的动态更新)
- [使用 dataset 管理数据](#使用-dataset-管理数据)
    - [入门例子](#入门例子)
    - [数据到图形的映射](#数据到图形的映射)
    - [按行还是按列做映射](#按行还是按列做映射)
    - [维度（ dimension ）](#维度-dimension-)
    - [数据到图形的映射（ encode ）](#数据到图形的映射-encode-)
    - [视觉通道（颜色、尺寸等）的映射](#视觉通道颜色尺寸等的映射)
    - [默认的映射](#默认的映射)
    - [几个常见的映射设置方式](#几个常见的映射设置方式)
    - [数据的各种格式](#数据的各种格式)
    - [多个 dataset 和他们的引用](#多个-dataset-和他们的引用)
    - [ECharts 3 的数据设置方式](#echarts-3-的数据设置方式)
    - [其他](#其他)
- [在图表中加入交互组件](#在图表中加入交互组件)
    - [数据区域缩放组件](#数据区域缩放组件)
    - [在代码加入 dataZoom 组件](#在代码加入-datazoom-组件)
- [移动端自适应](#移动端自适应)
    - [组件的定位和布局](#组件的定位和布局)
        - [方位定位方式](#方位定位方式)
        - [center / radius 定位方式](#center--radius-定位方式)
        - [横向（ horizontal ）和纵向（ vertical ）](#横向-horizontal-和纵向-vertical-)
        - [与 ECharts 2 的兼容](#与-echarts-2-的兼容)
    - [Media Query](#media-query)
        - [query](#query)
        - [option](#option)
        - [多个 query 被满足时的优先级](#多个-query-被满足时的优先级)
        - [默认 query](#默认-query)
        - [注意事项](#注意事项)
        - [不支持 merge](#不支持-merge)
- [数据的视觉映射](#数据的视觉映射)
    - [数据和维度](#数据和维度)
    - [visualMap 组件](#visualmap-组件)
        - [视觉映射方式的配置](#视觉映射方式的配置)
- [事件和行为](#事件和行为)
    - [鼠标事件的处理](#鼠标事件的处理)

<!-- /TOC -->

## 五分钟上手

### 获取 ECharts

你可以通过以下几种方式获取 ECharts ：

* 从[【 Apache ECharts (incubating) 官网下载界面】](https://echarts.apache.org/download.html)获取官方源码包后构建

* 在 ECharts 的[【 GitHub 】](https://github.com/apache/incubator-echarts/releases)获取

* 通过 npm 获取 echarts

  `npm install echarts --save`

  详见[【在 webpack 中使用 echarts 】](https://echarts.apache.org/tutorial.html#在%20webpack%20中使用%20ECharts)

* 通过[【 jsDelivr 】](https://www.jsdelivr.com/package/npm/echarts)等 CDN 引入

### 引入 ECharts

通过标签方式直接引入构建好的 echarts 文件

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <!-- 引入 ECharts 文件 -->
  <script src="echarts.min.js"></script>
</head>
</html>
```

### 绘制一个简单的图表

在绘图前我们需要为 ECharts 准备一个具备高宽的 DOM 容器

```html
<body>
  <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
  <div id="main" style="width: 600px; height:400px;"></div>
</body>
```

然后就可以通过 `echarts.init` 方法初始化一个 echarts 实例并通过 `setOption` 方法生成一个简单的柱状图，下面是完整代码：

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>ECharts</title>

  <!-- 引入 echarts.js -->
  <script src="echarts.min.js"></script>

</head>
<body>
  <!-- 为ECharts准备一个具备大小（宽高）的Dom -->
  <div id="main" style="width: 600px;height:400px;"></div>

  <script type="text/javascript">
    // 基于准备好的 dom ，初始化 echarts 实例
    var myChart = echarts.init(document.getElementById('main'));

    // 指定图表的配置项和数据
    var option = {
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      legend: {
        data:['销量']
      },
      xAxis: {
        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    };

    // 使用刚指定的配置项和数据显示图表
    myChart.setOption(option);
  </script>
</body>
</html>
```

> [【示例：点击查看在线实例】](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/getting-started)

## 自定义构建 ECharts

一般来说，可以直接从[【 CDN 】](https://www.jsdelivr.com/package/npm/echarts)中获取构建后的 echarts ，也可以从[【 GitHub 】](https://github.com/apache/incubator-echarts/releases)中的 `echarts/dist` 文件夹中获取构建好的 echarts ，这都可以直接在浏览器端项目中使用

这些构建好的 echarts 提供了下面这几种定制：

版本|文件位置|说明
-|-|-
完全版|`echarts/dist/echarts.js`|体积最大，包含所有的图表和组件，所包含内容参见：`echarts/echarts.all.js`
常用版|`echarts/dist/echarts.common.js`|体积适中，包含常见的图表和组件，所包含内容参见：`echarts/echarts.common.js`
精简版|`echarts/dist/echarts.simple.js`|体积较小，仅包含最常用的图表和组件，所包含内容参见：`echarts/echarts.simple.js`

我们也可以自己构建 echarts ，能够仅仅包括自己所需要的图表和组件

可以用这几种方式自定义构建：

* [【在线自定义构建】](https://echarts.apache.org/builder.html)

  比较方便

* 使用 `echarts/build/build.js` 脚本自定义构建

  比在线构建更灵活一点，并且支持多语言

* 直接使用构建工具（如 `rollup` 、`webpack` 、`browserify` ）自己构建

  也是一种选择

### 创建和安装

使用命令行，创建自己的工程：

```sh
mkdir myProject
cd myProject
```

在 `myProject` 目录下使用命令行，初始化工程的[【 npm 】](https://www.npmjs.com/)环境并安装 echarts（这里前提是您已经安装了[【 npm 】](https://www.npmjs.com/)）：

```sh
npm init
npm install echarts --save
```

通过 npm 安装的 echarts 会出现在 `myProject/node_modules` 目录下，从而可以直接在项目代码中得到 echarts ，例如：

* 使用 ES Module ：

```js
import * as echarts from 'echarts';
```

* 使用 CommonJS ：

```js
var echarts = require('echarts')
```

> 下面仅以使用 ES Module 的方式来举例

### 自定义构建

在这个例子中，我们要创建一个饼图，并且想自定义构建一个只含有饼图的 echarts 文件，从而能使 echarts 文件的大小比较小一些

* echarts 已经提供了构建脚本 `echarts/build/build.js` ，基于[【 Node.js 】](https://nodejs.org/)运行

* 我们可以在 `myProject` 目录下使用命令行，看到它的使用方式：

```sh
node node_modules/echarts/build/build.js --help
```

其中我们在这个例子里会用到的参数有：

参数|说明
-|-
`-i`|代码入口文件，可以是绝对路径或者基于当前命令行路径的相对路径
`-o`|生成的 bundle 文件，可以是绝对路径或者基于当前命令行路径的相对路径
`--min`|是否压缩文件（默认不压缩），并且去多余的打印错误信息的代码，形成生产环境可用的文件
`--lang <language shortcut or file path>`|是否使用其他语言版本，默认是中文（例如：`--lang en` 表示使用英文，`--lang my/langXX.js` 表示构建时使用 `<cwd>/my/langXX.js` 替代 `echarts/lib/lang.js` 文件）
`--sourcemap`|是否输出 `source map` ，以便于调试
`--format`|输出的格式，可选 `'umb'`（默认）、`'amd'` 、`'iife'` 、`'cjs'` 、`'es'`

既然我们想自定义构建一个只含有饼图的 echarts 文件，我们需要创建一个入口文件，可以命名为 `myProject/echarts.custom.js` ，文件里会引用所需要的 echarts 模块：

```js
// 引入 echarts 主模块。
export * from 'echarts/src/echarts';

// 引入饼图
import 'echarts/src/chart/pie';

// 在这个场景下，可以引用 `echarts/src` 或者 `echarts/lib` 下的文件（但是不可混用），参见文档后面的解释：引用 `echarts/lib/**` 还是 `echarts/src/**`
```

然后我们可以在 `myProject` 目录下使用命令行，这样开始构建：

```sh
node node_modules/echarts/build/build.js --min -i echarts.custom.js -o lib/echarts.custom.min.js
```

这样，`myProject/lib/echarts.custom.min.js` 就生成了

我们可以创建 `myProject/pie.html` 来使用它：

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>myProject</title>
  <!-- 引入 lib/echarts.custom.min.js -->
  <script src="lib/echarts.custom.min.js"></script>
</head>
<body>
  <div id="main" style="width: 600px;height:400px;"></div>
  <script>
    // 绘制图表
    echarts.init(document.getElementById('main')).setOption({
      series: {
        type: 'pie',
        data: [
          {name: 'A', value: 1212},
          {name: 'B', value: 2323},
          {name: 'C', value: 1919}
        ]
      }
    });
  </script>
</body>
</html>
```

然后在浏览器里打开 `myProject/pie.html` ，就可以看到一个饼图：

![图片](https://echarts.apache.org/zh/documents/asset/img/custom-build-pie.png)

### 允许被引用的模块

在自定义构建中，允许被引用的模块，全声明在以下两个文件中：

* `myProject/node_module/echarts/echarts.all.js`
* `myProject/node_module/echarts/src/export.js`

`echarts` 和 `zrender` 源代码中的其他模块，都是 echarts 的内部模块，不应该去引用

* 因为在后续 echarts 版本升级中，内部模块的接口和功能可能变化，甚至模块本身也可能被移除

### 引用 lib 还是 src

面对问题：引用 `echarts/lib/**` 还是 `echarts/src/**`

* 项目中如果直接引用 echarts 里的一些模块并自行构建，应该使用 `echarts/lib/**` 路径，而不可使用 `echarts/src/**`

* 当使用构建脚本 `echarts/build/build.js` 打包 bundle，那么两者可以选其一使用（不可混用）

  使用 `echarts/src/**` 可以获得稍微小一些的文件体积

> 原因是：目前，`echarts/src/**` 中是采用 ES Module 的源代码，`echarts/lib/**` 中是 `echarts/src/**` 编译成为 CommonJS 后的产物（编译成 CommonJS 是为了向后兼容一些不支持 ES Module 的老版本 `NodeJS` 和 `webpack` ）
>> 因为历史上，各个 echarts 扩展、各个用户项目，一直是使用的包路径是 `echarts/lib/**` ，所以这个路径不应该改变，否则，可能导致混合使用 `echarts/src/**` 和 `echarts/lib/**` 得到两个不同的 echarts 名空间，造成问题
> * 而使用 `echarts/build/build.js` 打包 bundle 时没有涉及这个问题，`echarts/src/**` 中的 ES Module 便于静态分析从而得到稍微小些的文件体积

### 直接使用 rollup 自定义构建

上文中介绍了如何使用 echarts 提供的脚本 `echarts/build/build.js` 自定义构建

* 与此并列的另一种选择是，我们直接使用构建工具（如[【 rollup 】](https://rollupjs.org/)、[【 webpack 】](https://webpack.js.org//)、[【 browserify 】](http://browserify.org/)）自定义构建，并且把 echarts 代码和项目代码在构建成一体

* 下面我们仅仅介绍如何使用 `rollup` 来构建

  [【 webpack 】](https://webpack.js.org//)和[【 browserify 】](http://browserify.org/)与此类同，不赘述

首先我们在 `myProject` 目录下使用 npm 安装[【 rollup 】](https://rollupjs.org/)：

```sh
npm install rollup --save-dev
npm install rollup-plugin-node-resolve --save-dev
npm install rollup-plugin-uglify --save-dev
```

接下来创建项目 JS 文件 `myProject/line.js` 来绘制图表，内容为：

```js
// 引入 echarts 主模块。
import * as echarts from 'echarts/lib/echarts';
// 引入折线图。
import 'echarts/lib/chart/line';
// 引入提示框组件、标题组件、工具箱组件。
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/toolbox';

// 基于准备好的dom，初始化 echarts 实例并绘制图表。
echarts.init(document.getElementById('main')).setOption({
  title: { text: 'Line Chart' },
  tooltip: {},
  toolbox: {
    feature: {
      dataView: {},
      saveAsImage: {
        pixelRatio: 2
      },
      restore: {}
    }
  },
  xAxis: {},
  yAxis: {},
  series: [{
    type: 'line',
    smooth: true,
    data: [[12, 5], [24, 20], [36, 36], [48, 10], [60, 10], [72, 20]]
  }]
});
```

对于不支持 ES Module 的浏览器而言，刚才创建的 `myProject/line.js` 还不能直接被网页引用并在浏览器中运行，需要进行构建

使用 rollup 构建前，需要创建它的配置文件 `myProject/rollup.config.js` ，内容如下：

```js
// 这个插件用于在 `node_module` 文件夹（即 npm 用于管理模块的文件夹）中寻找模块
// 比如，代码中有
// `import 'echarts/lib/chart/line';` 时，这个插件能够寻找到
// `node_module/echarts/lib/chart/line.js` 这个模块文件
import nodeResolve from 'rollup-plugin-node-resolve';

// 用于压缩构建出的代码
import uglify from 'rollup-plugin-uglify';

// 用于多语言支持（如果不需要可忽略此 plugin）
// import ecLangPlugin from 'echarts/build/rollup-plugin-ec-lang';

export default {
  name: 'myProject',

  // 入口代码文件，就是刚才所创建的文件
  input: './line.js',

  plugins: [
    nodeResolve(),

    // ecLangPlugin({lang: 'en'}),

    // 消除代码中的 __DEV__ 代码段，从而不在控制台打印错误提示信息
    uglify()
  ],
  output: {
    // 以 UMD 格式输出，从而能在各种浏览器中加载使用
    format: 'umd',

    // 输出 source map 便于调试
    sourcemap: true,

    // 输出文件的路径
    file: 'lib/line.min.js'
  }
};
```

然后在 `myProject` 目录下使用命令行，构建工程代码 `myProject/line.js` ：

```sh
./node_modules/.bin/rollup -c
```

> 其中 `-c` 表示让 rollup 使用我们刚才创建的 `myProject/rollup.config.js` 文件作为配置文件

构建生成的 `myProject/lib/line.min.js` 文件包括了工程代码和 echarts 代码，并且仅仅包括我们所需要的图和组件，并且可以在浏览器中使用

我们可以用一个示例页面来测试一下，创建文件 `myProject/line.html` ，内容如下：

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>myProject</title>
</head>
<body>
  <!-- 为 echarts 准备一个具备大小（宽高）的Dom。 -->
  <div id="main" style="width: 600px;height:400px;"></div>

  <!-- 引入刚才构建好的文件。 -->
  <script src="lib/line.min.js"></script>
</body>
</html>
```

在浏览器里打开 `myProject/line.html` 则会得到如下效果：

![图片](https://echarts.apache.org/zh/documents/asset/img/custom-build-line.png)

### 多语言支持

上面的例子中能看到，工具箱组件（ toolbox ）的提示文字是中文

* 本质上，echarts 图表显示出来的文字，都可以通过 `option` 来定制，改成任意语言

* 但是如果想 **`默认就是某种语言`** ，则需要通过构建来实现

在上面的例子中，可以在 `echarts/build/build.js` 的参数中指定语言：

```sh
node node_modules/echarts/build/build.js --min -i echarts.custom.js -o lib/echarts.custom.min.js --lang en
```

* 表示使用内置的英文

  此外还可以是 `--lang fi`

```sh
node node_modules/echarts/build/build.js --min -i echarts.custom.js -o lib/echarts.custom.min.js --lang my/langXX.js
```

* 表示在构建时使用 `myProject/my/langXX.js` 文件来替换 `myProject/node_modules/echarts/lib/lang.js` 文件

  这样可以在 `myProject/my/langXX.js` 文件中自定义语言

  > 注意：这种方式中，必须指定 `-o` 或者 `--output`

另外，上面的 rollup 插件 `echarts/build/rollup-plugin-ec-lang` 也可以传入同样的参数，实现同样的功能

## 在 webpack 中

[【 Webpack 】](https://webpack.js.org//)是目前比较流行的模块打包工具，你可以在使用 webpack 的项目中轻松的引入和打包 ECharts

> 这里假设你已经对 webpack 具有一定的了解并且在自己的项目中使用

### npm 安装 ECharts

你可以使用如下命令通过 npm 安装 ECharts

```sh
npm install echarts --save
```

### 引入 ECharts

通过 npm 上安装的 ECharts 和 zrender 会放在 `node_modules` 目录下

* 可以直接在项目代码中 require('echarts') 得到 ECharts

```js
var echarts = require('echarts');

// 基于准备好的 dom ，初始化 echarts 实例
var myChart = echarts.init(document.getElementById('main'));

// 绘制图表
myChart.setOption({
  title: {
    text: 'ECharts 入门示例'
  },
  tooltip: {},
  xAxis: {
    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
  },
  yAxis: {},
  series: [{
    name: '销量',
    type: 'bar',
    data: [5, 20, 36, 10, 10, 20]
  }]
});
```

### 按需引入 ECharts 图表和组件

默认使用 `require('echarts')` 得到的是已经加载了所有图表和组件的 ECharts 包，因此体积会比较大，如果在项目中对体积要求比较苛刻，也可以只按需引入需要的模块

例如上面示例代码中只用到了柱状图，提示框和标题组件，因此在引入的时候也只需要引入这些模块，可以有效的将打包后的体积从 `400+ KB` 减小到 `170+ KB`

```js
// 引入 ECharts 主模块
var echarts = require('echarts/lib/echarts');
// 引入柱状图
require('echarts/lib/chart/bar');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');

// 基于准备好的 dom ，初始化 echarts 实例
var myChart = echarts.init(document.getElementById('main'));

// 绘制图表
myChart.setOption({
  title: {
    text: 'ECharts 入门示例'
  },
  tooltip: {},
  xAxis: {
    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
  },
  yAxis: {},
  series: [{
    name: '销量',
    type: 'bar',
    data: [5, 20, 36, 10, 10, 20]
  }]
});
```

> [【可以按需引入的模块列表见】](https://github.com/apache/incubator-echarts/blob/master/index.js)

> 对于流行的模块打包工具[【 browserify 】](http://browserify.org/)也是同样的用法，这里就不赘述了
>> 而对于使用[【 rollup 】](https://rollupjs.org/)的自定义构建，参见[【自定义构建 ECharts 】](https://echarts.apache.org/zh/tutorial.html#自定义构建%20ECharts)

## 基础概念概览

### 实例

一个网页中可以创建多个 echarts 实例

* 每个 echarts 实例 中可以创建多个图表和坐标系等等（用 `option` 来描述）

* 准备一个 `DOM` 节点（作为 echarts 的渲染容器），就可以在上面创建一个 echarts 实例

* 每个 echarts 实例独占一个 `DOM` 节点

![图片](https://echarts.apache.org/zh/documents/asset/img/basic-concepts-overview/multiple-ec-instance.jpg)

### 系列

[【系列（ series ）】](https://echarts.apache.org/zh/option.html#series)是很常见的名词

在 echarts 里，[【系列（ series ）】](https://echarts.apache.org/zh/option.html#series)是指：一组数值以及他们映射成的图

* **`系列`** 这个词原本可能来源于 **`一系列的数据`** ，而在 echarts 中取其扩展的概念，不仅表示数据，也表示数据映射成为的图

* 所以，一个 **`系列`** 包含的要素至少有：

  * 一组数值
  * 图表类型（ `series.type` ）
  * 以及其他的关于这些数据如何映射成图的参数

echarts 里系列类型（ `series.type` ）就是图表类型，系列类型（ `series.type` ）至少有：

* [【 line（折线图）】](https://echarts.apache.org/zh/option.html#series-line)
* [【 bar（柱状图）】](https://echarts.apache.org/zh/option.html#series-bar)
* [【 pie（饼图）】](https://echarts.apache.org/zh/option.html#series-pie)
* [【 scatter（散点图）】](https://echarts.apache.org/zh/option.html#series-scatter)
* [【 graph（关系图）】](https://echarts.apache.org/zh/option.html#series-graph)
* [【 tree（树图）】](https://echarts.apache.org/zh/option.html#series-tree)
* ...

如下图，右侧的 `option` 中声明了三个[【系列（ series ）】](https://echarts.apache.org/zh/option.html#series)：[【 pie（饼图系列）】](https://echarts.apache.org/zh/option.html#series-pie)、[【 line（折线图系列）】](https://echarts.apache.org/zh/option.html#series-line)、[【 bar（柱状图系列）】](https://echarts.apache.org/zh/option.html#series-bar)，每个系列中有他所需要的数据（[【 series.data 】](https://echarts.apache.org/zh/option.html#series.data)）

![图片](https://echarts.apache.org/zh/documents/asset/img/basic-concepts-overview/series-all-a.jpg)

类同地，下图中是另一种配置方式，系列的数据从[【 dataset 】](https://echarts.apache.org/zh/option.html#dataset)中取：

![图片](https://echarts.apache.org/zh/documents/asset/img/basic-concepts-overview/series-all-b.jpg)

### 组件

在系列之上，echarts 中各种内容，被抽象为 **`组件`**

例如，echarts 中至少有这些组件：

* [【 xAxis（直角坐标系 X 轴）】](https://echarts.apache.org/zh/option.html#xAxis)
* [【 yAxis（直角坐标系 Y 轴）】](https://echarts.apache.org/zh/option.html#yAxis)
* [【 grid（直角坐标系底板）】](https://echarts.apache.org/zh/option.html#grid)
* [【 angleAxis（极坐标系角度轴）】](https://echarts.apache.org/zh/option.html#angleAxis)
* [【 radiusAxis（极坐标系半径轴）】](https://echarts.apache.org/zh/option.html#radiusAxis)
* [【 polar（极坐标系底板）】](https://echarts.apache.org/zh/option.html#polar)
* [【 geo（地理坐标系）】](https://echarts.apache.org/zh/option.html#geo)
* [【 dataZoom（数据区缩放组件）】](https://echarts.apache.org/zh/option.html#dataZoom)
* [【 visualMap（视觉映射组件）】](https://echarts.apache.org/zh/option.html#visualMap)
* [【 tooltip（提示框组件）】](https://echarts.apache.org/zh/option.html#tooltip)
* [【 toolbox（工具栏组件）】](https://echarts.apache.org/zh/option.html#toolbox)
* [【 series（系列）】](https://echarts.apache.org/zh/option.html#series)
* ...

> 我们注意到：其实[【 系列（ series ）】](https://echarts.apache.org/zh/option.html#series)也是一种组件
>> 可以理解为：系列是专门绘制 **`图`** 的组件

如下图，右侧的 `option` 中声明了各个组件（包括系列），各个组件就出现在图中：

![图片](https://echarts.apache.org/zh/documents/asset/img/basic-concepts-overview/components.jpg)

> 注：因为系列是一种特殊的组件，所以有时候也会出现 **`组件和系列`** 这样的描述，这种语境下的 **`组件`** 是指：除了 **`系列`** 以外的其他组件

### 用 option 描述图表

上面已经出现了 `option` 这个概念

echarts 的使用者，使用 `option` 来描述其对图表的各种需求，包括：

* 有什么数据
* 要画什么图表
* 图表长什么样子
* 含有什么组件
* 组件能操作什么事情等等

简而言之，`option` 表述了：

* 数据
* 数据如何映射成图形
* 交互行为

```js
// 创建 echarts 实例
var dom = document.getElementById('dom-id');
var chart = echarts.init(dom);

// 用 option 描述 `数据`、`数据如何映射成图形`、`交互行为` 等
// option 是个大的 JavaScript 对象
var option = {

  // option 每个属性是一类组件
  legend: { ...},
  grid: { ...},
  tooltip: { ...},
  toolbox: { ...},
  dataZoom: { ...},
  visualMap: { ...},

  // 如果有多个同类组件，那么就是个数组
  // 例如这里有三个 X 轴
  xAxis: [

    // 数组每项表示一个组件实例，用 type 描述 “子类型”
    { type: 'category', ...},
    { type: 'category', ...},
    { type: 'value', ...}
  ],
  yAxis: [{ ...}, { ...}],

  // 这里有多个系列，也是构成一个数组
  series: [
    // 每个系列，也有 type 描述 “子类型” ，即 “图表类型”
    { type: 'line', data: [['AA', 332], ['CC', 124], ['FF', 412], ... ] },
    { type: 'line', data: [2231, 1234, 552, ... ] },
    { type: 'line', data: [[4, 51], [8, 12], ... ] }
    }]
};

// 调用 setOption 将 option 输入 echarts ，然后 echarts 渲染图表
chart.setOption(option);
```

系列里的[【 series.data 】](https://echarts.apache.org/zh/option.html#series.data))是本系列的数据

而另一种描述方式，系列数据从[【 dataset 】](https://echarts.apache.org/zh/option.html#dataset)中取：

```js
var option = {
  dataset: {
    source: [
      [121, 'XX', 442, 43.11],
      [663, 'ZZ', 311, 91.14],
      [913, 'ZZ', 312, 92.12],
      ...
      ]
  },
  xAxis: {},
  yAxis: {},
  series: [
    // 数据从 dataset 中取，encode 中的数值是 dataset.source 的维度 index （即第几列）
    { type: 'bar', encode: { x: 1, y: 0 } },
    { type: 'bar', encode: { x: 1, y: 2 } },
    { type: 'scatter', encode: { x: 1, y: 3 } },
    ...
  ]
};
```

### 组件的定位

不同的组件、系列，常有不同的定位方式

#### 类 CSS 的绝对定位

多数组件和系列，都能够基于以下绝对定位：

* top
* right
* down
* left
* width
* height

这种绝对定位的方式，类似于 CSS 的 **`绝对定位（ position: absolute ）`**

* 绝对定位基于的是 echarts 容器 DOM 节点

其中，他们每个值都可以是：

* 绝对数值

  例如 `bottom: 54` 表示：距离 echarts 容器底边界 `54` 像素

* 或者基于 echarts 容器高宽的百分比

  例如 `right: '20%'` 表示：距离 echarts 容器右边界的距离是 echarts 容器宽度的 `20%`

如下图的例子，对[【 grid 】](https://echarts.apache.org/zh/option.html#grid)组件（也就是直角坐标系的底板）设置 `left` 、`right` 、`height` 、`bottom` 达到的效果：

![图片](https://echarts.apache.org/zh/documents/asset/img/basic-concepts-overview/locate.jpg)

> 我们可以注意到，`left` `right` `width` 是一组（横向）、`top` `bottom` `height` 是另一组（纵向）
>> 这两组没有什么关联
> * 每组中，至多设置两项就可以了，第三项会被自动算出
> * 例如，设置了 `left` 和 `right` 就可以了，`width` 会被自动算出

#### 中心半径定位

少数圆形的组件或系列，可以使用 **`中心半径定位`**

* 例如[【 pie（饼图）】](https://echarts.apache.org/zh/option.html#series-pie)、[【 sunburst（旭日图）】](https://echarts.apache.org/zh/option.html#series-sunburst)、[【 polar（极坐标系）】](https://echarts.apache.org/zh/option.html#polar)

* 中心半径定位，往往依据[【 center（中心）】](https://echarts.apache.org/zh/option.html#series-pie.center)、[【 radius（半径）】](https://echarts.apache.org/zh/option.html#series-pie.radius)来决定位置

#### 其他定位

少数组件和系列可能有自己的特殊的定位方式

> 在他们的文档中会有说明

### 坐标系

很多系列，例如[【 line（折线图）】](https://echarts.apache.org/zh/option.html#series-line)、[【 bar（柱状图）】](https://echarts.apache.org/zh/option.html#series-bar)、[【 scatter（散点图）】](https://echarts.apache.org/zh/option.html#series-scatter)、[【 heatmap（热力图）】](https://echarts.apache.org/zh/option.html#series-heatmap)等等，需要运行在 **`坐标系`** 上

坐标系用于布局这些图，以及显示数据的刻度等等

例如 echarts 中至少支持这些坐标系：

* [【直角坐标系】](https://echarts.apache.org/zh/option.html#grid)
* [【极坐标系】](https://echarts.apache.org/zh/option.html#polar)
* [【地理坐标系（ GEO ）】](https://echarts.apache.org/zh/option.html#geo)
* [【单轴坐标系】](https://echarts.apache.org/zh/option.html#singleAxis)
* [【日历坐标系】](https://echarts.apache.org/zh/option.html#calendar)
* ...

其他一些系列，例如[【 pie（饼图）】](https://echarts.apache.org/zh/option.html#series-pie)、[【 tree（树图）】](https://echarts.apache.org/zh/option.html#series-tree)等等，并不依赖坐标系，能独立存在

* 还有一些图，例如[【 graph（关系图）】](https://echarts.apache.org/zh/option.html#series-graph)等，既能独立存在，也能布局在坐标系中，依据用户的设定而来

一个坐标系，可能由多个组件协作而成

* 我们以最常见的直角坐标系来举例

* 直角坐标系中，包括有以下三种组件：

  * [【 xAxis（直角坐标系 X 轴）】](https://echarts.apache.org/zh/option.html#xAxis)
  * [【 yAxis（直角坐标系 Y 轴）】](https://echarts.apache.org/zh/option.html#yAxis)
  * [【 grid（直角坐标系底板）】](https://echarts.apache.org/zh/option.html#grid)

* `xAxis` 、`yAxis` 被 `grid` 自动引用并组织起来，共同工作

我们来看下图，这是最简单的使用直角坐标系的方式：

* 只声明了 `xAxis` 、`yAxis` 和一个 `scatter`（散点图系列）

* echarts 暗自为他们创建了 `grid` 并关联起他们

![图片](https://echarts.apache.org/zh/documents/asset/img/basic-concepts-overview/coord-sys-0.jpg)

再来看下图

* 两个 `yAxis` ，共享了一个 `xAxis`

* 两个 `series` ，也共享了这个 `xAxis` ，但是分别使用不同的 `yAxis`

* 使用[【 yAxisIndex 】](https://echarts.apache.org/zh/option.html#series-line.yAxisIndex)来指定它自己使用的是哪个 `yAxis`

![图片](https://echarts.apache.org/zh/documents/asset/img/basic-concepts-overview/coord-sys-1.jpg)

再来看下图，一个 echarts 实例中

* 有多个 grid

* 每个 grid 分别有 xAxis 、yAxis

* 他们使用 xAxisIndex 、yAxisIndex 、gridIndex 来指定引用关系

![图片](https://echarts.apache.org/zh/documents/asset/img/basic-concepts-overview/coord-sys-2.jpg)

另外，一个系列，往往能运行在不同的坐标系中

* 例如，一个[【 scatter（散点图）】](https://echarts.apache.org/zh/option.html#series-scatter)能运行在[【直角坐标系】](https://echarts.apache.org/zh/option.html#grid)、[【极坐标系】](https://echarts.apache.org/zh/option.html#polar)、[【地理坐标系（ GEO ）】](https://echarts.apache.org/zh/option.html#geo)等各种坐标系中

* 同样，一个坐标系，也能承载不同的系列，如上面出现的各种例子，[【直角坐标系】](https://echarts.apache.org/zh/option.html#grid)里承载了[【 line（折线图）】](https://echarts.apache.org/zh/option.html#series-line)、[【 bar（柱状图）】](https://echarts.apache.org/zh/option.html#series-bar)等等

## 个性化图表的样式

ECharts 提供了丰富的自定义配置选项，并且能够从全局、系列、数据三个层级去设置数据图形的样式

下面我们来看如何使用 ECharts 实现下面这个南丁格尔图：

[【示例：点击查看在线实例】](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/tutorial-styling-step5)

### 绘制南丁格尔图

[【 5 分钟上手ECharts 】](https://echarts.apache.org/zh/tutorial.html#5%20分钟上手%20ECharts)中讲了如何绘制一个简单的柱状图，这次要画的是饼图

* 饼图主要是通过扇形的弧度表现不同类目的数据在总和中的占比

* 它的数据格式比柱状图更简单，只有一维的数值，不需要给类目

为不在直角坐标系上，所以也不需要 `xAxis` ，`yAxis`

```js
myChart.setOption({
  series: [
    {
      name: '访问来源',
      type: 'pie',
      radius: '55%',
      data: [
        { value: 235, name: '视频广告' },
        { value: 274, name: '联盟广告' },
        { value: 310, name: '邮件营销' },
        { value: 335, name: '直接访问' },
        { value: 400, name: '搜索引擎' }
      ]
    }
  ]
})
```

上面代码就能画出一个简单的饼图：

[【示例：点击查看在线实例】](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/tutorial-styling-step0)

这里 `data` 属性值不像入门教程里那样每一项都是单个数值，而是一个包含 `name` 和 `value` 属性的对象

* ECharts 中的数据项都是既可以只设成数值

* 也可以设成一个包含有名称、该数据图形的样式配置、标签配置的对象

> 具体见[【 data 文档】](https://echarts.apache.org/zh/option.html#series-pie.data)

ECharts 中的[【饼图】](https://echarts.apache.org/zh/option.html#series-pie)也支持通过设置[【 roseType 】](https://echarts.apache.org/zh/option.html#series-pie.roseType)显示成南丁格尔图

```js
roseType: 'angle'
```

南丁格尔图会通过半径表示数据的大小：

[【示例：点击查看在线实例】](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/tutorial-styling-step1)

### 阴影的配置

ECharts 中有一些通用的样式，诸如阴影、透明度、颜色、边框颜色、边框宽度等，这些样式一般都会在系列的[【 itemStyle 】](https://echarts.apache.org/zh/tutorial.html#series-pie.itemStyle)里设置

例如阴影的样式可以通过下面几个配置项设置：

```js
itemStyle: {
  // 阴影的大小
  shadowBlur: 200,

  // 阴影水平方向上的偏移
  shadowOffsetX: 0,

  // 阴影垂直方向上的偏移
  shadowOffsetY: 0,

  // 阴影颜色
  shadowColor: 'rgba(0, 0, 0, 0.5)'
}
```

加上阴影后的效果：

[【示例：点击查看在线实例】](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/tutorial-styling-step2)

itemStyle 的 `emphasis` 是鼠标 `hover` 时候的高亮样式

* 这个示例里是正常的样式下加阴影，但是可能更多的时候是 `hover` 的时候通过阴影突出

### 深色背景和浅色标签

现在我们需要把整个主题改成开始的示例中那样的深色主题，这就需要改背景色和文本颜色

背景色是全局的，所以直接在 `option` 下设置[【 `backgroundColor` 】](https://echarts.apache.org/zh/option.html#backgroundColor)

```js
setOption({
  backgroundColor: '#2c343c'
})
```

文本的样式可以设置全局的[【 textStyle 】](https://echarts.apache.org/zh/option.html#textStyle)

```js
setOption({
  textStyle: {
    color: 'rgba(255, 255, 255, 0.3)'
  }
})
```

也可以每个系列分别设置，每个系列的文本设置在[【 `label.textStyle` 】](https://echarts.apache.org/zh/option.html#series-pie.label.textStyle)

```js
label: {
  textStyle: {
    color: 'rgba(255, 255, 255, 0.3)'
  }
}
```

饼图的话还要将标签的视觉引导线的颜色设为浅色

```js
labelLine: {
  lineStyle: {
    color: 'rgba(255, 255, 255, 0.3)'
  }
}
```

[【示例：点击查看在线实例】](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/tutorial-styling-step3)

跟 `itemStyle` 一样，`label` 和 `labelLine` 的样式也有 `emphasis` 状态

### 设置扇形的颜色

扇形的颜色也是在 `itemStyle` 中设置：

```js
itemStyle: {
  // 设置扇形的颜色
  color: '#c23531',
  shadowBlur: 200,
  shadowColor: 'rgba(0, 0, 0, 0.5)'
}
```

[【示例：点击查看在线实例】](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/tutorial-styling-step4)

跟我们要实现的效果已经挺像了

* 除了每个扇形的颜色，效果中阴影下面的扇形颜色更深，有种光线被遮住的感觉，从而会出现层次感和空间感

ECharts 中每个扇形颜色的可以通过分别设置 `data` 下的数据项实现

```js
data: [{
  value:400,
  name:'搜索引擎',
  itemStyle: {
    color: '#c23531'
  }
}, ...]
```

但是这次因为只有明暗度的变化，所以有一种更快捷的方式是通过[【 visualMap 】](https://echarts.apache.org/zh/option.html#visualMap)组件将数值的大小映射到明暗度

```js
visualMap: {
  // 不显示 visualMap 组件，只用于明暗度的映射
  show: false,
  // 映射的最小值为 80
  min: 80,
  // 映射的最大值为 600
  max: 600,
  inRange: {
    // 明暗度的范围是 0 到 1
    colorLightness: [0, 1]
  }
}
```

最终效果：[【示例：点击查看在线实例】](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/tutorial-styling-step5)

## 样式简介

本文主要是大略概述，用哪些方法，可以设置设置样式，改变图形元素或者文字的颜色、明暗、大小等

> 之所以用 **`样式`** 这种可能不很符合数据可视化思维的词，是因为，比较通俗易懂

本文介绍这几种方式，他们的功能范畴可能会有交叉（即同一种细节的效果可能可以用不同的方式实现），但是他们各有各的场景偏好

* 颜色主题（Theme）
* 调色盘
* 直接样式设置（itemStyle、lineStyle、areaStyle、label、...）
* 视觉映射（visualMap）

其他关于样式的文章，参见：[【个性化图表的样式】](https://echarts.apache.org/zh/tutorial.html#个性化图表的样式)，[【数据的视觉映射】](https://echarts.apache.org/zh/tutorial.html#数据的视觉映射)

### 颜色主题

最简单的更改全局样式的方式，是直接采用颜色主题（ theme ）

* 例如，在[【示例集合】](http://echarts.baidu.com/examples/index.html)中，可以选择 `Theme` ，直接看到采用主题的效果

ECharts 4 开始，除了一贯的默认主题外，新内置了两套主题，分别为 `'light'` 和 `'dark'`

可以这么来使用它们：

```js
var chart = echarts.init(dom, 'light');
```

或者

```js
var chart = echarts.init(dom, 'dark');
```

其他的主题，没有内置在 ECharts 中，需要自己加载

* 这些主题可以在 主题编辑器 里访问到

* 也可以使用这个[【主题编辑器】](http://echarts.baidu.com/theme-builder/)，自己编辑主题

下载下来的主题可以这样使用：

* 如果主题保存为 JSON 文件，那么可以自行加载和注册，例如：

```js
// 假设主题名称是 "vintage"
$.getJSON('xxx/xxx/vintage.json', function (themeJSON) {
  echarts.registerTheme('vintage', JSON.parse(themeJSON))
  var chart = echarts.init(dom, 'vintage');
});
```

如果保存为 UMD 格式的 JS 文件，那么支持了自注册，直接引入 JS 文件即可：

```js
// HTML 引入 vintage.js 文件后（假设主题名称是 "vintage"）
var chart = echarts.init(dom, 'vintage');
// ...
```

### 调色盘

调色盘，可以在 `option` 中设置

* 它给定了一组颜色，图形、系列会自动从其中选择颜色

* 可以设置全局的调色盘，也可以设置系列自己专属的调色盘

```js
option = {
  // 全局调色盘
  color: ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'],

  series: [{
    type: 'bar',

    // 此系列自己的调色盘
    color: ['#dd6b66', '#759aa0', '#e69d87', '#8dc1a9', '#ea7e53', '#eedd78', '#73a373', '#73b9bc', '#7289ab', '#91ca8c', '#f49f42'],
    ...
  }, {
    type: 'pie',

    // 此系列自己的调色盘
    color: ['#37A2DA', '#32C5E9', '#67E0E3', '#9FE6B8', '#FFDB5C', '#ff9f7f', '#fb7293', '#E062AE', '#E690D1', '#e7bcf3', '#9d96f5', '#8378EA', '#96BFFF'],
    ...
  }]
}
```

### 直接的样式设置

直接的样式设置是比较常用设置方式

* 纵观 ECharts 的[【 option 】](https://echarts.apache.org/zh/option.html)中，很多地方可以设置[【 itemStyle 】](https://echarts.apache.org/zh/option.html#series.itemStyle)、[【 lineStyle 】](https://echarts.apache.org/zh/option.html#series-line.lineStyle)、[【 areaStyle 】](https://echarts.apache.org/zh/option.html#series-line.areaStyle)、[【 label 】](https://echarts.apache.org/zh/option.html#series.label)等等

* 这些的地方可以直接设置图形元素的颜色、线宽、点的大小、标签的文字、标签的样式等等

一般来说，ECharts 的各个系列和组件，都遵从这些命名习惯，虽然不同图表和组件中，`itemStyle` 、`label` 等可能出现在不同的地方

> 直接样式设置的另一篇介绍，参见[【个性化图表的样式】](https://echarts.apache.org/zh/tutorial.html#个性化图表的样式)

### 高亮的样式

在鼠标悬浮到图形元素上时，一般会出现高亮的样式

* 默认情况下，高亮的样式是根据普通样式自动生成的

* 但是高亮的样式也可以自己定义，主要是通过[【 `emphasis` 】](https://echarts.apache.org/zh/option.html#series-scatter.emphasis)属性来定制

[【 `emphsis` 】](https://echarts.apache.org/zh/option.html#series-scatter.emphasis)中的结构，和普通样式的结构相同，例如：

```js
option = {
  series: {
    type: 'scatter',

    // 普通样式
    itemStyle: {
      // 点的颜色
      color: 'red'
    },
    label: {
      show: true,

      // 标签的文字
      formatter: 'This is a normal label.'
    },

    // 高亮样式
    emphasis: {
      itemStyle: {

        // 高亮时点的颜色
        color: 'blue'
      },
      label: {
        show: true,

        // 高亮时标签的文字
        formatter: 'This is a emphasis label.'
      }
    }
  }
}
```

> 注意：在 ECharts 4 以前，高亮和普通样式的写法，是这样的：

```js
option = {
  series: {
    type: 'scatter',

    itemStyle: {
      // 普通样式
      normal: {
        // 点的颜色
        color: 'red'
      },
      // 高亮样式
      emphasis: {
        // 高亮时点的颜色
        color: 'blue'
      }
    },

    label: {
      // 普通样式
      normal: {
        show: true,
        // 标签的文字
        formatter: 'This is a normal label.'
      },
      // 高亮样式
      emphasis: {
        show: true,
        // 高亮时标签的文字
        formatter: 'This is a emphasis label.'
      }
    }
  }
}
```

> 这种写法 **`仍然被兼容`** ，但是，不再推荐
>> 事实上，多数情况下，使用者只会配置普通状态下的样式，而使用默认的高亮样式
>>> 所以在 ECharts 4 中，支持不写 `normal` 的配置方法（即本文开头的那种写法），使得配置项更扁平简单

### 通过 visualMap 组件设定样式

[【 visualMap 组件】](https://echarts.apache.org/zh/option.html#visualMap)能指定数据到颜色、图形尺寸的映射规则，详见[【数据的视觉映射】](https://echarts.apache.org/zh/tutorial.html#数据的视觉映射)

## 异步数据加载和更新

### 异步加载

[【入门示例】](https://echarts.apache.org/zh/tutorial.html#自定义构建%20ECharts)中的数据是在初始化后 `setOption` 中直接填入的，但是很多时候可能数据需要异步加载后再填入

ECharts 中实现异步数据的更新非常简单，在图表初始化后不管任何时候只要通过 jQuery 等工具异步获取数据后通过 `setOption` 填入数据和配置项就行

```js
var myChart = echarts.init(document.getElementById('main'));

$.get('data.json').done(function (data) {
  myChart.setOption({
    title: {
      text: '异步数据加载示例'
    },
    tooltip: {},
    legend: {
      data: ['销量']
    },
    xAxis: {
      data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
    },
    yAxis: {},
    series: [{
      name: '销量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }]
  });
});
```

或者先设置完其它的样式，显示一个空的直角坐标轴，然后获取数据后填入数据

```js
var myChart = echarts.init(document.getElementById('main'));

// 显示标题，图例和空的坐标轴
myChart.setOption({
  title: {
    text: '异步数据加载示例'
  },
  tooltip: {},
  legend: {
    data: ['销量']
  },
  xAxis: {
    data: []
  },
  yAxis: {},
  series: [{
    name: '销量',
    type: 'bar',
    data: []
  }]
});

// 异步加载数据
$.get('data.json').done(function (data) {
  // 填入数据
  myChart.setOption({
    xAxis: {
      data: data.categories
    },
    series: [{
      // 根据名字对应到相应的系列
      name: '销量',
      data: data.data
    }]
  });
});
```

如下：

[【示例：点击查看在线实例】](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/tutorial-async)

ECharts 中在更新数据的时候需要通过name属性对应到相应的系列，上面示例中如果name不存在也可以根据系列的顺序正常更新，但是更多时候推荐更新数据的时候加上系列的name数据

### loading 动画

如果数据加载时间较长，一个空的坐标轴放在画布上也会让用户觉得是不是产生 `bug` 了，因此需要一个 `loading` 的动画来提示用户数据正在加载。

ECharts 默认有提供了一个简单的加载动画

* 只需要调用[【 showLoading 】](https://echarts.apache.org/zh/api.html#echartsInstance.showLoading)方法显示

* 数据加载完成后再调用 `hideLoading` 方法隐藏加载动画

```js
myChart.showLoading();
$.get('data.json').done(function (data) {
  myChart.hideLoading();
  myChart.setOption(...);
});
```

效果如下：

[【示例：点击查看在线实例】](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/tutorial-loading)

### 数据的动态更新

ECharts 由数据驱动，数据的改变驱动图表展现的改变，因此动态数据的实现也变得异常简单

所有数据的更新都通过[【 `setOption` 】](https://echarts.apache.org/zh/tutorial.html#api.html#echartsInstance.setOption)实现

* 你只需要定时获取数据，[【 `setOption` 】](https://echarts.apache.org/zh/tutorial.html#api.html#echartsInstance.setOption)填入数据，而不用考虑数据到底产生了那些变化

* ECharts 会找到两组数据之间的差异然后通过合适的动画去表现数据的变化

> `ECharts 3` 中移除了 `ECharts 2` 中的 `addData` 方法
>> 如果只需要加入单个数据，可以先 `data.push(value)` 后 `setOption`

具体可以看下面示例：

[【示例：点击查看在线实例】](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/tutorial-dynamic-data)

## 使用 dataset 管理数据

ECharts 4 开始支持了 `dataset` 组件用于单独的数据集声明

* 从而数据可以单独管理，被多个组件复用

* 并且可以基于数据指定数据到视觉的映射

* 这在不少场景下能带来使用上的方便

ECharts 4 以前，数据只能声明在各个 **`系列（series）`** 中，例如：

```js
option = {
  xAxis: {
    type: 'category',
      data: ['Matcha Latte', 'Milk Tea', 'Cheese Cocoa', 'Walnut Brownie']
  },
  yAxis: {},
  series: [
    {
      type: 'bar',
      name: '2015',
      data: [89.3, 92.1, 94.4, 85.4]
    },
    {
      type: 'bar',
      name: '2016',
      data: [95.8, 89.4, 91.2, 76.9]
    },
    {
      type: 'bar',
      name: '2017',
      data: [97.7, 83.1, 92.5, 78.1]
    }
  ]
}
```

这种方式的优点是，直观易理解，以及适于对一些特殊图表类型进行一定的数据类型定制

* 但是缺点是，为匹配这种数据输入形式，常需要有数据处理的过程，把数据分割设置到各个系列（和类目轴）中

* 此外，不利于多个系列共享一份数据，也不利于基于原始数据进行图表类型、系列的映射安排

于是，ECharts 4 提供了 **`数据集（dataset）`** 组件来单独声明数据，它带来了这些效果：

* 能够贴近这样的数据可视化常见思维方式

  基于数据（ dataset 组件来提供数据），指定数据到视觉的映射（由[【 encode 】](https://echarts.apache.org/zh/option.html#series.encode)属性来指定映射），形成图表

* 数据和其他配置可以被分离开来

  使用者相对便于进行单独管理，也省去了一些数据处理的步骤

* 数据可以被多个系列或者组件复用

  对于大数据，不必为每个系列创建一份

* 支持更多的数据的常用格式

  例如二维数组、对象数组等，一定程度上避免使用者为了数据格式而进行转换

### 入门例子

下面是一个最简单的 `dataset` 的例子：

```js
option = {
  legend: {},
  tooltip: {},
  dataset: {

    // 提供一份数据
    source: [
      ['product', '2015', '2016', '2017'],
      ['Matcha Latte', 43.3, 85.8, 93.7],
      ['Milk Tea', 83.1, 73.4, 55.1],
      ['Cheese Cocoa', 86.4, 65.2, 82.5],
      ['Walnut Brownie', 72.4, 53.9, 39.1]
    ]
  },

  // 声明一个 X 轴，类目轴（category）
  // 默认情况下，类目轴对应到 dataset 第一列
  xAxis: { type: 'category' },

  // 声明一个 Y 轴，数值轴
  yAxis: {},

  // 声明多个 bar 系列，默认情况下，每个系列会自动对应到 dataset 的每一列
  series: [
    { type: 'bar' },
    { type: 'bar' },
    { type: 'bar' }
  ]
}
```

效果如下：

[【示例：点击查看在线实例】](https://echarts.apache.org/examples/zh/editor.html?c=dataset-simple0)

或者也可以使用常见的对象数组的格式：

```js
option = {
  legend: {},
  tooltip: {},
  dataset: {

    // 这里指定了维度名的顺序，从而可以利用默认的维度到坐标轴的映射
    // 如果不指定 dimensions ，也可以通过指定 series.encode 完成映射，参见后文
    dimensions: ['product', '2015', '2016', '2017'],

    source: [
      { product: 'Matcha Latte', '2015': 43.3, '2016': 85.8, '2017': 93.7 },
      { product: 'Milk Tea', '2015': 83.1, '2016': 73.4, '2017': 55.1 },
      { product: 'Cheese Cocoa', '2015': 86.4, '2016': 65.2, '2017': 82.5 },
      { product: 'Walnut Brownie', '2015': 72.4, '2016': 53.9, '2017': 39.1 }
    ]
  },
  xAxis: { type: 'category' },
  yAxis: {},
  series: [
    { type: 'bar' },
    { type: 'bar' },
    { type: 'bar' }
  ]
};
```

### 数据到图形的映射

本篇里，我们制作数据可视化图表的逻辑是这样的：基于数据，在配置项中指定如何映射到图形

概略而言，可以进行这些映射：

* 指定 `dataset` 的列（ column ）还是行（ row ）映射为图形系列（ series ）

  这件事可以使用[【 series.seriesLayoutBy 】](https://echarts.apache.org/zh/option.html#series.seriesLayoutBy)属性来配置

  默认是按照列（ column ）来映射

* 指定维度映射的规则

  如何从 `dataset` 的维度（一个 **`维度`** 的意思是 **`一行/列`** ）映射到：

  * 坐标轴（如 X 、Y 轴）
  * 提示框（ tooltip ）
  * 标签（ label ）
  * 图形元素大小颜色等（ visualMap ）

  这件事可以使用[【 series.encode 】](https://echarts.apache.org/zh/option.html#series.encode)属性，以及[【 visualMap 】](https://echarts.apache.org/zh/option.html#visualMap)组件（如果有需要映射颜色大小等视觉维度的话）来配置

  上面的例子中，没有给出这种映射配置，那么 ECharts 就按最常见的理解进行默认映射：

  * X 坐标轴声明为类目轴，默认情况下会自动对应到 `dataset.source` 中的第一列

  * 三个柱图系列，一一对应到 `dataset.source` 中后面每一列

### 按行还是按列做映射

有了数据表之后，使用者可以灵活得配置：数据如何对应到轴和图形系列

用户可以使用 `seriesLayoutBy` 配置项，改变图表对于行列的理解

`seriesLayoutBy` 可取值：

参数|说明
-|-
column|默认值，系列被安放到 `dataset` 的列上面
row|系列被安放到 `dataset` 的行上面

看这个例子：

```js
option = {
  legend: {},
  tooltip: {},
  dataset: {
    source: [
      ['product', '2012', '2013', '2014', '2015'],
      ['Matcha Latte', 41.1, 30.4, 65.1, 53.3],
      ['Milk Tea', 86.5, 92.1, 85.7, 83.1],
      ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4]
    ]
  },
  xAxis: [
    { type: 'category', gridIndex: 0 },
    { type: 'category', gridIndex: 1 }
  ],
  yAxis: [
    { gridIndex: 0 },
    { gridIndex: 1 }
  ],
  grid: [
    { bottom: '55%' },
    { top: '55%' }
  ],
  series: [

    // 这几个系列会在第一个直角坐标系中，每个系列对应到 dataset 的每一行
    { type: 'bar', seriesLayoutBy: 'row' },
    { type: 'bar', seriesLayoutBy: 'row' },
    { type: 'bar', seriesLayoutBy: 'row' },

    // 这几个系列会在第二个直角坐标系中，每个系列对应到 dataset 的每一列
    { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
    { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
    { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
    { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 }
  ]
}
```

效果如下：

[【示例：点击查看在线实例】](https://echarts.apache.org/examples/zh/editor.html?c=dataset-series-layout-by)

### 维度（ dimension ）

介绍 `encode` 之前，首先要介绍 **`维度（dimension）`** 的概念

常用图表所描述的数据大部分是 **`二维表`** 结构，上述的例子中，我们都使用二维数组来容纳二维表

* 现在，当我们把系列（ series ）对应到 **`列`** 的时候，那么每一列就称为一个 **`维度（dimension）`** ，而每一行称为 **`数据项（item）`**

* 反之，如果我们把系列（series）对应到 **`行`** ，那么每一行就是 **`维度（dimension）`** ，每一列就是 **`数据项（item）`**

维度可以有单独的名字，便于在图表中显示

* 维度名（ dimension name ）可以在定义在 `dataset` 的第一行（或者第一列）

* 例如上面的例子中的 `'score'` 、`'amount'` 、`'product'` 就是维度名

  从第二行开始，才是正式的数据

* `dataset.source` 中第一行（列）到底包含不包含维度名，ECharts 默认会自动探测

  当然也可以设置 `dataset.sourceHeader: true` 显示声明第一行（列）就是维度

  或者 `dataset.sourceHeader: false` 表明第一行（列）开始就直接是数据

维度的定义，也可以使用单独的 `dataset.dimensions` 或者 `series.dimensions` 来定义，这样可以同时指定维度名，和维度的类型（ dimension type ）：

```js
var option1 = {
  dataset: {
    dimensions: [
      { name: 'score' },

      // 可以简写为 string ，表示维度名
      'amount',

      // 可以在 type 中指定维度类型
      { name: 'product', type: 'ordinal' }
    ],
    source: [...]
  },
  ...
};

var option2 = {
  dataset: {
    source: [...]
  },
  series: {
    type: 'line',

    // 在系列中设置的 dimensions 会更优先采纳
    dimensions: [

      null, // 可以设置为 null 表示不想设置维度名

      'amount',
      { name: 'product', type: 'ordinal' }
    ]
  },
  ...
};
```

大多数情况下，我们并不需要去设置维度类型，因为会自动判断

* 但是如果因为数据为空之类原因导致判断不足够准确时，可以手动设置维度类型

维度类型（ dimension type ）可以取这些值：

取值|说明
-|-
'number'|默认，表示普通数据
'ordinal'|对于类目、文本这些 `string` 类型的数据，如果需要能在数轴上使用，须是 `'ordinal'` 类型（ ECharts 默认会自动判断这个类型，但是自动判断也是不可能很完备的，所以使用者也可以手动强制指定）
'time'|表示时间数据，设置成 `'time'` 则能支持自动解析数据成时间戳（ timestamp ），比如该维度的数据是 `'2017-05-10'` ，会自动被解析（如果这个维度被用在时间数轴（[【 `axis.type` 】](https://echarts.apache.org/zh/option.html#xAxis.type)为 `'time'` ）上，那么会被自动设置为 `'time'` 类型，时间类型的支持参见[【 data 】](https://echarts.apache.org/zh/option.html#series.data)）
'float'|如果设置成 `'float'` ，在存储时候会使用 `TypedArray` ，对性能优化有好处
'int'|如果设置成 `'int'` ，在存储时候会使用 `TypedArray` ，对性能优化有好处

### 数据到图形的映射（ encode ）

了解了维度的概念后，我们就可以使用[【 encode 】](https://echarts.apache.org/zh/option.html#series.encode)来做映射，总体是这样的感觉：

```js
var option = {
  dataset: {
    source: [
      ['score', 'amount', 'product'],
      [89.3, 58212, 'Matcha Latte'],
      [57.1, 78254, 'Milk Tea'],
      [74.4, 41032, 'Cheese Cocoa'],
      [50.1, 12755, 'Cheese Brownie'],
      [89.7, 20145, 'Matcha Cocoa'],
      [68.1, 79146, 'Tea'],
      [19.6, 91852, 'Orange Juice'],
      [10.6, 101852, 'Lemon Juice'],
      [32.7, 20112, 'Walnut Brownie']
    ]
  },
  xAxis: {},
  yAxis: { type: 'category' },
  series: [
    {
      type: 'bar',
      encode: {

        // 将 "amount" 列映射到 X 轴
        x: 'amount',

        // 将 "product" 列映射到 Y 轴
        y: 'product'
      }
    }
  ]
};
```

效果如下：

[【示例：点击查看在线实例】](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/dataset-encode-simple0)

encode 声明的基本结构如下

* 其中冒号左边是坐标系、标签等特定名称，如 `x` 、`y` 、`tooltip` 等

* 冒号右边是数据中的维度名（ string 格式）或者维度的序号（ number 格式，从 `0` 开始计数），可以指定一个或多个维度（使用数组）

通常情况下，下面各种信息（ encode 支持的属性）不需要所有的都写，按需写即可

```js
// 在任何坐标系和系列中，都支持：
encode: {

  // 使用 “名为 product 的维度” 和 “名为 score 的维度” 的值在 tooltip 中显示
  tooltip: ['product', 'score']

  // 使用 “维度 1” 和 “维度 3” 的维度名连起来作为系列名
  // 有时候名字比较长，这可以避免在 series.name 重复输入这些名字
  seriesName: [1, 3],

    // 表示使用 “维度2” 中的值作为 id
    // 这在使用 setOption 动态更新数据时有用处，可以使新老数据用 id 对应起来，从而能够产生合适的数据更新动画
    itemId: 2,

      // 指定数据项的名称使用 “维度3” 在饼图等图表中有用，可以使这个名字显示在图例（legend）中
      itemName: 3
}

// 直角坐标系（grid/cartesian）特有的属性：
encode: {
  // 把 “维度1”、“维度5”、“名为 score 的维度” 映射到 X 轴：
  x: [1, 5, 'score'],

    // 把“维度0”映射到 Y 轴。
    y: 0
}

// 单轴（singleAxis）特有的属性：
encode: {
  single: 3
}

// 极坐标系（polar）特有的属性：
encode: {
  radius: 3,
    angle: 2
}

// 地理坐标系（geo）特有的属性：
encode: {
  lng: 3,
    lat: 2
}

// 对于一些没有坐标系的图表，例如饼图、漏斗图等，可以是：
encode: {
  value: 3
}
```

下面给出个更丰富的 `encode` 的示例：

[【示例：点击查看在线实例】](https://echarts.apache.org/examples/zh/editor.html?c=dataset-encode1)

### 视觉通道（颜色、尺寸等）的映射

我们可以使用 `visualMap` 组件进行视觉通道的映射

> 详见[【 visualMap 】](https://echarts.apache.org/zh/option.html#visualMap)文档的介绍

这是一个示例：

[【示例：点击查看在线实例】](https://echarts.apache.org/examples/zh/editor.html?c=dataset-encode0)

### 默认的映射

值得一提的是，ECharts 针对以下图表给出了简单的默认的映射：

* 最常见直角坐标系中的：
  * 折线图
  * 柱状图
  * 散点图
  * K 线图 等
* 饼图
* 漏斗图

从而不需要配置 encode 也可以出现图表（一旦给出了 encode ，那么就不会采用默认映射）

默认的映射规则不易做得复杂，基本规则大体是：

* 在坐标系中（如直角坐标系、极坐标系等）

  * 如果有类目轴（ `axis.type` 为 `'category'` ），则将第一列（行）映射到这个轴上，后续每一列（行）对应一个系列

  * 如果没有类目轴，假如坐标系有两个轴（例如直角坐标系的 `X` `Y` 轴），则每两列对应一个系列，这两列分别映射到这两个轴上

* 如果没有坐标系（如饼图）

  * 取第一列（行）为名字，第二列（行）为数值

    如果只有一列，则取第一列为数值

默认的规则不能满足要求时，就可以自己来配置 encode ，也并不复杂：

[【示例：点击查看在线实例】](https://echarts.apache.org/examples/zh/editor.html?c=dataset-default)

### 几个常见的映射设置方式

* 如何把第三列设置为 X 轴，第五列设置为 Y 轴？

```js
series: {
  // 注意维度序号（ dimensionIndex ）从 0 开始计数，第三列是 dimensions[2]
  encode: {x: 2, y: 4},
  ...
}
```

* 如何把第三行设置为 X 轴，第五行设置为 Y 轴？

```js
series: {
  encode: {x: 2, y: 4},
  seriesLayoutBy: 'row',
  ...
}
```

* 如何把第二列设置为标签？

  关于标签的显示[【 label.formatter 】](https://echarts.apache.org/zh/option.html#series.label.formatter)，现在支持引用特定维度的值

```js
series: {
  label: {
    // `'{@score}'` 表示 “名为 score” 的维度里的值
    // `'{@[4]}'` 表示引用序号为 4 的维度里的值
    formatter: 'aaa{@product}bbb{@score}ccc{@[4]}ddd'
  }
}
```

* 如何让第 2 列和第 3 列显示在提示框（ tooltip ）中？

```js
series: {
  encode: {
    tooltip: [1, 2]
    ...
  },
  ...
}
```

* 数据里没有维度名，那么怎么给出维度名？

```js
dataset: {
  dimensions: ['score', 'amount'],
  source: [
    [89.3, 3371],
    [92.1, 8123],
    [94.4, 1954],
    [85.4, 829]
  ]
}
```

* 如何把第三列映射为气泡图的点的大小？

```js
var option = {
  dataset: {
    source: [
      [12, 323, 11.2],
      [23, 167, 8.3],
      [81, 284, 12],
      [91, 413, 4.1],
      [13, 287, 13.5]
    ]
  },
  visualMap: {
    show: false,
    dimension: 2, // 指向第三列（列序号从 0 开始记，所以设置为 2）
    min: 2, // 需要给出数值范围，最小数值
    max: 15, // 需要给出数值范围，最大数值
    inRange: {
      // 气泡尺寸：5 像素到 60 像素
      symbolSize: [5, 60]
    }
  },
  xAxis: {},
  yAxis: {},
  series: {
    type: 'scatter'
  }
};
```

* encode 里指定了映射，但是不管用？

  可以查查有没有拼错，比如，维度名是：`'Life Expectancy'` ，encode 中拼成了 `'Life Expectency'`

### 数据的各种格式

多数常见图表中，数据适于用二维表的形式描述

* 广为使用的数据表格软件（如 `MS Excel` 、`Numbers` ）或者关系数据数据库都是二维表

* 他们的数据可以导出成 JSON 格式，输入到 `dataset.source` 中，在不少情况下可以免去一些数据处理的步骤

> 假如数据导出成 csv 文件，那么可以使用一些 csv 工具如[【 dsv 】](https://github.com/d3/d3-dsv)或者[【 PapaParse 】](https://github.com/mholt/PapaParse)将 csv 转成 JSON

在 JavaScript 常用的数据传输格式中，二维数组可以比较直观的存储二维表

* 前面的示例都是使用二维数组表示

* 除了二维数组以外，dataset 也支持例如下面 `key-value` 方式的数据格式，这类格式也非常常见

  但是这类格式中，目前并不支持 `seriesLayoutBy` 参数

```js
dataset: [{

  // 按行的 key-value 形式（对象数组），这是个比较常见的格式
  source: [
    { product: 'Matcha Latte', count: 823, score: 95.8 },
    { product: 'Milk Tea', count: 235, score: 81.4 },
    { product: 'Cheese Cocoa', count: 1042, score: 91.2 },
    { product: 'Walnut Brownie', count: 988, score: 76.9 }
  ]
}, {

  // 按列的 key-value 形式
  source: {
    'product': ['Matcha Latte', 'Milk Tea', 'Cheese Cocoa', 'Walnut Brownie'],
    'count': [823, 235, 1042, 988],
    'score': [95.8, 81.4, 91.2, 76.9]
  }
}]
```

### 多个 dataset 和他们的引用

可以同时定义多个 `dataset` ，系列可以通过 `series.datasetIndex` 来指定引用哪个 `dataset` ，例如：

```js
var option = {
  dataset: [{

    // 序号为 0 的 dataset
    source: [...],
  }, {

    // 序号为 1 的 dataset
    source: [...]
  }, {

    // 序号为 2 的 dataset
    source: [...]
  }],

  series: [{

    // 使用序号为 2 的 dataset
    datasetIndex: 2
  }, {

    // 使用序号为 1 的 dataset
    datasetIndex: 1
  }]
}
```

### ECharts 3 的数据设置方式

> ECharts 3 的数据设置方式（ series.data ）仍正常使用

ECharts 4 之前一直以来的数据声明方式仍然被正常支持，如果系列已经声明了[【 series.data 】](https://echarts.apache.org/zh/option.html#series.data)，那么就会使用 series.data 而非 `dataset`

```js
{
  xAxis: {
    type: 'category'
    data: ['Matcha Latte', 'Milk Tea', 'Cheese Cocoa', 'Walnut Brownie']
  },
  yAxis: { },
  series: [{
    type: 'bar',
    name: '2015',
    data: [89.3, 92.1, 94.4, 85.4]
  }, {
    type: 'bar',
    name: '2016',
    data: [95.8, 89.4, 91.2, 76.9]
  }, {
    type: 'bar',
    name: '2017',
    data: [97.7, 83.1, 92.5, 78.1]
  }]
}
```

其实，`series.data` 也是种会一直存在的重要设置方式

* 一些特殊的非 `table` 格式的图表，如[【 treemap 】](https://echarts.apache.org/zh/option.html#series-treemap)、[【 graph 】](https://echarts.apache.org/zh/option.html#series-graph)、[【 lines 】](https://echarts.apache.org/zh/option.html#series-lines)等，现在仍不支持在 `dataset` 中设置，仍然需要使用 `series.data`

* 另外，对于巨大数据量的渲染（如百万以上的数据量），需要使用 `appendData` 进行增量加载，这种情况不支持使用 `dataset`

### 其他

目前并非所有图表都支持 `dataset`

* 支持 `dataset` 的图表有：

  * line
  * bar
  * pie
  * scatter
  * effectScatter
  * parallel
  * candlestick
  * map
  * funnel
  * custom

* 后续会有更多的图表进行支持

最后，给出一个示例，多个图表共享一个 `dataset` ，并带有联动交互：

[【示例：点击查看在线实例】](https://echarts.apache.org/examples/zh/editor.html?c=dataset-link)

## 在图表中加入交互组件

除了图表外，ECharts 中还提供了很多交互组件，例如：

* [【图例组件 legend 】](https://echarts.apache.org/zh/option.html#legend)
* [【标题组件 title 】](https://echarts.apache.org/zh/option.html#title)
* [【视觉映射组件 visualMap 】](https://echarts.apache.org/zh/option.html#visualMap)
* [【数据区域缩放组件 dataZoom】](https://echarts.apache.org/zh/option.html#dataZoom)
* [【时间线组件 timeline 】](https://echarts.apache.org/zh/option.html#timeline)

### 数据区域缩放组件

**`『概览数据整体，按需关注数据细节』`** 是数据可视化的基本交互需求

`dataZoom` 组件能够在[【直角坐标系（ grid ）】](https://echarts.apache.org/zh/option.html#grid)、[【极坐标系（ polar ）】](https://echarts.apache.org/zh/option.html#polar)中实现这一功能，如下例子：

[【示例：点击查看在线实例】](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/scatter-dataZoom-all)

* `dataZoom` 组件是对 **`数轴（ axis ）`** 进行**`『数据窗口缩放』`** **`『数据窗口平移』`** 操作

  > 可以通过 `dataZoom.xAxisIndex` 或 `dataZoom.yAxisIndex` 来指定 `dataZoom` 控制哪个或哪些数轴

* `dataZoom` 组件可同时存在多个，起到共同控制的作用

  控制同一个数轴的组件，会自动联动

* `dataZoom` 的运行原理是通过 **`『数据过滤』`** 来达到 **`『数据窗口缩放』`** 的效果

  数据过滤模式的设置不同，效果也不同，参见：[【 dataZoom.filterMode 】](https://echarts.apache.org/zh/option.html#dataZoom.filterMode)

* `dataZoom` 的数据窗口范围的设置，目前支持两种形式：

  * 百分比形式：参见[【 dataZoom.start 】](https://echarts.apache.org/zh/option.html#dataZoom.start)和[【 dataZoom.end 】](https://echarts.apache.org/zh/option.html#dataZoom.end)
  * 绝对数值形式：参见[【 dataZoom.startValue 】](https://echarts.apache.org/zh/option.html#dataZoom.startValue)和[【 dataZoom.endValue 】](https://echarts.apache.org/zh/option.html#dataZoom.endValue)

dataZoom 组件现在支持几种子组件：

子组件|说明
-|-
[【内置型数据区域缩放组件（ dataZoomInside ）】](https://echarts.apache.org/zh/option.html#dataZoom-inside)|内置于坐标系中
[【滑动条型数据区域缩放组件（ dataZoomSlider ）】](https://echarts.apache.org/zh/option.html#dataZoom-slider)|有单独的滑动条操作
[【框选型数据区域缩放组件（ dataZoomSelect ）】](https://echarts.apache.org/zh/option.html#toolbox.feature.dataZoom)|全屏的选框进行数据区域缩放，入口和配置项均在 `toolbox` 中

### 在代码加入 dataZoom 组件

先只在对单独一个横轴，加上 `dataZoom` 组件，代码示例如下：

```js
option = {
  xAxis: {
    type: 'value'
  },
  yAxis: {
    type: 'value'
  },
  dataZoom: [
    {   // 这个 dataZoom 组件，默认控制 x 轴
      type: 'slider', // 这个 dataZoom 组件是 slider 型 dataZoom 组件
      start: 10,      // 左边在 10% 的位置
      end: 60         // 右边在 60% 的位置
    }
  ],
  series: [
    {
      type: 'scatter', // 这是个『散点图』
      itemStyle: {
        opacity: 0.8
      },
      symbolSize: function (val) {
        return val[2] * 40;
      },
      data: [["14.616", "7.241", "0.896"], ["3.958", "5.701", "0.955"], ["2.768", "8.971", "0.669"], ["9.051", "9.710", "0.171"], ["14.046", "4.182", "0.536"], ["12.295", "1.429", "0.962"], ["4.417", "8.167", "0.113"], ["0.492", "4.771", "0.785"], ["7.632", "2.605", "0.645"], ["14.242", "5.042", "0.368"]]
    }
  ]
}
```

可以看到如下结果：

[【示例：点击查看在线实例】](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/scatter-tutorial-dataZoom-1)

上面的图只能拖动 dataZoom 组件导致窗口变化

* 如果想在坐标系内进行拖动，以及用滚轮（或移动触屏上的两指滑动）进行缩放

* 那么要再加上一个 `inside` 型的 `dataZoom` 组件

直接在上面的 `option.dataZoom` 中增加即可：

```js
option = {
  ...,
  dataZoom: [
    {   // 这个 dataZoom 组件，默认控制 x 轴
      type: 'slider', // 这个 dataZoom 组件是 slider 型 dataZoom 组件
      start: 10,      // 左边在 10% 的位置
      end: 60         // 右边在 60% 的位置
    },
    {   // 这个 dataZoom 组件，也控制 x 轴
      type: 'inside', // 这个 dataZoom 组件是 inside 型 dataZoom 组件
      start: 10,      // 左边在 10% 的位置
      end: 60         // 右边在 60% 的位置
    }
  ],
  ...
}
```

可以看到如下结果（能在坐标系中进行滑动，以及使用滚轮缩放了）：

[【示例：点击查看在线实例】](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/scatter-tutorial-dataZoom-2)

如果想 `y` 轴也能够缩放，那么在 `y` 轴上也加上 `dataZoom` 组件：

```js
option = {
  ...,
  dataZoom: [
    {
      type: 'slider',
      xAxisIndex: 0,
      start: 10,
      end: 60
    },
    {
      type: 'inside',
      xAxisIndex: 0,
      start: 10,
      end: 60
    },
    {
      type: 'slider',
      yAxisIndex: 0,
      start: 30,
      end: 80
    },
    {
      type: 'inside',
      yAxisIndex: 0,
      start: 30,
      end: 80
    }
  ],
  ...
}
```

可以看到如下结果：

[【示例：点击查看在线实例】](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/scatter-tutorial-dataZoom-3)

## 移动端自适应

ECharts 工作在用户指定高宽的 DOM 节点（容器）中

ECharts 的 **`『组件』`** 和 **`『系列』`** 都在这个 DOM 节点中，每个节点都可以由用户指定位置

* 图表库内部并不适宜实现 DOM 文档流布局，因此采用类似绝对布局的简单容易理解的布局方式

* 但是有时候容器尺寸极端时，这种方式并不能自动避免组件重叠的情况，尤其在移动端小屏的情况下

* 另外，有时会出现一个图表需要同时在 PC 、移动端上展现的场景

  这需要 ECharts 内部组件随着容器尺寸变化而变化的能力

为了解决这个问题，ECharts 完善了组件的定位设置，并且实现了类似[【 CSS Media Query 】](http://www.w3.org/TR/css3-mediaqueries/)的自适应能力

### 组件的定位和布局

大部分 **`『组件』`** 和 **`『系列』`** 会遵循两种定位方式

* 方位定位方式（ `left / right / top / bottom / width / height` ）
* center / radius 定位方式

#### 方位定位方式

`left / right / top / bottom / width / height` 这六个量中，每个量都可以是 **`『绝对值』`** 或者 **`『百分比』`** 或者 **`『位置描述』`** ：

值|说明
-|-
绝对值|单位是浏览器像素（ px ），用 `number` 形式书写（不写单位）；例如 `{left: 23, height: 400}`
百分比|表示占 DOM 容器高宽的百分之多少，用 `string` 形式书写；例如 `{right: '30%', bottom: '40%'}`
位置描述|可以设置 `left: 'center'` ，表示水平居中；可以设置 `top: 'middle'` ，表示垂直居中

这六个量的概念，和 CSS 中六个量的概念类似：

值|说明
-|-
left|距离 DOM 容器左边界的距离
right|距离 DOM 容器右边界的距离
top|距离 DOM 容器上边界的距离
bottom|距离 DOM 容器下边界的距离
width|宽度
height|高度

在横向，left 、right 、width 三个量中，只需两个量有值即可

* 因为任两个量可以决定组件的位置和大小

* 例如 left 和 right 或者 right 和 width 都可以决定组件的位置和大小

* 在纵向，top 、bottom 、height 三个量，和横向类同，不赘述

#### center / radius 定位方式

值|说明
-|-
center|是一个数组，表示 `[x, y]` ，其中 `x` 、`y` 可以是 **`『绝对值』`** 或者 **`『百分比』`** ，含义和前述相同
radius|是一个数组，表示 **`[内半径, 外半径]`** ，其中内外半径可以是 **`『绝对值』`** 或者 **`『百分比』`** ，含义和前述相同（在自适应容器大小时，百分比设置是很有用的）

#### 横向（ horizontal ）和纵向（ vertical ）

ECharts 的 **`『外观狭长』`** 型的组件（如 `legend` 、`visualMap` 、`dataZoom` 、`timeline` 等），大多提供了 **`『横向布局』`** **`『纵向布局』`** 的选择，例如：

* 在细长的移动端屏幕上，可能适合使用 **`『纵向布局』`**

* 在PC宽屏上，可能适合使用 **`『横向布局』`**

横纵向布局的设置，一般在 **`『组件』`** 或者 **`『系列』`** 的 `orient` 或者 `layout` 配置项上，设置为 `'horizontal'` 或者 `'vertical'`

#### 与 ECharts 2 的兼容

ECharts 2 中的 `x / x2 / y / y2` 的命名方式仍被兼容，对应于 `left / right / top / bottom`

* 但是建议写 `left / right / top / bottom`

位置描述中，为兼容 ECharts 2 ，可以支持一些看起来略奇怪的设置：

* `left: 'right'` 、`left: 'left'` 、`top: 'bottom'` 、`top: 'top'`

* 这些语句分别等效于：`right: 0` 、`left: 0` 、`bottom: 0` 、`top: 0` ，写成后者就不奇怪了

### Media Query

[【 Media Query 】](http://www.w3.org/TR/css3-mediaqueries/#media1)提供了 **`『随着容器尺寸改变而改变』`** 的能力。

如下例子，可尝试拖动右下角的圆点，随着尺寸变化，`legend` 和 **`系列`** 会自动改变布局位置和方式：

[【示例：点击查看在线实例】](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/pie-media)

要在 `option` 中设置 `Media Query` 须遵循如下格式：

```js
option = {
  baseOption: { // 这里是基本的 『原子 option 』
    title: { ...},
    legend: { ...},
    series: [{ ...}, { ...}, ...],
    ...
    },
  media: [ // 这里定义了 media query 的逐条规则
    {
      query: { ...},   // 这里写规则
      option: {       // 这里写此规则满足下的 option
        legend: { ...},
        ...
      }
    },
    {
      query: { ...},   // 第二个规则
      option: {       // 第二个规则对应的 option
        legend: { ...},
        ...
      }
    },
    {
      // 这条里没有写规则，表示 『默认』，即所有规则都不满足时，采纳这个 option
      option: {
        legend: { ...},
        ...
      }
    }
  ]
};
```

上面的例子中，`baseOption` 以及 `media` 每个 `option` 都是 **`『原子 option 』`** ，即普通的含有各组件、系列定义的 `option`

* 而由 **`『原子option 』`** 组合成的整个 `option` ，我们称为 **`『复合 option 』`**

* `baseOption` 是必然被使用的，此外，满足了某个 `query` 条件时，对应的 `option` 会被使用 `chart.mergeOption()` 来 merge 进去

#### query

每个 `query` 类似于这样：

```js
{
  minWidth: 200,
  maxHeight: 300,
  minAspectRatio: 1.3
}
```

现在支持三个属性：`width` 、`height` 、`aspectRatio`（长宽比）

* 每个属性都可以加上 `min` 或 `max` 前缀

  比如 `minWidth: 200` 表示 **`『大于等于 200px 宽度』`**

* 两个属性一起写表示 **`『并且』`** ，比如：

  `{minWidth: 200, maxHeight: 300}` 表示 **`『大于等于200px宽度，并且小于等于300px高度』`**

#### option

`media` 中的 `option` 既然是 **`『原子 option 』`** ，理论上可以写任何 `option` 的配置项

* 但是一般我们只写跟布局定位相关的

* 例如，截取上面例子中的一部分 `query` 和 `option`

```js
media: [
  ...,
  {
    query: {
      maxAspectRatio: 1           // 当长宽比小于 1 时
    },
    option: {
      legend: {                   // legend 放在底部中间
        right: 'center',
        bottom: 0,
        orient: 'horizontal'    // legend 横向布局
      },
      series: [                   // 两个饼图左右布局
        {
          radius: [20, '50%'],
          center: ['50%', '30%']
        },
        {
          radius: [30, '50%'],
          center: ['50%', '70%']
        }
      ]
    }
  },
  {
    query: {
      maxWidth: 500               // 当容器宽度小于 500 时
    },
    option: {
      legend: {
        right: 10,              // legend 放置在右侧中间
        top: '15%',
        orient: 'vertical'      // 纵向布局
      },
      series: [                   // 两个饼图上下布局
        {
          radius: [20, '50%'],
          center: ['50%', '30%']
        },
        {
          radius: [30, '50%'],
          center: ['50%', '75%']
        }
      ]
    }
  },
  ...
]
```

#### 多个 query 被满足时的优先级

> 注意：可以有多个 `query` 同时被满足，会都被 `mergeOption` ，定义在后的后被 merge（即优先级更高）

#### 默认 query

如果 `media` 中有某项不写 `query` ，则表示 **`『默认值』`** ，即所有规则都不满足时，采纳这个 `option`

#### 注意事项

在不少情况下，并不需要容器 DOM 节点任意随着拖拽变化大小，而是只是根据不同终端设置几个典型尺寸

但是如果容器 DOM 节点需要能任意随着拖拽变化大小，那么目前使用时需要注意这件事：

* 某个配置项，如果在某一个 `query` 和 `option` 中出现，那么在其他 `query` 和 `option` 中也必须出现

* 否则不能够回归到原来的状态

> `left / right / top / bottom / width / height` 不受这个限制

#### 不支持 merge

**`『复合 option 』`** 中的 `media` 不支持 merge

* 也就是说，当第二（或三、四、五 ... ）次 `chart.setOption(rawOption)` 时

* 如果 `rawOption` 是 复合 `option`（即包含 `media` 列表），那么新的 `rawOption.media` 列表不会和老的 `media` 列表进行 merge

* 而是简单替代

> 当然，`rawOption.baseOption` 仍然会正常和老的 `option` 进行 merge

其实，很少有场景需要使用 **`『复合 option 』`** 来多次 `setOption` ，而我们推荐的做法是：

* 使用 `mediaQuery` 时，第一次 `setOption` 使用 **`『复合 option 』`**

* 后面 `setOption` 时仅使用 **`『原子 option 』`**

  也就是仅仅用 `setOption` 来改变 `baseOption`

最后看一个和时间轴结合的例子：

[【示例：点击查看在线实例】](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/bar-media-timeline)

## 数据的视觉映射

数据可视化是 **`数据`** 到 **`视觉元素`** 的映射过程（这个过程也可称为视觉编码，视觉元素也可称为视觉通道）

ECharts 的每种图表本身就内置了这种映射过程

* 比如折线图把数据映射到 **`『线』`** ，柱状图把数据映射到 **`『长度』`**

* 一些更复杂的图表，如 `graph` 、**`事件河流图`** 、`treemap` 也都会做出他们内置的映射

此外，ECharts 还提供了[【 visualMap 组件】](https://echarts.apache.org/zh/option.html#visualMap)来提供通用的视觉映射

visualMap 组件中可以使用的视觉元素有：

* 图形类别（ symbol ）
* 图形大小（ symbolSize ）
* 颜色（ color ）
* 透明度（ opacity ）
* 颜色透明度（ colorAlpha ）
* 颜色明暗度（ colorLightness ）
* 颜色饱和度（ colorSaturation ）
* 色调（ colorHue ）

### 数据和维度

ECharts 中的数据，一般存放于[【 series.data 】](https://echarts.apache.org/zh/option.html#series.data)中

* 根据图表类型不同，数据的具体形式也可能有些许差异

* 比如可能是 **`『线性表』`** 、**`『树』`** 、**`『图』`** 等

  但他们都有个共性：都是 **`『数据项（ dataItem ）』`** 的集合

* 每个数据项含有 **`『数据值（ value ）』`** 和其他信息（如果需要的话）

  每个数据值，可以是单一的数值（一维）或者一个数组（多维）

例如[【 series.data 】](https://echarts.apache.org/zh/option.html#series.data)最常见的形式就是 **`『线性表』`** ，即一个普通数组：

```js
series: {
  data: [
    {       // 这里每一个项就是数据项（ dataItem ）
      value: 2323, // 这是数据项的数据值（ value ）
      itemStyle: { ...}
    },
    1212,   // 也可以直接是 dataItem 的 value ，这更常见
    2323,   // 每个 value 都是 『一维』 的
    4343,
    3434
  ]
}
```

```js
series: {
  data: [
    {                        // 这里每一个项就是数据项（ dataItem ）
      value: [3434, 129, '圣马力诺'], // 这是数据项的数据值（ value ）
      itemStyle: { ...}
    },
    [1212, 5454, '梵蒂冈'],   // 也可以直接是 dataItem 的 value ，这更常见
    [2323, 3223, '瑙鲁'],     // 每个 value 都是 『三维』 的，每列是一个维度
    [4343, 23, '图瓦卢']    // 假如是 『气泡图』 ，常见第一维度映射到 x 轴，第二维度映射到 y 轴，第三维度映射到气泡半径（ symbolSize ）
  ]
}
```

在图表中，往往默认把 value 的前一两个维度进行映射，比如

* 取第一个维度映射到 x 轴

* 取第二个维度映射到y轴

* 如果想要把更多的维度展现出来，可以借助 visualMap

最常见的情况，[【气泡图（ scatter ）】](https://echarts.apache.org/zh/option.html#series-scatter)使用半径展现了第三个维度

### visualMap 组件

visualMap 组件定义了把数据的 **`『哪个维度』`** 映射到 **`『什么视觉元素上』`**

现在提供如下两种类型的 visualMap 组件，通过[【 visualMap.type 】](https://echarts.apache.org/zh/option.html#visualMap.type)来区分，其定义结构例如：

* [【连续型（ visualMapContinuous ）】](https://echarts.apache.org/zh/option.html#visualMap-continuous)
* [【分段型（ visualMapPiecewise ）】](https://echarts.apache.org/zh/option.html#visualMap-piecewise)

```js
option = {
  visualMap: [ // 可以同时定义多个 visualMap 组件
    {
      // 第一个 visualMap 组件
      type: 'continuous', // 定义为连续型 visualMap
      ...
      },
    {
      // 第二个 visualMap 组件
      type: 'piecewise', // 定义为分段型 visualMap
      ...
      }
  ],
  ...
};
```

一个分段型的例子：

[【示例：点击查看在线实例】](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/scatter-visualMap-piecewise)

分段型视觉映射组件（ visualMapPiecewise ），有三种模式：

模式|说明
-|-
连续型数据平均分段|依据[【 visualMap-piecewise.splitNumber 】](https://echarts.apache.org/zh/option.html#visualMap-piecewise.splitNumber)来自动平均分割成若干块
连续型数据自定义分段|依据[【 visualMap-piecewise.pieces 】](https://echarts.apache.org/zh/option.html#visualMap-piecewise.pieces)来定义每块范围
离散数据（类别性数据）|类别定义在[【 visualMap-piecewise.categories 】](https://echarts.apache.org/zh/option.html#visualMap-piecewise.categories)中

#### 视觉映射方式的配置

既然是 **`『数据』`** 到 **`『视觉元素』`** 的映射，`visualMap` 中可以指定数据的 **`『哪个维度』`**（参见[【 visualMap.dimension 】](https://echarts.apache.org/zh/tutorial.html#visualMap.dimension)）映射到哪些 **`『视觉元素』`**（参见[【 visualMap.inRange 】(https://echarts.apache.org/zh/option.html#visualMap.inRange)]和[【 visualMap.outOfRange 】](https://echarts.apache.org/zh/option.html#visualMap.outOfRange)）中

* 例一：

```js
option = {
  visualMap: [
    {
      type: 'piecewise',
      min: 0,
      max: 5000,
      dimension: 3,       // series.data 的第四个维度（即 value[3]）被映射
      seriesIndex: 4,     // 对第四个系列进行映射
      inRange: {          // 选中范围中的视觉配置

        color: ['blue', '#121122', 'red'], // 定义了图形颜色映射的颜色列表，数据最小值映射到'blue'上，最大值映射到'red'上，其余自动线性计算

        symbolSize: [30, 100]               // 定义了图形尺寸的映射范围，数据最小值映射到30上，最大值映射到100上，其余自动线性计算
      },

      outOfRange: {       // 选中范围外的视觉配置
        symbolSize: [30, 100]
      }
    },
    ...
  ]
};
```

* 例二：

```js
option = {
  visualMap: [
    {
      ...,
      inRange: {          // 选中范围中的视觉配置

        colorLightness: [0.2, 1], // 映射到明暗度上，也就是对本来的颜色进行明暗度处理
        // 本来的颜色可能是从全局色板中选取的颜色，visualMap 组件并不关心

        symbolSize: [30, 100]
      },
      ...
      },
    ...
  ]
};
```

> 更多详情，参见[【 visualMap.inRange 】](https://echarts.apache.org/zh/option.html#visualMap.inRange)和[【 visualMap.outOfRange 】](https://echarts.apache.org/zh/option.html#visualMap.outOfRange)

## 事件和行为

在 ECharts 的图表中用户的操作将会触发相应的事件

* 开发者可以监听这些事件，然后通过回调函数做相应的处理

* 比如跳转到一个地址，或者弹出对话框，或者做数据下钻等等

在 ECharts 3 中绑定事件跟 2 一样都是通过 `on` 方法，但是事件名称比 2 更加简单了

* ECharts 3 中，事件名称对应 DOM 事件名称，均为小写的字符串，如下是一个绑定点击操作的示例

```js
myChart.on('click', function (params) {
  // 控制台打印数据的名称
  console.log(params.name);
});
```

在 ECharts 中事件分为两种类型：

* 一种是用户鼠标操作点击，或者 `hover` 图表的图形时触发的事件

* 还有一种是用户在使用可以交互的组件后触发的行为事件

  例如，在切换图例开关时触发的[【 legendselectchanged 】](https://echarts.apache.org/zh/api.html#events.legendselectchanged)事件（这里需要注意切换图例开关是不会触发 `'legendselected'` 事件的），数据区域缩放时触发的[【 datazoom 】](https://echarts.apache.org/zh/api.html#events.legendselectchanged)事件等等

### 鼠标事件的处理















































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































