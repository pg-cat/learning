以下内容整理自[【 Vuex 官方文档】](https://vuex.vuejs.org/zh/)


# Vuex

## Vuex 是什么？

Vuex 是一个专为 Vue.js 应用程序开发的 **`状态管理模式`**

* 它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化

* Vuex 也集成到 Vue 的官方调试工具[【 devtools extension 】](https://github.com/vuejs/vue-devtools)，提供了诸如零配置的 `time-travel` 调试、状态快照导入导出等高级调试功能

### 什么是 **`状态管理模式`** ？

让我们从一个简单的 Vue 计数应用开始：

```js
new Vue({
  // state
  data () {
    return {
      count: 0
    }
  },

  // view
  template: `
    <div>{{ count }}</div>
  `,

  // actions
  methods: {
    increment () {
      this.count++
    }
  }
})
```

这个状态自管理应用包含以下几个部分：

* `state` 驱动应用的数据源
* `view` 以声明方式将 `state` 映射到视图
* `actions` 响应在 `view` 上的用户输入导致的状态变化

以下是一个表示 **`单向数据流`** 理念的简单示意：

![图片](https://vuex.vuejs.org/flow.png)

但是，当我们的应用遇到多个组件共享状态时，单向数据流的简洁性很容易被破坏：

* 多个视图依赖于同一状态

  传参的方法对于多层嵌套的组件将会非常繁琐，并且对于兄弟组件间的状态传递无能为力

* 来自不同视图的行为需要变更同一状态

  我们经常会采用父子组件直接引用或者通过事件来变更和同步状态的多份拷贝

以上的这些模式非常脆弱，通常会导致无法维护的代码

因此，我们为什么不把组件的共享状态抽取出来，以一个全局单例模式管理呢？

在这种模式下，我们的组件树构成了一个巨大的 **`视图`** ，不管在树的哪个位置，任何组件都能获取状态或者触发行为！

* 通过定义和隔离状态管理中的各种概念，并通过强制规则维持视图和状态间的独立性，我们的代码将会变得更结构化且易维护

* 这就是 Vuex 背后的基本思想，借鉴了[【 Flux 】](https://facebook.github.io/flux/docs/overview)、[【 Redux 】](http://redux.js.org/)和[【 The Elm Architecture 】](https://guide.elm-lang.org/architecture/)

* 与其他模式不同的是，Vuex 是专门为 Vue.js 设计的状态管理库，以利用 Vue.js 的细粒度数据响应机制来进行高效的状态更新

如果你想交互式地学习 Vuex，可以看这个[【 Scrimba 上的 Vuex 课程】](https://scrimba.com/g/gvuex)，它将录屏和代码试验场混合在了一起，你可以随时暂停并尝试

![图片](https://vuex.vuejs.org/vuex.png)

什么情况下我应该使用 Vuex ？

这需要对短期和长期效益进行权衡

Vuex 可以帮助我们管理共享状态，并附带了更多的概念和框架

* 如果您不打算开发大型单页应用，使用 Vuex 可能是繁琐冗余的

  如果您的应用够简单，您最好不要使用 Vuex

  一个简单的[【 store 模式】](https://cn.vuejs.org/v2/guide/state-management.html#简单状态管理起步使用)就足够您所需了

* 但是，如果您需要构建一个中大型单页应用，您很可能会考虑如何更好地在组件外部管理状态，Vuex 将会成为自然而然的选择

  引用 `Redux` 的作者 `Dan Abramov` 的话说就是：**`Flux 架构就像眼镜：您自会知道什么时候需要它`**

## 安装

### 直接下载 / CDN 引用

[【直接下载：https://unpkg.com/vuex】](https://unpkg.com/vuex)

[【 Unpkg.com 】](https://unpkg.com/)提供了基于 `NPM` 的 `CDN` 链接，并且此链接会一直指向 NPM 上发布的最新版本

* 您也可以通过 `https://unpkg.com/vuex@2.0.0` 这样的方式指定特定的版本

在 Vue 之后引入 `vuex` 会进行自动安装：

```html
<script src="/path/to/vue.js"></script>
<script src="/path/to/vuex.js"></script>
```

#### NPM

```sh
npm install vuex --save
```

#### Yarn

```sh
yarn add vuex
```

在一个模块化的打包系统中，您必须显式地通过 `Vue.use()` 来安装 Vuex ：

```js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
```

> 当使用全局 script 标签引用 Vuex 时，不需要以上安装过程

### Promise

Vuex 依赖[【 Promise 】](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Using_promises)

> 如果你支持的浏览器并没有实现 Promise (比如 IE )，那么你可以使用一个 polyfill 的库，例如[【 es6-promise 】](https://github.com/stefanpenner/es6-promise)

你可以通过 CDN 将其引入：

```html
<script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.auto.js"></script>
```

然后 `window.Promise` 会自动可用

如果你喜欢使用诸如 `npm` 或 `Yarn` 等包管理器，可以按照下列方式执行安装：

```sh
npm install es6-promise --save # npm
yarn add es6-promise # Yarn
```

或者更进一步，将下列代码添加到你使用 Vuex 之前的一个地方：

```js
import 'es6-promise/auto'
```

### 自己构建

如果需要使用 dev 分支下的最新版本，您可以直接从 GitHub 上克隆代码并自己构建

```sh
git clone https://github.com/vuejs/vuex.git node_modules/vuex
cd node_modules/vuex
npm install
npm run build
```

## 开始

> [【在 Scrimba 上尝试这节课】](https://scrimba.com/p/pnyzgAP/cMPa2Uk)

每一个 Vuex 应用的核心就是 **`store (仓库)`**

* `store` 基本上就是一个容器，它包含着你的应用中大部分的 **`状态 (state)`**

Vuex 和单纯的全局对象有以下两点不同：

* Vuex 的状态存储是响应式的

  当 Vue 组件从 `store` 中读取状态的时候，若 `store` 中的状态发生变化，那么相应的组件也会相应地得到高效更新

* 你不能直接改变 `store` 中的状态

  改变 `store` 中的状态的唯一途径就是显式地提交 (commit) mutation

  这样使得我们可以方便地跟踪每一个状态的变化，从而让我们能够实现一些工具帮助我们更好地了解我们的应用

### 最简单的 Store

> 提示：我们将在后续的文档示例代码中使用 `ES2015` 语法
>> [【如果你还没能掌握 ES2015 ，你得抓紧了！】](https://babeljs.io/docs/learn-es2015/)

[【安装 Vuex 】](https://vuex.vuejs.org/zh/installation.html)之后，让我们来创建一个 `store`

创建过程仅需要提供一个初始 `state` 对象和一些 `mutation` ：

```js
import Vue from 'vue'
import Vuex from 'vuex'

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})
```

现在，你可以通过 `store.state` 来获取状态对象，以及通过 `store.commit` 方法触发状态变更：

```js
store.commit('increment')

console.log(store.state.count) // -> 1
```

为了在 Vue 组件中访问 `this.$store` property ，你需要为 Vue 实例提供创建好的 `store`

Vuex 提供了一个从根组件向所有子组件，以 `store` 选项的方式 **`注入`** 该 `store` 的机制：

```js
new Vue({
  el: '#app',
  store: store,
})
```

> 提示：如果使用 ES6，你也可以以 ES6 对象的 property 简写 (用在对象某个 property 的 `key` 和被传入的变量同名时)

```js
// ES6 简写
new Vue({
  el: '#app',
  store
})
```

现在我们可以从组件的方法提交一个变更：

```js
methods: {
  increment() {
    this.$store.commit('increment')
    console.log(this.$store.state.count)
  }
}
```

再次强调，我们通过提交 `mutation` 的方式，而非直接改变 `store.state.count` ，是因为我们想要更明确地追踪到状态的变化

* 这个简单的约定能够让你的意图更加明显，这样你在阅读代码的时候能更容易地解读应用内部的状态改变

* 此外，这样也让我们有机会去实现一些能记录每次状态改变，保存状态快照的调试工具

* 有了它，我们甚至可以实现如时间穿梭般的调试体验

由于 `store` 中的状态是响应式的，在组件中调用 `store` 中的状态简单到仅需要在计算属性中返回即可

* 触发变化也仅仅是在组件的 `methods` 中提交 `mutation`

> 这是一个[【最基本的 Vuex 记数应用】](https://jsfiddle.net/n9jmu5v7/1269/)示例

> 以下是核心概念部分

## State

### 单一状态树

> [【在 Scrimba 上尝试这节课】](https://scrimba.com/p/pnyzgAP/cWw3Zhb)

Vuex 使用 **`单一状态树`**

* 用一个对象就包含了全部的应用层级状态

* 至此它便作为一个 **`唯一数据源 (SSOT)`** 而存在

* 这也意味着，每个应用将仅仅包含一个 `store` 实例

* 单一状态树让我们能够直接地定位任一特定的状态片段，在调试的过程中也能轻易地取得整个当前应用状态的快照

> 单状态树和模块化并不冲突
>> 在后面的章节里我们会讨论如何将状态和状态变更事件分布到各个子模块中

存储在 Vuex 中的数据和 Vue 实例中的 `data` 遵循相同的规则，例如状态对象必须是纯粹 (plain) 的

* [【参考：Vue#data 】](https://cn.vuejs.org/v2/api/#data)

### 在 Vue 组件中获得 Vuex 状态

那么我们如何在 Vue 组件中展示状态呢？

由于 Vuex 的状态存储是响应式的，从 `store` 实例中读取状态最简单的方法就是在计算属性中返回某个状态：

```js
// 创建一个 Counter 组件
const Counter = {
  template: `<div>{{ count }}</div>`,
  computed: {
    count () {
      return store.state.count
    }
  }
}
```

每当 `store.state.count` 变化的时候, 都会重新求取计算属性，并且触发更新相关联的 DOM

* 然而，这种模式导致组件依赖全局状态单例

  在模块化的构建系统中，在每个需要使用 `state` 的组件中需要频繁地导入，并且在测试组件时需要模拟状态

* Vuex 通过 `store` 选项，提供了一种机制将状态从根组件 **`注入`** 到每一个子组件中（需调用 `Vue.use(Vuex)` ）：

```js
const app = new Vue({
  el: '#app',
  // 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件
  store,
  components: { Counter },
  template: `
    <div class="app">
      <counter></counter>
    </div>
  `
})
```

通过在根实例中注册 `store` 选项，该 `store` 实例会注入到根组件下的所有子组件中，且子组件能通过 `this.$store` 访问到

让我们更新下 `Counter` 的实现：

```js
const Counter = {
  template: `<div>{{ count }}</div>`,
  computed: {
    count () {
      return this.$store.state.count
    }
  }
}
```

### mapState 辅助函数

> [【在 Scrimba 上尝试这节课】](https://scrimba.com/p/pnyzgAP/c8Pz7BSK)

当一个组件需要获取多个状态的时候，将这些状态都声明为计算属性会有些重复和冗余

为了解决这个问题，我们可以使用 `mapState` 辅助函数帮助我们生成计算属性，让你少按几次键：

```js
// 在单独构建的版本中辅助函数为 Vuex.mapState
import { mapState } from 'vuex'

export default {
  // ...
  computed: mapState({
    // 箭头函数可使代码更简练
    count: state => state.count,

    // 传字符串参数 'count' 等同于 `state => state.count`
    countAlias: 'count',

    // 为了能够使用 `this` 获取局部状态，必须使用常规函数
    countPlusLocalState (state) {
      return state.count + this.localCount
    }
  })
}
```






































































































