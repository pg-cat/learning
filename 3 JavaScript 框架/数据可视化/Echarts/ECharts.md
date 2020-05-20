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

* 在线自定义构建

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






































































































































































































































































































