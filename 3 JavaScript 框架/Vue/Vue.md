以下内容整理自[【 Vue.js 官方文档】【 2.x 】](https://cn.vuejs.org/v2/guide/installation.html)


# Vue.js

## 安装

### 兼容性

Vue 不支持 IE8 及以下版本，因为 Vue 使用了 IE8 无法模拟的 `ECMAScript 5` 特性

* 但它支持所有[【兼容 `ECMAScript 5` 的浏览器】](https://caniuse.com/#feat=es5)

### 语义化版本控制

Vue 在其所有项目中公布的功能和行为都遵循[【语义化版本控制】](https://semver.org/lang/zh-CN/)

* 对于未公布的或内部暴露的行为，其变更会描述在[【发布说明】](https://github.com/vuejs/vue/releases)中

### 更新日志

最新稳定版本：`2.6.11`

每个版本的更新日志见[【 `GitHub` 】](https://github.com/vuejs/vue/releases)

### Vue Devtools

在使用 Vue 时，我们推荐在你的浏览器上安装[【 `Vue Devtools` 】](https://github.com/vuejs/vue-devtools#vue-devtools)

* 它允许你在一个更友好的界面中审查和调试 Vue 应用

### 直接用 `<script>` 引入

> [【观看本节视频讲解】](https://learning.dcloud.io/#/?vid=1)

直接下载并用 `<script>` 标签引入，Vue 会被注册为一个全局变量

> 在开发环境下不要使用压缩版本，不然你就失去了所有常见错误相关的警告!

* [【开发版本】](https://cn.vuejs.org/js/vue.js)

  包含完整的警告和调试模式

* [【生产版本】](https://cn.vuejs.org/js/vue.min.js)

  删除了警告，33.30KB min+gzip

#### CDN

对于制作原型或学习，你可以这样使用最新版本：

```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```

对于生产环境，我们推荐链接到一个明确的版本号和构建文件，以避免新版本造成的不可预期的破坏：

```html
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.11"></script>
```

如果你使用原生 `ES Modules` ，这里也有一个兼容 `ES Module` 的构建文件：

```html
<script type="module">
  import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js'
</script>
```

你可以在 `cdn.jsdelivr.net/npm/vue` 浏览 NPM 包的源代码

* Vue 也可以在 `unpkg` 和 `cdnjs` 上获取 ( `cdnjs` 的版本更新可能略滞后)

> 请确认了解不同构建版本并在你发布的站点中使用生产环境版本，把 `vue.js` 换成 `vue.min.js`
>> 这是一个更小的构建，可以带来比开发环境下更快的速度体验

### NPM

> 对于中国大陆用户，建议将 NPM 源设置为[【国内的镜像】](https://npm.taobao.org/)，可以大幅提升安装速度

在用 Vue 构建大型应用时推荐使用 NPM 安装

* NPM 能很好地和诸如 `webpack` 或 `Browserify` 模块打包器配合使用

* 同时 Vue 也提供配套工具来开发单文件组件

```shell
# 最新稳定版
$ npm install vue
```

### 命令行工具 (CLI)

Vue 提供了一个[【官方的 CLI 】](https://github.com/vuejs/vue-cli)，为单页面应用（SPA）快速搭建繁杂的脚手架

* 它为现代前端工作流提供了 `batteries-included` 的构建设置

* 只需要几分钟的时间就可以运行起来并带有热重载、保存时 lint 校验，以及生产环境可用的构建版本

* 更多详情可查阅[【 Vue CLI 的文档】](https://cli.vuejs.org/)

> CLI 工具假定用户对 `Node.js` 和相关构建工具有一定程度的了解
> * 如果你是新手，我们强烈建议先在不用构建工具的情况下通读[【指南】](https://cn.vuejs.org/v2/guide/)，在熟悉 Vue 本身之后再使用 CLI

> [【在 Vue Mastery 观看视频讲解】](https://www.vuemastery.com/courses/real-world-vue-js/vue-cli)

#### 对不同构建版本的解释

在[【 NPM 包的 `dist/` 目录】](https://cdn.jsdelivr.net/npm/vue/dist/)你将会找到很多不同的 Vue.js 构建版本

这里列出了它们之间的差别：

-|UMD|CommonJS|ES Module (基于构建工具使用)|ES Module (直接用于浏览器)
-|-|-|-|-
完整版|vue.js|vue.common.js|vue.esm.js|vue.esm.browser.js
只包含运行时版|vue.runtime.js|vue.runtime.common.js|vue.runtime.esm.js|-
完整版(生产环境)|vue.min.js|-|-|vue.esm.browser.min.js
只包含运行时版(生产环境)|vue.runtime.min.js|-|-|-

#### 术语

* 完整版

  同时包含编译器和运行时的版本

* 编译器

  用来将模板字符串编译成为 JavaScript 渲染函数的代码

* 运行时

  用来创建 Vue 实例、渲染并处理虚拟 DOM 等的代码

  基本上就是除去编译器的其它一切

* [【 `UMD` 】](https://github.com/umdjs/umd)

  UMD 版本可以通过 `<script>` 标签直接用在浏览器中

  jsDelivr CDN 的[【 https://cdn.jsdelivr.net/npm/vue 】](https://cdn.jsdelivr.net/npm/vue)默认文件就是运行时 + 编译器的 UMD 版本( `vue.js` )

* [【 `CommonJS` 】](http://wiki.commonjs.org/wiki/Modules/1.1)

  CommonJS 版本用来配合老的打包工具比如[【 `Browserify` 】](http://browserify.org/)或[【 `webpack 1` 】](https://webpack.github.io/)

  这些打包工具的默认文件( `pkg.main` )是只包含运行时的 CommonJS 版本( `vue.runtime.common.js` )

* [【 `ES Module` 】](http://exploringjs.com/es6/ch_modules.html)

  从 `2.6` 开始 Vue 会提供两个 `ES Modules` (ESM) 构建文件：

  * 为打包工具提供的 ESM ：

    为诸如[【 `webpack 2` 】](https://webpack.js.org/)或[【 `Rollup` 】](https://rollupjs.org/)提供的现代打包工具

    ESM 格式被设计为可以被静态分析，所以打包工具可以利用这一点来进行 `tree-shaking` 并将用不到的代码排除出最终的包

    为这些打包工具提供的默认文件( `pkg.module` )是只有运行时的 ES Module 构建( `vue.runtime.esm.js` )

  * 为浏览器提供的 ESM ( `2.6+` ) ：

    用于在现代浏览器中通过 `<script type="module">` 直接导入

#### 运行时 + 编译器 vs. 只包含运行时

如果你需要在客户端编译模板 (比如传入一个字符串给 `template` 选项，或挂载到一个元素上并以其 DOM 内部的 HTML 作为模板)，就将需要加上编译器，即完整版：

```js
// 需要编译器
new Vue({
  template: '<div>{{ hi }}</div>'
})

// 不需要编译器
new Vue({
  render (h) {
    return h('div', this.hi)
  }
})
```

当使用 `vue-loader` 或 `vueify` 的时候，`*.vue` 文件内部的模板会在构建时预编译成 JavaScript

* 你在最终打好的包里实际上是不需要编译器的，所以只用运行时版本即可

* 因为运行时版本相比完整版体积要小大约 30%，所以应该尽可能使用这个版本

如果你仍然希望使用完整版，则需要在打包工具里配置一个别名：

* `webpack`

```js
module.exports = {
  // ...
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js' // 用 webpack 1 时需用 'vue/dist/vue.common.js'
    }
  }
}
```

* `Rollup`

```js
const alias = require('rollup-plugin-alias')

rollup({
  // ...
  plugins: [
    alias({
      'vue': require.resolve('vue/dist/vue.esm.js')
    })
  ]
})
```

* `Browserify`

  添加到你项目的 `package.json` ：

```js
{
  // ...
  "browser": {
    "vue": "vue/dist/vue.common.js"
  }
}
```

* `Parcel`

  添加到你项目的 `package.json` ：

```js
{
  // ...
  "alias": {
    "vue" : "./node_modules/vue/dist/vue.common.js"
  }
}
```

#### 开发环境 vs. 生产环境模式

对于 UMD 版本来说，**`开发环境 / 生产环境`** 模式是硬编码好的：

* 开发环境下用未压缩的代码

* 生产环境下使用压缩后的代码

`CommonJS` 和 `ES Module` 版本是用于打包工具的，因此我们不提供压缩后的版本

> 你需要自行将最终的包进行压缩

`CommonJS` 和 `ES Module` 版本同时保留原始的 `process.env.NODE_ENV` 检测，以决定它们应该运行在什么模式下

* 你应该使用适当的打包工具配置来替换这些环境变量以便控制 Vue 所运行的模式

* 把 `process.env.NODE_ENV` 替换为字符串字面量

  同时可以让 `UglifyJS` 之类的压缩工具完全丢掉仅供开发环境的代码块，以减少最终的文件尺寸

`webpack`

在 `webpack 4+` 中，你可以使用 mode 选项：

```js
module.exports = {
  mode: 'production'
}
```

但是在 `webpack 3` 及其更低版本中，你需要使用[【 `DefinePlugin` 】](https://webpack.js.org/plugins/define-plugin/)：

```js
var webpack = require('webpack')

module.exports = {
  // ...
  plugins: [
    // ...
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ]
}
```

`Rollup`

使用[【 `rollup-plugin-replace` 】](https://github.com/rollup/rollup-plugin-replace)：

```js
const replace = require('rollup-plugin-replace')

rollup({
  // ...
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
}).then(...)
```

`Browserify`

为你的包应用一次全局的[【 `envify` 】](https://github.com/hughsk/envify)转换

```shell
NODE_ENV=production browserify -g envify -e main.js | uglifyjs -c -m > build.js
```

> 也可以移步[【生产环境部署】](https://cn.vuejs.org/v2/guide/deployment.html)

#### CSP 环境

有些环境，如 `Google Chrome Apps` ，会强制应用内容安全策略(CSP)，不能使用 `new Function()` 对表达式求值

* 这时可以用 CSP 兼容版本

* 完整版本依赖于该功能来编译模板，所以无法在这些环境下使用

另一方面，运行时版本则是完全兼容 CSP 的

* 当通过[【 `webpack + vue-loader` 】](https://github.com/vuejs-templates/webpack-simple)或者[【 `Browserify + vueify` 】](https://github.com/vuejs-templates/browserify-simple)构建时，模板将被预编译为 `render` 函数，可以在 CSP 环境中完美运行

### 开发版本

> 重要：GitHub 仓库的 `/dist` 文件夹只有在新版本发布时才会提交

如果想要使用 GitHub 上 Vue 最新的源码，你需要自己构建！

```shell
git clone https://github.com/vuejs/vue.git node_modules/vue
cd node_modules/vue
npm install
npm run build
```

### Bower

Bower 只提供 UMD 版本

```shell
# 最新稳定版本
$ bower install vue
```

### AMD 模块加载器

所有 UMD 版本都可以直接用作 AMD 模块

## 介绍

> [【观看本节视频讲解】](https://learning.dcloud.io/#/?vid=0)

Vue (读音 `/vjuː/` ，类似于 `view` ) 是一套用于构建用户界面的渐进式框架

* 与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用

* Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合

* 另一方面，当与[【现代化的工具链】](https://cn.vuejs.org/v2/guide/single-file-components.html)以及各种[【支持类库】](https://github.com/vuejs/awesome-vue#libraries--plugins)结合使用时，Vue 也完全能够为复杂的单页应用提供驱动

> [【了解其核心概念和一个示例工程】](https://player.youku.com/embed/XMzMwMTYyODMyNA==?autoplay=true&client_id=37ae6144009e277d)

> 想知道 Vue 与其它库和框架有哪些区别，请查看[【对比其它框架】](https://cn.vuejs.org/v2/guide/comparison.html)

### 起步

> [【观看本节视频讲解】](https://learning.dcloud.io/#/?vid=1)

> 官方指南假设你已了解关于 `HTML` 、`CSS` 和 `JavaScript` 的中级知识
> * 如果你刚开始学习前端开发，将框架作为你的第一步可能不是最好的主意——掌握好基础知识再来吧！
> * 之前有其它框架的使用经验会有帮助，但这不是必需的

尝试 `Vue.js` 最简单的方法是使用[【 `Hello World` 例子】](https://codesandbox.io/s/github/vuejs/vuejs.org/tree/master/src/v2/examples/vue-20-hello-world)

* 你可以在浏览器新标签页中打开它，跟着例子学习一些基础用法

```html
<!DOCTYPE html>
<html>
<head>
  <title>My first Vue app</title>
  <script src="https://unpkg.com/vue"></script>
</head>
<body>
  <div id="app">
    {{ message }}
  </div>

  <script>
    var app = new Vue({
      el: '#app',
      data: {
        message: 'Hello Vue!'
      }
    })
  </script>
</body>
</html>
```

* 或者你也可以创建一个 `.html` 文件，然后通过如下方式引入 `Vue` ：

```html
<!-- 开发环境版本，包含了有帮助的命令行警告 -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```

或者

```html
<!-- 生产环境版本，优化了尺寸和速度 -->
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
```

[【安装教程】](https://cn.vuejs.org/guide/installation.html)给出了更多安装 Vue 的方式

* 请注意我们不推荐新手直接使用 `vue-cli` ，尤其是在你还不熟悉基于 `Node.js` 的构建工具时

* 如果你喜欢交互式的东西，你也可以查阅[【这个 Scrimba 上的系列教程(英语)】](https://scrimba.com/g/gvuedocs)，它揉合了录屏和代码试验田，并允许你随时暂停和播放

### 声明式渲染

> [【观看本节视频讲解】](https://learning.dcloud.io/#/?vid=3)

Vue.js 的核心是一个允许采用简洁的模板语法来声明式地将数据渲染进 DOM 的系统：

```html
<div id="app">
  {{ message }}
</div>
```

```js
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
```

我们已经成功创建了第一个 Vue 应用！

看起来这跟渲染一个字符串模板非常类似，但是 Vue 在背后做了大量工作

* 现在数据和 DOM 已经被建立了关联，所有东西都是 **`响应式的`**

* 打开你的浏览器的 JavaScript 控制台 (就在这个页面打开)，并修改 `app.message` 的值，你将看到上例相应地更新

> 注意我们不再和 HTML 直接交互了！

一个 Vue 应用会将其挂载到一个 DOM 元素上 (对于这个例子是 `#app` )

* 然后对其进行完全控制

* 那个 HTML 是我们的入口，但其余都会发生在新创建的 Vue 实例内部

除了文本插值，我们还可以像这样来绑定元素 `attribute` ：

```html
<div id="app-2">
  <span v-bind:title="message">
    鼠标悬停几秒钟查看此处动态绑定的提示信息！
  </span>
</div>
```

```js
var app2 = new Vue({
  el: '#app-2',
  data: {
    message: '页面加载于 ' + new Date().toLocaleString()
  }
})
```

> 这里我们遇到了一点新东西！

你看到的 `v-bind attribute` 被称为指令

* 指令带有前缀 `v-` ，以表示它们是 Vue 提供的特殊 attribute

* 可能你已经猜到了，它们会在渲染的 DOM 上应用特殊的响应式行为

* 在这里，该指令的意思是：**将这个元素节点的 `title` attribute 和 Vue 实例的 `message` property 保持一致**

> 如果你再次打开浏览器的 JavaScript 控制台，输入 `app2.message = '新消息'` ，就会再一次看到这个绑定了 `title` attribute 的 HTML 已经进行了更新

### 条件与循环

> [【观看本节视频讲解】](https://learning.dcloud.io/#/?vid=8)

控制切换一个元素是否显示也相当简单：

```html
<div id="app-3">
  <p v-if="seen">现在你看到我了</p>
</div>
```

```js
var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})
```

> 继续在控制台输入 `app3.seen = false` ，你会发现之前显示的消息消失了

这个例子演示了我们不仅可以把数据绑定到 DOM 文本或 attribute，还可以绑定到 DOM 结构

* 此外，Vue 也提供一个强大的过渡效果系统，可以在 Vue **`插入 / 更新 / 移除`** 元素时自动应用[【过渡效果】](https://cn.vuejs.org/v2/guide/transitions.html)

还有其它很多指令，每个都有特殊的功能

* 例如，`v-for` 指令可以绑定数组的数据来渲染一个项目列表：

```html
<div id="app-4">
  <ol>
    <li v-for="todo in todos">
      {{ todo.text }}
    </li>
  </ol>
</div>
```

```js
var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: '学习 JavaScript' },
      { text: '学习 Vue' },
      { text: '整个牛项目' }
    ]
  }
})
```

> 在控制台里，输入 `app4.todos.push({ text: '新项目' })` ，你会发现列表最后添加了一个新项目

### 处理用户输入

> [【观看本节视频讲解】](https://learning.dcloud.io/#/?vid=11)

为了让用户和你的应用进行交互，我们可以用 `v-on` 指令添加一个事件监听器，通过它调用在 Vue 实例中定义的方法：

```html
<div id="app-5">
  <p>{{ message }}</p>
  <button v-on:click="reverseMessage">反转消息</button>
</div>
```

```js
var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})
```

> 注意：在 `reverseMessage` 方法中，我们更新了应用的状态，但没有触碰 DOM
> * 所有的 DOM 操作都由 Vue 来处理，你编写的代码只需要关注逻辑层面即可

Vue 还提供了 `v-model` 指令，它能轻松实现表单输入和应用状态之间的双向绑定

```html
<div id="app-6">
  <p>{{ message }}</p>
  <input v-model="message">
</div>
```

```js
var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
})
```

### 组件化应用构建

> [【观看本节视频讲解】](https://learning.dcloud.io/#/?vid=12)

组件系统是 Vue 的另一个重要概念，因为它是一种抽象，允许我们使用小型、独立和通常可复用的组件构建大型应用

仔细想想，几乎任意类型的应用界面都可以抽象为一个组件树：

![图片](https://cn.vuejs.org/images/components.png)

在 Vue 里，一个组件本质上是一个拥有预定义选项的一个 Vue 实例

在 Vue 中注册组件很简单：

```js
// 定义名为 todo-item 的新组件
Vue.component('todo-item', {
  template: '<li>这是个待办项</li>'
})

var app = new Vue(...)
```

现在你可以用它构建另一个组件模板：

```html
<ol>
  <!-- 创建一个 todo-item 组件的实例 -->
  <todo-item></todo-item>
</ol>
```

但是这样会为每个待办项渲染同样的文本，这看起来并不炫酷

* 我们应该能从父作用域将数据传到子组件才对

* 让我们来修改一下组件的定义，使之能够接受一个[【 `prop` 】](https://cn.vuejs.org/v2/guide/components.html#通过-Prop-向子组件传递数据)

```js
Vue.component('todo-item', {
  // todo-item 组件现在接受一个 "prop"
  // 类似于一个自定义 attribute
  // 这个 prop 名为 todo
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})
```

现在，我们可以使用 `v-bind` 指令将待办项传到循环输出的每个组件中：

```html
<div id="app-7">
  <ol>
    <!--
      现在我们为每个 todo-item 提供 todo 对象，todo 对象是变量，即其内容可以是动态的。
      我们也需要为每个组件提供一个 “key” ，稍后再作详细解释。
    -->
    <todo-item
      v-for="item in groceryList"
      v-bind:todo="item"
      v-bind:key="item.id"
    ></todo-item>
  </ol>
</div>
```

```js
Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: '蔬菜' },
      { id: 1, text: '奶酪' },
      { id: 2, text: '随便其它什么人吃的东西' }
    ]
  }
})
```

尽管这只是一个刻意设计的例子，但是我们已经设法将应用分割成了两个更小的单元

* 子单元通过 `prop` 接口与父单元进行了良好的解耦

* 我们现在可以进一步改进 `<todo-item>` 组件，提供更为复杂的模板和逻辑，而不会影响到父单元

在一个大型应用中，有必要将整个应用程序划分为组件，以使开发更易管理

在[【后续教程】](https://cn.vuejs.org/v2/guide/components.html)中我们将详述组件，不过这里有一个(假想的)例子，以展示使用了组件的应用模板是什么样的：

```html
<div id="app">
  <app-nav></app-nav>
  <app-view>
    <app-sidebar></app-sidebar>
    <app-content></app-content>
  </app-view>
</div>
```

### 与自定义元素的关系

你可能已经注意到 Vue 组件非常类似于自定义元素

* 它是[【 Web 组件规范】](https://www.w3.org/wiki/WebComponents/)的一部分，这是因为 Vue 的组件语法部分参考了该规范

* 例如 Vue 组件实现了[【 `Slot API` 】](https://github.com/w3c/webcomponents/blob/gh-pages/proposals/Slots-Proposal.md)与 `is` attribute

但是，还是有几个关键差别：

* Web Components 规范已经完成并通过，但未被所有浏览器原生实现

  目前 `Safari 10.1+` 、`Chrome 54+` 和 `Firefox 63+` 原生支持 Web Components

  相比之下，Vue 组件不需要任何 `polyfill` ，并且在所有支持的浏览器 (IE9 及更高版本) 之下表现一致

  必要时，Vue 组件也可以包装于原生自定义元素之内

* Vue 组件提供了纯自定义元素所不具备的一些重要功能

  最突出的是跨组件数据流、自定义事件通信以及构建工具集成

虽然 Vue 内部没有使用自定义元素，不过在应用使用自定义元素、或以自定义元素形式发布时，依然有很好的互操作性

* `Vue CLI` 也支持将 Vue 组件构建成为原生的自定义元素

## 实例

### 创建一个 Vue 实例

> [【观看本节视频讲解】](https://learning.dcloud.io/#/?vid=2)

每个 Vue 应用都是通过用 Vue 函数创建一个新的 Vue 实例开始的：

```js
var vm = new Vue({
  // 选项
})
```

虽然没有完全遵循[【 MVVM 模型】](https://zh.wikipedia.org/wiki/MVVM)，但是 Vue 的设计也受到了它的启发

* 因此在文档中经常会使用 vm ( `ViewModel` 的缩写) 这个变量名表示 Vue 实例

> 当创建一个 Vue 实例时，你可以传入一个选项对象
> * 这篇教程主要描述的就是如何使用这些选项来创建你想要的行为
> * 作为参考，你也可以在[【 API 文档】](https://cn.vuejs.org/v2/api/#选项-数据)中浏览完整的选项列表

一个 Vue 应用由一个通过 `new Vue` 创建的根 Vue 实例，以及可选的嵌套的、可复用的组件树组成

* 举个例子，一个 todo 应用的组件树可以是这样的

```
根实例
└─ TodoList
   ├─ TodoItem
   │  ├─ DeleteTodoButton
   │  └─ EditTodoButton
   └─ TodoListFooter
      ├─ ClearTodosButton
      └─ TodoListStatistics
```

现在，你只需要明白所有的 Vue 组件都是 Vue 实例，并且接受相同的选项对象(一些根实例特有的选项除外)

### 数据与方法

> [【观看本节视频讲解】](https://learning.dcloud.io/#/?vid=3)

当一个 Vue 实例被创建时，它将 `data` 对象中的所有的 property 加入到 Vue 的响应式系统中

* 当这些 property 的值发生改变时，视图将会产生 **`响应`** ，即匹配更新为新的值

```js
// 我们的数据对象
var data = { a: 1 }

// 该对象被加入到一个 Vue 实例中
var vm = new Vue({
  data: data
})

// 获得这个实例上的 property
// 返回源数据中对应的字段
vm.a == data.a // => true

// 设置 property 也会影响到原始数据
vm.a = 2
data.a // => 2

// ……反之亦然
data.a = 3
vm.a // => 3
```

当这些数据改变时，视图会进行重渲染

> 值得注意的是只有当实例被创建时就已经存在于 `data` 中的 property 才是 **`响应式`** 的

也就是说如果你添加一个新的 property ，比如：

```js
vm.b = 'hi'
```

那么对 `b` 的改动将不会触发任何视图的更新

如果你知道你会在晚些时候需要一个 property ，但是一开始它为空或不存在，那么你仅需要设置一些初始值

```js
data: {
  newTodoText: '',
  visitCount: 0,
  hideCompletedTodos: false,
  todos: [],
  error: null
}
```

这里唯一的例外是使用 `Object.freeze()` ，这会阻止修改现有的 property，也意味着响应系统无法再追踪变化

```js
var obj = {
  foo: 'bar'
}

Object.freeze(obj)

new Vue({
  el: '#app',
  data: obj
})
```

```html
<div id="app">
  <p>{{ foo }}</p>
  <!-- 这里的 `foo` 不会更新！ -->
  <button v-on:click="foo = 'baz'">Change it</button>
</div>
```

除了数据 property ，Vue 实例还暴露了一些有用的实例 property 与方法

* 它们都有前缀 `$` ，以便与用户定义的 property 区分开来

```js
var data = { a: 1 }
var vm = new Vue({
  el: '#example',
  data: data
})

vm.$data === data // => true
vm.$el === document.getElementById('example') // => true

// $watch 是一个实例方法
vm.$watch('a', function (newValue, oldValue) {
  // 这个回调将在 `vm.a` 改变后调用
})
```

> 以后你可以在[【 API 参考】](https://cn.vuejs.org/v2/api/#实例-property)中查阅到完整的实例 property 和方法的列表

### 实例生命周期钩子

> [【观看本节视频讲解】](https://learning.dcloud.io/#/?vid=4)

每个 Vue 实例在被创建时都要经过一系列的初始化过程

* 例如，需要设置数据监听、编译模板、将实例挂载到 DOM 并在数据变化时更新 DOM 等

* 同时在这个过程中也会运行一些叫做生命周期钩子的函数，这给了用户在不同阶段添加自己的代码的机会

比如 `created` 钩子可以用来在一个实例被创建之后执行代码：

```js
new Vue({
  data: {
    a: 1
  },
  created: function () {
    // `this` 指向 vm 实例
    console.log('a is: ' + this.a)
  }
})
// => "a is: 1"
```

也有一些其它的钩子，在实例生命周期的不同阶段被调用，如 `mounted` 、`updated` 和 `destroyed`

* 生命周期钩子的 this 上下文指向调用它的 Vue 实例

> 不要在选项 property 或回调上使用箭头函数，比如：
>> `created: () => console.log(this.a)` 或 `vm.$watch('a', newValue => this.myMethod())`
>> * 因为箭头函数并没有 this ，this 会作为变量一直向上级词法作用域查找，直至找到为止
>> * 所以，经常导致 `Uncaught TypeError: Cannot read property of undefined` 或 `Uncaught TypeError: this.myMethod is not a function` 之类的错误

### 生命周期图示

下图展示了实例的生命周期

> 你不需要立马弄明白所有的东西，不过随着你的不断学习和使用，它的参考价值会越来越高

![图片](https://cn.vuejs.org/images/lifecycle.png)

## 模板语法

Vue.js 使用了基于 HTML 的模板语法，允许开发者声明式地将 DOM 绑定至底层 Vue 实例的数据

* 所有 Vue.js 的模板都是合法的 HTML ，所以能被遵循规范的浏览器和 HTML 解析器解析

在底层的实现上，Vue 将模板编译成虚拟 DOM 渲染函数

* 结合响应系统，Vue 能够智能地计算出最少需要重新渲染多少组件，并把 DOM 操作次数减到最少

> 如果你熟悉虚拟 DOM 并且偏爱 JavaScript 的原始力量，你也可以不用模板，[【直接写渲染 (render) 函数】](https://cn.vuejs.org/v2/guide/render-function.html)，使用可选的 JSX 语法

### 插值

> [【观看本节视频讲解】](https://learning.dcloud.io/#/?vid=5)

#### 文本

数据绑定最常见的形式就是使用 `Mustache` 语法(双大括号)的文本插值：

```html
<span>Message: {{ msg }}</span>
```

Mustache 标签将会被替代为对应数据对象上 `msg` property 的值

* 无论何时，绑定的数据对象上 `msg` property 发生了改变，插值处的内容都会更新

通过使用[【 `v-once` 指令】](https://cn.vuejs.org/v2/api/#v-once)，你也能执行一次性地插值，当数据改变时，插值处的内容不会更新

* 但请留心这会影响到该节点上的其它数据绑定

```html
<span v-once>这个将不会改变: {{ msg }}</span>
```

#### 原始 HTML

双大括号会将数据解释为普通文本，而非 HTML 代码

* 为了输出真正的 HTML ，你需要使用[【 `v-html` 指令】](https://cn.vuejs.org/v2/api/#v-html)：

```html
<p>Using mustaches: {{ rawHtml }}</p>
<p>Using v-html directive: <span v-html="rawHtml"></span></p>
```

这个 `span` 的内容将会被替换成为 property 值 `rawHtml` ，直接作为 HTML

* 会忽略解析它的 property 值中的数据绑定

> 注意：你不能使用 `v-html` 来复合局部模板，因为 Vue 不是基于字符串的模板引擎
> * 反之，对于用户界面(UI)，组件更适合作为可重用和可组合的基本单位

> 你的站点上动态渲染的任意 HTML 可能会非常危险，因为它很容易导致[【 `XSS` 攻击】](https://en.wikipedia.org/wiki/Cross-site_scripting)
>> 请只对可信内容使用 HTML 插值，绝不要对用户提供的内容使用插值

#### Attribute

Mustache 语法不能作用在 HTML attribute 上，遇到这种情况应该使用[【 `v-bind` 指令】](https://cn.vuejs.org/v2/api/#v-bind)：

```html
<div v-bind:id="dynamicId"></div>
```

对于布尔 attribute (它们只要存在就意味着值为 `true` )，`v-bind` 工作起来略有不同，在这个例子中：

```html
<button v-bind:disabled="isButtonDisabled">Button</button>
```

如果 `isButtonDisabled` 的值是 `null` 、`undefined` 或 `false` ，则 `disabled` attribute 甚至不会被包含在渲染出来的 `<button>` 元素中

#### 使用 JavaScript 表达式

迄今为止，在我们的模板中，我们一直都只绑定简单的 property 键值

* 但实际上，对于所有的数据绑定，Vue.js 都提供了完全的 JavaScript 表达式支持

```html
{{ number + 1 }}

{{ ok ? 'YES' : 'NO' }}

{{ message.split('').reverse().join('') }}

<div v-bind:id="'list-' + id"></div>
```

这些表达式会在所属 Vue 实例的数据作用域下作为 JavaScript 被解析

> 有个限制就是，每个绑定都只能包含 **`单个表达式`** ，所以下面的例子都 **`不会生效`**

```html
<!-- 这是语句，不是表达式 -->
{{ var a = 1 }}

<!-- 流控制也不会生效，请使用三元表达式 -->
{{ if (ok) { return message } }}
```

> 模板表达式都被放在沙盒中，只能访问[【全局变量的一个白名单】](https://github.com/vuejs/vue/blob/v2.6.10/src/core/instance/proxy.js#L9)，如 `Math` 和 `Date`
>> 你不应该在模板表达式中试图访问用户定义的全局变量

### 指令

> [【观看本节视频讲解】](https://learning.dcloud.io/#/?vid=6)

指令 (Directives) 是带有 `v-` 前缀的特殊 attribute

* 指令 attribute 的值预期是单个 JavaScript 表达式 ( `v-for` 是例外情况，稍后我们再讨论)

* 指令的职责是，当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM

回顾我们在介绍中看到的例子：

```html
<p v-if="seen">现在你看到我了</p>
```

这里，`v-if` 指令将根据表达式 `seen` 的值的真假来 **插入 / 移除 `<p>`** 元素

#### 参数

一些指令能够接收一个 **`参数`** ，在指令名称之后以冒号表示

例如，`v-bind` 指令可以用于响应式地更新 HTML attribute ：

```html
<a v-bind:href="url">...</a>
```

在这里 `href` 是参数，告知 `v-bind` 指令将该元素的 `href` attribute 与表达式 `url` 的值绑定

另一个例子是 `v-on` 指令，它用于监听 DOM 事件：

```html
<a v-on:click="doSomething">...</a>
```

在这里参数是监听的事件名

#### 动态参数

> `2.6.0` 新增

从 `2.6.0` 开始，可以用方括号括起来的 JavaScript 表达式作为一个指令的参数：

```html
<!--
注意，参数表达式的写法存在一些约束，如之后的“对动态参数表达式的约束”章节所述。
-->
<a v-bind:[attributeName]="url"> ... </a>
```

这里的 `attributeName` 会被作为一个 JavaScript 表达式进行动态求值，求得的值将会作为最终的参数来使用

* 例如，如果你的 Vue 实例有一个 `data` property `attributeName` ，其值为 `"href"` ，那么这个绑定将等价于 `v-bind:href`

同样地，你可以使用动态参数为一个动态的事件名绑定处理函数：

```html
<a v-on:[eventName]="doSomething"> ... </a>
```

在这个示例中，当 `eventName` 的值为 `"focus"` 时，`v-on:[eventName]` 将等价于 `v-on:focus`

#### 对动态参数的值的约束

动态参数预期会求出一个字符串，异常情况下值为 `null`

* 这个特殊的 `null` 值可以被显性地用于移除绑定

* 任何其它非字符串类型的值都将会触发一个警告

#### 对动态参数表达式的约束

动态参数表达式有一些语法约束，因为某些字符，如空格和引号，放在 HTML attribute 名里是无效的

```html
<!-- 这会触发一个编译警告 -->
<a v-bind:['foo' + bar]="value"> ... </a>
```

变通的办法是使用没有空格或引号的表达式，或用计算属性替代这种复杂表达式

在 DOM 中使用模板时(直接在一个 HTML 文件里撰写模板)，还需要避免使用大写字符来命名键名，因为浏览器会把 attribute 名全部强制转为小写：






































































































































































































































































































































































































































