以下内容整理自[【 Vue.js 官方文档】【 2.x 】](https://cn.vuejs.org/v2/guide/installation.html)


# Vue 可复用性 & 组合

## 混入

### 基础

混入 (mixin) 提供了一种非常灵活的方式，来分发 Vue 组件中的可复用功能

* 一个混入对象可以包含任意组件选项

* 当组件使用混入对象时，所有混入对象的选项将被 **`混合`** 进入该组件本身的选项

```js
// 定义一个混入对象
var myMixin = {
  created: function () {
    this.hello()
  },
  methods: {
    hello: function () {
      console.log('hello from mixin!')
    }
  }
}

// 定义一个使用混入对象的组件
var Component = Vue.extend({
  mixins: [myMixin]
})

var component = new Component() // => "hello from mixin!"
```

### 选项合并

* 当组件和混入对象含有同名选项时，这些选项将以恰当的方式进行 **`合并`**

  比如，数据对象在内部会进行递归合并，并在发生冲突时以组件数据优先：

```js
var mixin = {
  data: function () {
    return {
      message: 'hello',
      foo: 'abc'
    }
  }
}

new Vue({
  mixins: [mixin],
  data: function () {
    return {
      message: 'goodbye',
      bar: 'def'
    }
  },
  created: function () {
    console.log(this.$data)
    // => { message: "goodbye", foo: "abc", bar: "def" }
  }
})
```

* 同名钩子函数将合并为一个数组，因此都将被调用

  另外，混入对象的钩子将在组件自身钩子 **`之前调用`** ：

```js
var mixin = {
  created: function () {
    console.log('混入对象的钩子被调用')
  }
}

new Vue({
  mixins: [mixin],
  created: function () {
    console.log('组件钩子被调用')
  }
})

// => "混入对象的钩子被调用"
// => "组件钩子被调用"
```

* 值为对象的选项，例如 `methods` 、`components` 和 `directives` ，将被合并为同一个对象

  两个对象键名冲突时，取组件对象的键值对：

```js
var mixin = {
  methods: {
    foo: function () {
      console.log('foo')
    },
    conflicting: function () {
      console.log('from mixin')
    }
  }
}

var vm = new Vue({
  mixins: [mixin],
  methods: {
    bar: function () {
      console.log('bar')
    },
    conflicting: function () {
      console.log('from self')
    }
  }
})

vm.foo() // => "foo"
vm.bar() // => "bar"
vm.conflicting() // => "from self"
```

> 注意：`Vue.extend()` 也使用同样的策略进行合并

### 全局混入

混入也可以进行全局注册，但使用时格外小心！

* 一旦使用全局混入，它将影响 **`每一个`** 之后创建的 Vue 实例

* 使用恰当时，这可以用来为自定义选项注入处理逻辑

```js
// 为自定义的选项 'myOption' 注入一个处理器。
Vue.mixin({
  created: function () {
    var myOption = this.$options.myOption
    if (myOption) {
      console.log(myOption)
    }
  }
})

new Vue({
  myOption: 'hello!'
})
// => "hello!"
```

> 请谨慎使用全局混入，因为它会影响每个单独创建的 Vue 实例 (包括第三方组件)
> * 大多数情况下，只应当应用于自定义选项，就像上面示例一样
>> 推荐将其作为[【插件】](https://cn.vuejs.org/v2/guide/plugins.html)发布，以避免重复应用混入

### 自定义选项合并策略

自定义选项将使用默认策略，即简单地覆盖已有值

如果想让自定义选项以自定义逻辑合并，可以向 `Vue.config.optionMergeStrategies` 添加一个函数：

```js
Vue.config.optionMergeStrategies.myOption = function (toVal, fromVal) {
  // 返回合并后的值
}
```

对于多数值为对象的选项，可以使用与 `methods` 相同的合并策略：

```js
var strategies = Vue.config.optionMergeStrategies
strategies.myOption = strategies.methods
```

可以在[【 Vuex 1.x 】](https://github.com/vuejs/vuex)的混入策略里找到一个更高级的例子：

```js
const merge = Vue.config.optionMergeStrategies.computed
Vue.config.optionMergeStrategies.vuex = function (toVal, fromVal) {
  if (!toVal) return fromVal
  if (!fromVal) return toVal
  return {
    getters: merge(toVal.getters, fromVal.getters),
    state: merge(toVal.state, fromVal.state),
    actions: merge(toVal.actions, fromVal.actions)
  }
}
```

## 自定义指令

### 简介

> [【观看Vue学校的免费视频课程】](https://vueschool.io/lessons/create-vuejs-directive?friend=vuejs)

除了核心功能默认内置的指令 ( `v-model` 和 `v-show` )，Vue 也允许注册自定义指令

> 注意：在 `Vue 2.0` 中，代码复用和抽象的主要形式是组件

然而，有的情况下，你仍然需要对普通 DOM 元素进行底层操作，这时候就会用到自定义指令

举个聚焦输入框的例子，如下：

[【示例效果请点击查看】](https://cn.vuejs.org/v2/guide/custom-directive.html#简介)

当页面加载时，该元素将获得焦点 (注意：`autofocus` 在移动版 `Safari` 上不工作)

* 事实上，只要你在打开这个页面后还没点击过任何内容，这个输入框就应当还是处于聚焦状态

* 现在让我们用指令来实现这个功能：

```js
// 注册一个全局自定义指令 `v-focus`
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})
```

如果想注册局部指令，组件中也接受一个 `directives` 的选项：

```js
directives: {
  focus: {
    // 指令的定义
    inserted: function (el) {
      el.focus()
    }
  }
}
```

然后你可以在模板中任何元素上使用新的 `v-focus` property，如下：

```html
<input v-focus>
```
`
### 钩子函数

一个指令定义对象可以提供如下几个钩子函数 (均为可选)：

* `bind`

  只调用一次，指令第一次绑定到元素时调用

  在这里可以进行一次性的初始化设置

* `inserted`

  被绑定元素插入父节点时调用

  > 仅保证父节点存在，但不一定已被插入文档中

* update

  所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前

  指令的值可能发生了改变，也可能没有

  但是你可以通过比较更新前后的值来忽略不必要的模板更新

* componentUpdated

  指令所在组件的 VNode 及其子 VNode 全部更新后调用

* unbind

  只调用一次，指令与元素解绑时调用

接下来我们来看一下钩子函数的参数 (即 `el` 、`binding` 、`vnode` 和 `oldVnode` )

### 钩子函数参数

指令钩子函数会被传入以下参数：

* `el`

  指令所绑定的元素，可以用来直接操作 DOM

* `binding`

  一个对象，包含以下 property ：

  * `name` 指令名，不包括 `v-` 前缀

  * `value` 指令的绑定值

    例如：`v-my-directive="1 + 1"` 中，绑定值为 `2`

  * `oldValue` 指令绑定的前一个值

    仅在 `update` 和 `componentUpdated` 钩子中可用

    > 无论值是否改变都可用

  * `expression` 字符串形式的指令表达式

    例如 `v-my-directive="1 + 1"` 中，表达式为 `"1 + 1"`

  * `arg` 传给指令的参数，可选

    例如 `v-my-directive:foo` 中，参数为 `"foo"`

  * `modifiers` 一个包含修饰符的对象

    例如：`v-my-directive.foo.bar` 中，修饰符对象为 `{ foo: true, bar: true }`

* `vnode`

  Vue 编译生成的虚拟节点

  移步[【 VNode API 】](https://cn.vuejs.org/v2/api/#VNode-接口)来了解更多详情

* `oldVnode`

  上一个虚拟节点，仅在 `update` 和 `componentUpdated` 钩子中可用

> 除了 `el` 之外，其它参数都应该是只读的，切勿进行修改
>> 如果需要在钩子之间共享数据，建议通过元素的 `dataset` 来进行

这是一个使用了这些 property 的自定义钩子样例：

```html
<div id="hook-arguments-example" v-demo:foo.a.b="message"></div>
```

```js
Vue.directive('demo', {
  bind: function (el, binding, vnode) {
    var s = JSON.stringify
    el.innerHTML =
      'name: '       + s(binding.name) + '<br>' +
      'value: '      + s(binding.value) + '<br>' +
      'expression: ' + s(binding.expression) + '<br>' +
      'argument: '   + s(binding.arg) + '<br>' +
      'modifiers: '  + s(binding.modifiers) + '<br>' +
      'vnode keys: ' + Object.keys(vnode).join(', ')
  }
})

new Vue({
  el: '#hook-arguments-example',
  data: {
    message: 'hello!'
  }
})
```

```
name: "demo"
value: "hello!"
expression: "message"
argument: "foo"
modifiers: {"a":true,"b":true}
vnode keys: tag, data, children, text, elm, ns, context, fnContext, fnOptions, fnScopeId, key, componentOptions, componentInstance, parent, raw, isStatic, isRootInsert, isComment, isCloned, isOnce, asyncFactory, asyncMeta, isAsyncPlaceholder
```

#### 动态指令参数

指令的参数可以是动态的






































































































































































































































































































































































