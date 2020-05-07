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

### 对不同构建版本的解释

在[【 NPM 包的 `dist/` 目录】](https://cdn.jsdelivr.net/npm/vue/dist/)你将会找到很多不同的 Vue.js 构建版本

这里列出了它们之间的差别：

-|UMD|CommonJS|ES Module (基于构建工具使用)|ES Module (直接用于浏览器)
-|-|-|-|-
完整版|vue.js|vue.common.js|vue.esm.js|vue.esm.browser.js
只包含运行时版|vue.runtime.js|vue.runtime.common.js|vue.runtime.esm.js|-
完整版(生产环境)|vue.min.js|-|-|vue.esm.browser.min.js
只包含运行时版(生产环境)|vue.runtime.min.js|-|-|-

#### 术语

* 完整版：同时包含编译器和运行时的版本。

编译器：用来将模板字符串编译成为 JavaScript 渲染函数的代码。

运行时：用来创建 Vue 实例、渲染并处理虚拟 DOM 等的代码。基本上就是除去编译器的其它一切




















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













































































































































































































































































































































































































































































































































































































































