以下内容整理自[【 Vue.js 官方文档】【 2.x 】](https://cn.vuejs.org/v2/guide/installation.html)


# Vue 内在

## 深入响应式原理

现在是时候深入一下了！

Vue 最独特的特性之一，是其非侵入性的响应式系统

* 数据模型仅仅是普通的 JavaScript 对象

* 而当你修改它们时，视图会进行更新

这使得状态管理非常简单直接，不过理解其工作原理同样重要，这样你可以避开一些常见的问题

### 如何追踪变化

> [【在 Vue Mastery 观看视频讲解】](https://www.vuemastery.com/courses/advanced-components/build-a-reactivity-system)

当你把一个普通的 JavaScript 对象传入 Vue 实例作为 `data` 选项

* Vue 将遍历此对象所有的 property

* 并使用 `Object.defineProperty` 把这些 property 全部转为[【 getter/setter 】](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Working_with_Objects#定义_getters_与_setters)

> `Object.defineProperty` 是 `ES5` 中一个无法 `shim` 的特性，这也就是 Vue 不支持 IE8 以及更低版本浏览器的原因

这些 `getter/setter` 对用户来说是不可见的，但是在内部它们让 Vue 能够追踪依赖，在 property 被访问和修改时通知变更

* 这里需要注意的是不同浏览器在控制台打印数据对象时对 getter/setter 的格式化并不同，所以建议安装[【 vue-devtools 】](https://github.com/vuejs/vue-devtools)来获取对检查数据更加友好的用户界面

每个组件实例都对应一个 `watcher` 实例

* 它会在组件渲染的过程中把 **`接触`** 过的数据 property 记录为依赖

* 之后当依赖项的 `setter` 触发时，会通知 `watcher` ，从而使它关联的组件重新渲染

![图片](https://cn.vuejs.org/images/data.png)

### 检测变化的注意事项

由于 JavaScript 的限制，Vue **`不能检测`** 数组和对象的变化

尽管如此我们还是有一些办法来回避这些限制并保证它们的响应性

#### 对于对象

Vue 无法检测 property 的添加或移除

由于 Vue 会在初始化实例时对 property 执行 `getter/setter` 转化，所以 property 必须在 `data` 对象上存在才能让 Vue 将它转换为响应式的

```js
var vm = new Vue({
  data:{
    a:1
  }
})
// `vm.a` 是响应式的

vm.b = 2
// `vm.b` 是非响应式的
```

对于已经创建的实例，Vue 不允许动态添加根级别的响应式 property

* 但是，可以使用 `Vue.set(object, propertyName, value)` 方法向嵌套对象添加响应式 property

例如，对于：

```js
Vue.set(vm.someObject, 'b', 2)
```

您还可以使用 `vm.$set` 实例方法，这也是全局 `Vue.set` 方法的别名：

```js
this.$set(this.someObject,'b',2)
```

有时你可能需要为已有对象赋值多个新 property ，比如使用 `Object.assign()` 或 `_.extend()`















































































































































