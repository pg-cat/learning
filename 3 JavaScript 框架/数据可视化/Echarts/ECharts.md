以下内容整理自[【 ECharts 官方文档】](https://echarts.apache.org/zh/tutorial.html#5%20分钟上手%20ECharts)

# ECharts

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

### 引用 `lib` 还是 `src`

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





























































































































