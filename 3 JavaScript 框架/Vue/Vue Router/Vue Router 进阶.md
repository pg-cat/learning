以下内容整理自[【 Vue Router 官方文档】](https://router.vuejs.org/zh/)

---

<!-- TOC -->

- [导航守卫](#导航守卫)
  - [全局前置守卫](#全局前置守卫)
  - [全局解析守卫](#全局解析守卫)
  - [全局后置钩子](#全局后置钩子)
  - [路由独享的守卫](#路由独享的守卫)
  - [组件内的守卫](#组件内的守卫)
  - [完整的导航解析流程](#完整的导航解析流程)
- [路由元信息](#路由元信息)
- [过渡动效](#过渡动效)
  - [单个路由的过渡](#单个路由的过渡)
  - [基于路由的动态过渡](#基于路由的动态过渡)
- [数据获取](#数据获取)
  - [导航完成后获取数据](#导航完成后获取数据)
  - [在导航完成前获取数据](#在导航完成前获取数据)
- [滚动行为](#滚动行为)
  - [异步滚动](#异步滚动)
- [路由懒加载](#路由懒加载)
  - [把组件按组分块](#把组件按组分块)

<!-- /TOC -->

## 导航守卫

> **`导航`** 表示路由正在发生改变

正如其名，`vue-router` 提供的导航守卫主要用来通过跳转或取消的方式守卫导航

有多种机会植入路由导航过程中：

* 全局的
* 单个路由独享的
* 组件级的

> 记住：**`参数`** 或 **`查询`** 的改变并不会触发 *`进入/离开的导航守卫`*

你可以通过[【观察 `$route` 对象】](https://router.vuejs.org/zh/guide/essentials/dynamic-matching.html#响应路由参数的变化)来应对这些变化，或使用 `beforeRouteUpdate` 的组件内守卫

### 全局前置守卫

你可以使用 `router.beforeEach` 注册一个全局前置守卫：

```js
const router = new VueRouter({ ... })

router.beforeEach((to, from, next) => {
  // ...
})
```

当一个导航触发时，全局前置守卫按照创建顺序调用

* 守卫是异步解析执行

* 此时导航在所有守卫 `resolve` 完之前一直处于 **`等待中`**

每个守卫方法接收三个参数：

* `to: Route`

  即将要进入的目标 **`路由对象`**

* `from: Route`

  当前导航正要离开的路由

* `next: Function`

  一定要调用该方法来 `resolve` 这个钩子

  执行效果依赖 `next` 方法的调用参数：

  * `next()`

    进行管道中的下一个钩子

    如果全部钩子执行完了，则导航的状态就是 **`confirmed (确认的)`**

  * next(false)

    中断当前的导航

    如果浏览器的 URL 改变了 (可能是用户手动或者浏览器后退按钮)，那么 URL 地址会重置到 `from` 路由对应的地址

  * `next('/')` 或者 `next({ path: '/' })`

    跳转到一个不同的地址

    当前的导航被中断，然后进行一个新的导航

    你可以向 `next` 传递任意位置对象，且允许设置诸如 `replace: true` 、`name: 'home'` 之类的选项，以及任何用在 `router-link` 的 `to prop` 或 `router.push` 中的选项

  * `next(error)`

    ( `2.4.0+` ) 如果传入 `next` 的参数是一个 `Error` 实例，则导航会被终止，且该错误会被传递给 `router.onError()` 注册过的回调

> 确保要调用 `next` 方法，否则钩子就不会被 `resolved`

### 全局解析守卫

> `2.5.0` 新增

在 `2.5.0+` 你可以用 `router.beforeResolve` 注册一个全局守卫

* 这和 `router.beforeEach` 类似

* 区别是在导航被确认之前，同时在所有组件内守卫和异步路由组件被解析之后，解析守卫就被调用

### 全局后置钩子

你也可以注册全局后置钩子，然而和守卫不同的是，这些钩子不会接受 `next` 函数也不会改变导航本身：

```js
router.afterEach((to, from) => {
  // ...
})
```

### 路由独享的守卫

你可以在路由配置上直接定义 `beforeEnter` 守卫：

```js
const router = new VueRouter({
  routes: [
    {
      path: '/foo',
      component: Foo,
      beforeEnter: (to, from, next) => {
        // ...
      }
    }
  ]
})
```

> 这些守卫与全局前置守卫的方法参数是一样的

### 组件内的守卫

最后，你可以在路由组件内直接定义以下路由导航守卫：

* `beforeRouteEnter`

  在渲染该组件的对应路由被 **`确认`** 前调用

  > 不能获取组件实例 `this`
  >> 因为当守卫执行前，组件实例还没被创建

* `beforeRouteUpdate` ( `2.2` 新增)

  在当前路由改变，但是该组件被复用时调用

  举例来说，对于一个带有动态参数的路径 `/foo/:id` ，在 `/foo/1` 和 `/foo/2` 之间跳转的时候

  由于会渲染同样的 `Foo` 组件，因此组件实例会被复用，而这个钩子就会在这个情况下被调用

  > 可以访问组件实例 `this`

* `beforeRouteLeave`

  导航离开该组件的对应路由时调用

  > 可以访问组件实例 `this`

```js
const Foo = {
  template: `...`,
  beforeRouteEnter (to, from, next) {
    // ...
  },
  beforeRouteUpdate (to, from, next) {
    // ...
  },
  beforeRouteLeave (to, from, next) {
    // ...
  }
}
```

`beforeRouteEnter` 守卫 不能 访问 `this` ，因为守卫在导航确认前被调用，因此即将登场的新组件还没被创建

* 不过，你可以通过传一个回调给 `next` 来访问组件实例

* 在导航被确认的时候执行回调，并且把组件实例作为回调方法的参数

```js
beforeRouteEnter (to, from, next) {
  next(vm => {
    // 通过 `vm` 访问组件实例
  })
}
```

> 注意 `beforeRouteEnter` 是支持给 `next` 传递回调的唯一守卫
>> 对于 `beforeRouteUpdate` 和 `beforeRouteLeave` 来说，`this` 已经可用了，所以不支持传递回调，因为没有必要了

```js
beforeRouteUpdate (to, from, next) {
  // just use `this`
  this.name = to.params.name
  next()
}
```

这个离开守卫通常用来禁止用户在还未保存修改前突然离开

* 该导航可以通过 `next(false)` 来取消

```js
beforeRouteLeave (to, from, next) {
  const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
  if (answer) {
    next()
  } else {
    next(false)
  }
}
```

### 完整的导航解析流程

* 导航被触发

* 在失活的组件里调用离开守卫

* 调用全局的 `beforeEach` 守卫

* 在重用的组件里调用 `beforeRouteUpdate` 守卫 ( `2.2+` )

* 在路由配置里调用 `beforeEnter`

* 解析异步路由组件

* 在被激活的组件里调用 `beforeRouteEnter`

* 调用全局的 `beforeResolve` 守卫 ( `2.5+` )

* 导航被确认

* 调用全局的 `afterEach` 钩子

* 触发 DOM 更新

* 用创建好的实例调用 `beforeRouteEnter` 守卫中传给 `next` 的回调函数

## 路由元信息

定义路由的时候可以配置 `meta` 字段：

```js
const router = new VueRouter({
  routes: [
    {
      path: '/foo',
      component: Foo,
      children: [
        {
          path: 'bar',
          component: Bar,
          // a meta field
          meta: { requiresAuth: true }
        }
      ]
    }
  ]
})
```

那么如何访问这个 `meta` 字段呢？

* 首先，我们称呼 `routes` 配置中的每个路由对象为 **`路由记录`**

  路由记录可以是嵌套的，因此，当一个路由匹配成功后，他可能匹配多个路由记录

  例如，根据上面的路由配置，`/foo/bar` 这个 URL 将会匹配父路由记录以及子路由记录

* 一个路由匹配到的所有路由记录会暴露为 `$route` 对象 (还有在导航守卫中的路由对象) 的 `$route.matched` 数组

  因此，我们需要遍历 `$route.matched` 来检查路由记录中的 `meta` 字段

下面例子展示在全局导航守卫中检查元字段：

```js
router.beforeEach((to, from, next) => {

  // 检测路由的 meta 对象中定义的字段是否为 true ，也就是说是否需要验证
  // 在前面定义了 meta: { requiresAuth: true } ，所以此处返回的条件是 true
  if (to.matched.some(record => record.meta.requiresAuth)) {

    // 此路由需要验证，请检查是否已登录
    // 如果没有，请重定向到登录页
    if (!auth.loggedIn()) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // 确保一定要调用 next()
  }
})
```

## 过渡动效

`<router-view>` 是基本的动态组件，所以我们可以用 `<transition>` 组件给它添加一些过渡效果：

```html
<transition>
  <router-view></router-view>
</transition>
```

> [【 Transition 的所有功能】](https://cn.vuejs.org/guide/transitions.html)在这里同样适用

### 单个路由的过渡

上面的用法会给所有路由设置一样的过渡效果，如果你想让每个路由组件有各自的过渡效果，可以在各路由组件内使用 `<transition>` 并设置不同的 `name`

```js
const Foo = {
  template: `
    <transition name="slide">
      <div class="foo">...</div>
    </transition>
  `
}

const Bar = {
  template: `
    <transition name="fade">
      <div class="bar">...</div>
    </transition>
  `
}
```

### 基于路由的动态过渡

还可以基于当前路由与目标路由的变化关系，动态设置过渡效果：

```html
<!-- 使用动态的 transition name -->
<transition :name="transitionName">
  <router-view></router-view>
</transition>
```

```js
// 接着在父组件内
// watch $route 决定使用哪种过渡
watch: {
  '$route' (to, from) {
    const toDepth = to.path.split('/').length
    const fromDepth = from.path.split('/').length
    this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
  }
}
```

> [【查看完整例子请移步这里】](https://github.com/vuejs/vue-router/blob/dev/examples/transitions/app.js)

## 数据获取

有时候，进入某个路由后，需要从服务器获取数据

* 例如，在渲染用户信息时，你需要从服务器获取用户的数据

我们可以通过两种方式来实现：

* 导航完成之后获取：

  先完成导航，然后在接下来的组件生命周期钩子中获取数据

  在数据获取期间显示 **`加载中`** 之类的指示

* 导航完成之前获取：

  导航完成前，在路由进入的守卫中获取数据，在数据获取成功后执行导航

从技术角度讲，两种方式都不错，就看你想要的用户体验是哪种

### 导航完成后获取数据

当你使用这种方式时，我们会马上导航和渲染组件，然后在组件的 `created` 钩子中获取数据

* 这让我们有机会在数据获取期间展示一个 `loading` 状态

* 还可以在不同视图间展示不同的 `loading` 状态

假设我们有一个 `Post` 组件，需要基于 `$route.params.id` 获取文章数据：

```html
<template>
  <div class="post">
    <div v-if="loading" class="loading">
      Loading...
    </div>

    <div v-if="error" class="error">
      {{ error }}
    </div>

    <div v-if="post" class="content">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>
```

```js
export default {
  data () {
    return {
      loading: false,
      post: null,
      error: null
    }
  },
  created () {
    // 组件创建完后获取数据，
    // 此时 data 已经被放入 watch 中监控了
    this.fetchData()
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      this.error = this.post = null
      this.loading = true

      // replace getPost with your data fetching util / API wrapper
      getPost(this.$route.params.id, (err, post) => {
        this.loading = false
        if (err) {
          this.error = err.toString()
        } else {
          this.post = post
        }
      })
    }
  }
}
```

### 在导航完成前获取数据

通过这种方式，我们在导航转入新的路由前获取数据

我们可以在接下来的组件的 `beforeRouteEnter` 守卫中获取数据，当数据获取成功后只调用 `next` 方法：

```js
export default {
  data () {
    return {
      post: null,
      error: null
    }
  },
  beforeRouteEnter (to, from, next) {
    // 组件路由第一次访问完成前获取数据
    getPost(to.params.id, (err, post) => {
      next(vm => vm.setData(err, post))
    })
  },
  // 路由改变前，组件就已经渲染完了
  // 逻辑稍稍不同
  beforeRouteUpdate (to, from, next) {
    this.post = null
    getPost(to.params.id, (err, post) => {
      this.setData(err, post)
      next()
    })
  },
  methods: {
    setData (err, post) {
      if (err) {
        this.error = err.toString()
      } else {
        this.post = post
      }
    }
  }
}
```

在为后面的视图获取数据时，用户会停留在当前的界面

* 因此建议在数据获取期间，显示一些进度条或者别的指示

* 如果数据获取失败，同样有必要展示一些全局的错误提醒

> 【问题】上例中的 `getPost()` 方法为什么需要写两个？
>> 也就是说：`beforeRouteUpdate` 在组件复用时会不会触发 `beforeRouteEnter` ？
>>> 注意：**`参数`** 或 **`查询`** 的改变并不会触发 **`进入/离开的导航守卫`**
> * `beforeRouteUpdate` 被触发时是子组件在变化，并不会触发 `beforeRouteEnter` 、`beforeRouteLeave`
> * 所以为了避免 **`子路由`** 被访问时数据不会再次获取的问题，才需要在 `beforeRouteUpdate` 中写上 `getPost()` 方法
> * [【示例：组件复用时的守卫】](https://github.com/pg-cat/learning/blob/master/3%20JavaScript%20%E6%A1%86%E6%9E%B6/Vue/Vue%20Router/test/组件复用时的守卫.html)

## 滚动行为

使用前端路由，当切换到新路由时，想要页面滚到顶部，或者是保持原先的滚动位置，就像重新加载页面那样

* `vue-router` 能做到，而且更好，它让你可以自定义路由切换时页面如何滚动

> 注意: 这个功能只在支持 `history.pushState` 的浏览器中可用

当创建一个 Router 实例，你可以提供一个 `scrollBehavior` 方法：

```js
const router = new VueRouter({
  routes: [...],
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
  }
})
```

`scrollBehavior` 方法接收 `to` 和 `from` 路由对象

* 第三个参数 `savedPosition` 当且仅当 `popstate` 导航 (通过浏览器的 **`前进/后退`** 按钮触发) 时才可用

这个方法返回滚动位置的对象信息，长这样：

* `{ x: number, y: number }`

* `{ selector: string, offset? : { x: number, y: number }}`

  `offset` 只在 `2.6.0+` 支持

如果返回一个 `falsy` (译者注：`falsy` 不是 `false` ，[【参考这里】](https://developer.mozilla.org/zh-CN/docs/Glossary/Falsy))的值，或者是一个空对象，那么不会发生滚动

例如，对于所有路由导航，简单地让页面滚动到顶部：

```js
scrollBehavior (to, from, savedPosition) {
  return { x: 0, y: 0 }
}
```

返回 `savedPosition` ，在按下 **`后退/前进`** 按钮时，就会像浏览器的原生表现那样：

```js
scrollBehavior (to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition
  } else {
    return { x: 0, y: 0 }
  }
}
```

如果你要模拟 **`滚动到锚点`** 的行为：

```js
scrollBehavior (to, from, savedPosition) {
  if (to.hash) {
    return {
      selector: to.hash
    }
  }
}
```

我们还可以利用[【路由元信息】](https://router.vuejs.org/zh/guide/advanced/meta.html)更细颗粒度地控制滚动

> [【查看完整例子请移步这里】](https://github.com/vuejs/vue-router/blob/dev/examples/scroll-behavior/app.js)

### 异步滚动

> `2.8.0` 新增

你也可以返回一个 `Promise` 来得出预期的位置描述：

```js
scrollBehavior (to, from, savedPosition) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ x: 0, y: 0 })
    }, 500)
  })
}
```

将其挂载到从页面级别的过渡组件的事件上，令其滚动行为和页面过渡一起良好运行是可能的

但是考虑到用例的多样性和复杂性，我们仅提供这个原始的接口，以支持不同用户场景的具体实现

## 路由懒加载

当打包构建应用时，JavaScript 包会变得非常大，影响页面加载

* 如果我们能把不同路由对应的组件分割成不同的代码块

* 然后当路由被访问的时候才加载对应组件，这样就更加高效了

结合 Vue 的[【异步组件】](https://cn.vuejs.org/v2/guide/components-dynamic-async.html#异步组件)和 Webpack 的[【代码分割功能】](https://doc.webpack-china.org/guides/code-splitting-async/#require-ensure-/)，轻松实现路由组件的懒加载

* 首先，可以将异步组件定义为返回一个 Promise 的工厂函数 (该函数返回的 `Promise` 应该 `resolve` 组件本身)：

```js
const Foo = () => Promise.resolve({ /* 组件定义对象 */ })
```

* 第二，在 `Webpack 2` 中，我们可以使用动态 `import` 语法来定义 **`代码分块点 (split point)`** ：

```js
import('./Foo.vue') // 返回 Promise
```

> 注意：如果您使用的是 `Babel` ，你将需要添加 `syntax-dynamic-import` 插件，才能使 `Babel` 可以正确地解析语法

结合这两者，这就是如何定义一个能够被 Webpack 自动代码分割的异步组件：

```js
const Foo = () => import('./Foo.vue')
```

在路由配置中什么都不需要改变，只需要像往常一样使用 `Foo` ：

```js
const router = new VueRouter({
  routes: [
    { path: '/foo', component: Foo }
  ]
})
```

### 把组件按组分块

有时候我们想把某个路由下的所有组件都打包在 **`同个异步块`** 中

* 只需要使用[【命名 chunk 】](https://webpack.js.org/guides/code-splitting-require/#chunkname)

  一个特殊的注释语法来提供 `chunk name` (需要 `Webpack > 2.4` )

```js
const Foo = () => import(/* webpackChunkName: "group-foo" */ './Foo.vue')
const Bar = () => import(/* webpackChunkName: "group-foo" */ './Bar.vue')
const Baz = () => import(/* webpackChunkName: "group-foo" */ './Baz.vue')
```

Webpack 会将任何一个异步模块与相同的块名称组合到相同的异步块中
