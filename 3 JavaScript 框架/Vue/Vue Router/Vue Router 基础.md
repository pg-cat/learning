以下内容整理自[【 Vue Router 官方文档】](https://router.vuejs.org/zh/)


# Vue Router

## 介绍

Vue Router 是[【 Vue.js 】](http://cn.vuejs.org/)官方的路由管理器

* 它和 Vue.js 的核心深度集成，让构建单页面应用变得易如反掌

包含的功能有：

* 嵌套的路由/视图表

* 模块化的、基于组件的路由配置

* 路由参数、查询、通配符

* 基于 Vue.js 过渡系统的视图过渡效果

* 细粒度的导航控制

* 带有自动激活的 CSS class 的链接

* HTML5 历史模式或 hash 模式，在 IE9 中自动降级

* 自定义的滚动条行为

现在开始[【起步】](https://router.vuejs.org/zh/guide/)或尝试一下我们的[【示例】](https://github.com/vuejs/vue-router/tree/dev/examples)吧

* 查看仓库的[【 README.md 】](https://github.com/vuejs/vue-router/)来运行它们

## 安装

### 直接下载 / CDN

[【直接下载：https://unpkg.com/vue-router/dist/vue-router.js 】](https://unpkg.com/vue-router/dist/vue-router.js)

[【 Unpkg.com 】](https://unpkg.com/)提供了基于 NPM 的 CDN 链接

* 此链接会一直指向在 NPM 发布的最新版本

* 你也可以像 `https://unpkg.com/vue-router@2.0.0/dist/vue-router.js` 这样指定 **`版本号`** 或者 `Tag`

在 Vue 后面加载 `vue-router` ，它会自动安装的：

```html
<script src="/path/to/vue.js"></script>
<script src="/path/to/vue-router.js"></script>
```

### NPM

```sh
npm install vue-router
```

如果在一个模块化工程中使用它，必须要通过 `Vue.use()` 明确地安装路由功能：

```js
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
```

> 如果使用全局的 `script` 标签，则无须如此 (手动安装)

### 构建开发版

如果你想使用最新的开发版，就得从 GitHub 上直接 clone，然后自己 build 一个 `vue-router`

```sh
git clone https://github.com/vuejs/vue-router.git node_modules/vue-router
cd node_modules/vue-router
npm install
npm run build
```

## 起步

> 注意：教程中的案例代码将使用[【 ES2015 】](https://github.com/lukehoban/es6features)来编写
>> 同时，所有的例子都将使用完整版的 Vue 以解析模板
>>> 更多细节请[【移步这里】](https://cn.vuejs.org/v2/guide/installation.html#运行时-编译器-vs-只包含运行时)

用 `Vue.js + Vue Router` 创建单页应用，是非常简单的

* 使用 Vue.js ，我们已经可以通过组合组件来组成应用程序

* 当你要把 Vue Router 添加进来，我们需要做的是：

  将 **`组件 (components)`** 映射到 **`路由 (routes)`**

  然后告诉 Vue Router 在哪里渲染它们

下面是个基本例子：

### HTML

```html
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>

<div id="app">
  <h1>Hello App!</h1>
  <p>
    <!-- 使用 router-link 组件来导航. -->
    <!-- 通过传入 `to` 属性指定链接. -->
    <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
    <router-link to="/foo">Go to Foo</router-link>
    <router-link to="/bar">Go to Bar</router-link>
  </p>
  <!-- 路由出口 -->
  <!-- 路由匹配到的组件将渲染在这里 -->
  <router-view></router-view>
</div>
```

### JavaScript

```js
// 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)

// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
  router
}).$mount('#app')

// 现在，应用已经启动了！
```

通过注入路由器，我们可以在任何组件内通过 `this.$router` 访问路由器，也可以通过 `this.$route` 访问当前路由：

```js
// Home.vue
export default {
  computed: {
    username() {
      // 我们很快就会看到 `params` 是什么
      return this.$route.params.username
    }
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
  }
}
```

该文档通篇都常使用 `router` 实例

* 留意一下 `this.$router` 和 `router` 使用起来完全一样

* 我们使用 `this.$router` 的原因是我们并不想在每个独立需要封装路由的组件中都导入路由

> 你可以看看这个[【在线例子】](https://jsfiddle.net/yyx990803/xgrjzsup/)

> 要注意的是：当 `<router-link>` 对应的路由匹配成功
>> 将自动设置 class 属性值 `.router-link-active`
>>> 查看[【 API 文档】](https://router.vuejs.org/zh/api/#router-link)学习更多相关内容

## 动态路由匹配

我们经常需要把某种模式匹配到的所有路由，全都映射到同个组件

* 例如，我们有一个 `User` 组件，对于所有 `ID` 各不相同的用户，都要使用这个组件来渲染

* 那么，我们可以在 `vue-router` 的路由路径中使用 **`动态路径参数 (dynamic segment)`** 来达到这个效果：

```js
const User = {
  template: '<div>User</div>'
}

const router = new VueRouter({
  routes: [
    // 动态路径参数 以冒号开头
    { path: '/user/:id', component: User }
  ]
})
```

现在呢，像 `/user/foo` 和 `/user/bar` 都将映射到相同的路由

一个 **`路径参数`** 使用冒号 `:` 标记

* 当匹配到一个路由时，参数值会被设置到 `this.$route.params` ，可以在每个组件内使用

* 于是，我们可以更新 `User` 的模板，输出当前用户的 `ID` ：

```js
const User = {
  template: '<div>User {{ $route.params.id }}</div>'
}
```

> 你可以看看这个[【在线例子】](https://jsfiddle.net/yyx990803/4xfa2f19/)

你可以在一个路由中设置多段 **`路径参数`** ，对应的值都会设置到 `$route.params` 中：

模式|匹配路径|`$route.params`
-|-|-
`/user/:username`|`/user/evan`|`{ username: 'evan' }`
`/user/:username/post/:post_id`|`/user/evan/post/123`|`{ username: 'evan', post_id: '123' }`

除了 `$route.params` 外，`$route` 对象还提供了其它有用的信息，例如，`$route.query` (如果 URL 中有查询参数)、`$route.hash` 等等

> 你可以查看[【 API 文档 】](https://router.vuejs.org/zh/api/#路由对象)的详细说明

### 响应路由参数的变化

提醒一下，当使用路由参数时，例如从 `/user/foo` 导航到 `/user/bar` ，**`原来的组件实例会被复用`**

* 因为两个路由都渲染同个组件，比起销毁再创建，复用则显得更加高效

* 不过，这也意味着 **`组件的生命周期钩子不会再被调用`**

复用组件时，想对路由参数的变化作出响应的话，你可以简单地 `watch` (监测变化) `$route` 对象：

```js
const User = {
  template: '...',
  watch: {
    '$route' (to, from) {
      // 对路由变化作出响应...
    }
  }
}
```

或者使用 `2.2` 中引入的 `beforeRouteUpdate` [【导航守卫】](https://router.vuejs.org/zh/guide/advanced/navigation-guards.html)：

```js
const User = {
  template: '...',
  beforeRouteUpdate (to, from, next) {
    // react to route changes...
    // don't forget to call next()
  }
}
```

### 捕获所有路由或 `404 Not found` 路由

常规参数只会匹配被 `/` 分隔的 URL 片段中的字符

如果想匹配 **`任意路径`** ，我们可以使用通配符 ( `*` )：

```js
{
  // 会匹配所有路径
  path: '*'
}
{
  // 会匹配以 `/user-` 开头的任意路径
  path: '/user-*'
}
```

当使用 **`通配符`** 路由时，请确保路由的顺序是正确的，也就是说含有 **`通配符`** 的路由应该放在最后

* 路由 `{ path: '*' }` 通常用于客户端 `404` 错误

* 如果你使用了 History 模式，请确保[【正确配置你的服务器】](https://router.vuejs.org/zh/guide/essentials/history-mode.html)

当使用一个通配符时，`$route.params` 内会自动添加一个名为 `pathMatch` 参数

它包含了 URL 通过通配符被匹配的部分：

```js
// 给出一个路由 { path: '/user-*' }
this.$router.push('/user-admin')
this.$route.params.pathMatch // 'admin'

// 给出一个路由 { path: '*' }
this.$router.push('/non-existing')
this.$route.params.pathMatch // '/non-existing'
```

### 高级匹配模式

`vue-router` 使用 `path-to-regexp` 作为路径匹配引擎，所以支持很多高级的匹配模式，例如：

* 可选的动态路径参数、匹配零个或多个、一个或多个，甚至是自定义正则匹配

* 查看它的[【文档】](https://github.com/pillarjs/path-to-regexp/tree/v1.7.0#parameters)学习高阶的路径匹配，还有[【这个例子】](https://github.com/vuejs/vue-router/blob/dev/examples/route-matching/app.js)展示 `vue-router` 怎么使用这类匹配

### 匹配优先级

有时候，同一个路径可以匹配多个路由，此时，匹配的优先级就按照路由的定义顺序：

**`谁先定义的，谁的优先级就最高`**

## 嵌套路由

实际生活中的应用界面，通常由多层嵌套的组件组合而成

同样地，URL 中各段动态路径也按某种结构对应嵌套的各层组件，例如：

```
/user/foo/profile                     /user/foo/posts
+------------------+                  +-----------------+
| User             |                  | User            |
| +--------------+ |                  | +-------------+ |
| | Profile      | |  +------------>  | | Posts       | |
| |              | |                  | |             | |
| +--------------+ |                  | +-------------+ |
+------------------+                  +-----------------+
```

借助 `vue-router` ，使用嵌套路由配置，就可以很简单地表达这种关系

接着上节创建的 app ：

```html
<div id="app">
  <router-view></router-view>
</div>
```

```js
const User = {
  template: '<div>User {{ $route.params.id }}</div>'
}

const router = new VueRouter({
  routes: [
    { path: '/user/:id', component: User }
  ]
})
```

这里的 `<router-view>` 是最顶层的出口，渲染最高级路由匹配到的组件

* 同样地，一个被渲染组件同样可以包含自己的嵌套 `<router-view>`

* 例如，在 `User` 组件的模板添加一个 `<router-view>` ：

```js
const User = {
  template: `
    <div class="user">
      <h2>User {{ $route.params.id }}</h2>
      <router-view></router-view>
    </div>
  `
}
```

要在嵌套的出口中渲染组件，需要在 `VueRouter` 的参数中使用 `children` 配置：

```js
const router = new VueRouter({
  routes: [
    { path: '/user/:id', component: User,
      children: [
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: 'profile',
          component: UserProfile
        },
        {
          // 当 /user/:id/posts 匹配成功
          // UserPosts 会被渲染在 User 的 <router-view> 中
          path: 'posts',
          component: UserPosts
        }
      ]
    }
  ]
})
```

> 要注意，以 `/` 开头的嵌套路径会被当作根路径
>> 这让你充分的使用嵌套组件而无须设置嵌套的路径

你会发现，`children` 配置就是像 `routes` 配置一样的路由配置数组，所以呢，你可以嵌套多层路由

* 此时，基于上面的配置，当你访问 `/user/foo` 时，`User` 的出口是不会渲染任何东西，这是因为没有匹配到合适的子路由

* 如果你想要渲染点什么，可以提供一个 **`空的`** 子路由：

```js
const router = new VueRouter({
  routes: [
    {
      path: '/user/:id', component: User,
      children: [
        // 当 /user/:id 匹配成功，
        // UserHome 会被渲染在 User 的 <router-view> 中
        { path: '', component: UserHome },

        // ...其他子路由
      ]
    }
  ]
})
```

> 提供以上案例的可运行代码请[【移步这里】](https://jsfiddle.net/yyx990803/L7hscd8h/)

## 编程式的导航

除了使用 `<router-link>` 创建 `a` 标签来定义导航链接，我们还可以借助 `router` 的实例方法，通过编写代码来实现：

### `router.push(location, onComplete?, onAbort?)`

> 注意：在 Vue 实例内部，你可以通过 `$router` 访问路由实例
>> 因此你可以调用 `this.$router.push`

想要导航到不同的 URL ，则使用 `router.push` 方法

* 这个方法会向 `history` 栈添加一个新的记录

  所以，当用户点击浏览器后退按钮时，则回到之前的 URL

* 当你点击 `<router-link>` 时，这个方法会在内部调用

  所以说，点击 `<router-link :to="...">` 等同于调用 `router.push(...)`

声明式|编程式
-|-
`<router-link :to="...">`|`router.push(...)`

该方法的参数可以是一个字符串路径，或者一个描述地址的对象，例如：

```js
// 字符串
router.push('home')

// 对象
router.push({ path: 'home' })

// 命名的路由
router.push({ name: 'user', params: { userId: '123' }})

// 带查询参数，变成 /register?plan=private
router.push({ path: 'register', query: { plan: 'private' }})
```

> 注意：如果提供了 `path` ，`params` 会被忽略，上述例子中的 `query` 并不属于这种情况

取而代之的是下面例子的做法，你需要提供路由的 `name` 或手写完整的带有参数的 `path` ：

```js
const userId = '123'
router.push({ name: 'user', params: { userId }}) // -> /user/123
router.push({ path: `/user/${userId}` }) // -> /user/123
// 这里的 params 不生效
router.push({ path: '/user', params: { userId }}) // -> /user
```

> 同样的规则也适用于 `router-link` 组件的 `to` 属性

在 `2.2.0+` ，可选的在 `router.push` 或 `router.replace` 中提供 `onComplete` 和 `onAbort` 回调作为第二个和第三个参数

这些回调将会在以下情况之一的时候进行相应的调用

* 导航成功完成 (在所有的异步钩子被解析之后)

* 导航终止 (导航到相同的路由、或在当前导航完成之前导航到另一个不同的路由)

> 在 `3.1.0+` ，可以省略第二个和第三个参数，此时如果支持 `Promise` ，`router.push` 或 `router.replace` 将返回一个 `Promise`

> 注意：如果目的地和当前路由相同，只有参数发生了改变 (比如从一个用户资料到另一个 `/users/1 -> /users/2` )
>> 你需要使用 `beforeRouteUpdate` 来响应这个变化 (比如抓取用户信息)

### `router.replace(location, onComplete?, onAbort?)`

跟 `router.push` 很像

* 唯一的不同就是，它不会向 `history` 添加新记录

* 而是跟它的方法名一样，替换掉当前的 `history` 记录

声明式|编程式
-|-
`<router-link :to="..." replace>`|`router.replace(...)`

### `router.go(n)`

这个方法的参数是一个整数，意思是在 `history` 记录中向前或者后退多少步，类似 `window.history.go(n)`

```js
// 在浏览器记录中前进一步，等同于 history.forward()
router.go(1)

// 后退一步记录，等同于 history.back()
router.go(-1)

// 前进 3 步记录
router.go(3)

// 如果 history 记录不够用，那就默默地失败呗
router.go(-100)
router.go(100)
```

### 操作 `History`

你也许注意到 `router.push` 、`router.replace` 和 `router.go` 跟[【 `window.history.pushState` 、`window.history.replaceState` 和 `window.history.go` 】](https://developer.mozilla.org/en-US/docs/Web/API/History)好像， 实际上它们确实是效仿 `window.history` API 的

* 因此，如果你已经熟悉[【 Browser History APIs 】](https://developer.mozilla.org/en-US/docs/Web/API/History_API)，那么在 Vue Router 中操作 `history` 就是超级简单的

* 还有值得提及的，Vue Router 的导航方法 ( `push` 、`replace` 、`go` ) 在各类路由模式 ( `history` 、`hash` 和 `abstract` ) 下表现一致

## 命名路由


















































































































































































































































































































































































































