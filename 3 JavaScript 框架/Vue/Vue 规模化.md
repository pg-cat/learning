以下内容整理自[【 Vue.js 官方文档】【 2.x 】](https://cn.vuejs.org/v2/guide/installation.html)


# Vue 规模化

## 路由

### 官方路由

对于大多数单页面应用，都推荐使用官方支持的[【 vue-router 库】](https://github.com/vuejs/vue-router)

> 更多细节可以移步[【 vue-router 文档】](https://router.vuejs.org/)

### 从零开始简单的路由

如果你只需要非常简单的路由而不想引入一个功能完整的路由库，可以像这样动态渲染一个页面级的组件：

```js
const NotFound = { template: '<p>Page not found</p>' }
const Home = { template: '<p>home page</p>' }
const About = { template: '<p>about page</p>' }

const routes = {
  '/': Home,
  '/about': About
}

new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  render (h) { return h(this.ViewComponent) }
})
```

### 整合第三方路由

如果你有更偏爱的第三方路由，如[【 Page.js 】](https://github.com/visionmedia/page.js)或者[【 Director 】](https://github.com/flatiron/director)，整合起来也[【一样简单】](https://github.com/chrisvfritz/vue-2.0-simple-routing-example/compare/master...pagejs)

> 这里有[【一个使用了 Page.js 的完整示例】](https://github.com/chrisvfritz/vue-2.0-simple-routing-example/tree/pagejs)

## 状态管理

### 类 Flux 状态管理的官方实现

由于状态零散地分布在许多组件和组件之间的交互中，大型应用复杂度也经常逐渐增长

* 为了解决这个问题，Vue 提供[【 vuex 】](https://github.com/vuejs/vuex)

    我们有受到 `Elm` 启发的状态管理库

* vuex 甚至集成到[【 vue-devtools 】](https://github.com/vuejs/vue-devtools)，无需配置即可进行[【时光旅行调试 (time travel debugging)】](https://raw.githubusercontent.com/vuejs/vue-devtools/master/media/demo.gif)

> [【在 Vue Mastery 观看视频讲解】](https://www.vuemastery.com/courses/mastering-vuex/intro-to-vuex/)

#### React 的开发者请参考以下信息

如果你是来自 React 的开发者，你可能会对 `Vuex` 和[【 Redux 】](https://github.com/reactjs/redux)间的差异表示关注

* `Redux` 是 React 生态环境中最流行的 `Flux` 实现

  `Redux` 事实上无法感知视图层，所以它能够轻松的通过一些[【简单绑定】](https://classic.yarnpkg.com/en/packages?q=redux%20vue&p=1)和 Vue 一起使用

* `Vuex` 区别在于它是一个专门为 Vue 应用所设计

  这使得它能够更好地和 Vue 进行整合，同时提供简洁的 API 和改善过的开发体验

### 简单状态管理起步使用

经常被忽略的是，Vue 应用中原始 `data` 对象的实际来源

* 当访问数据对象时，一个 Vue 实例只是简单的代理访问

所以，如果你有一处需要被多个实例间共享的状态，可以简单地通过维护一份数据来实现共享：

```js
var sourceOfTruth = {}

var vmA = new Vue({
  data: sourceOfTruth
})

var vmB = new Vue({
  data: sourceOfTruth
})
```
















































































































































































































































































