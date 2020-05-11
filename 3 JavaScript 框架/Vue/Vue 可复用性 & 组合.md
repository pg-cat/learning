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

* `update`

  所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前

  指令的值可能发生了改变，也可能没有

  但是你可以通过比较更新前后的值来忽略不必要的模板更新

* `componentUpdated`

  指令所在组件的 VNode 及其子 VNode 全部更新后调用

* `unbind`

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

例如，在 `v-mydirective:[argument]="value"` 中，`argument` 参数可以根据组件实例数据进行更新！

* 这使得自定义指令可以在应用中被灵活使用

例如你想要创建一个自定义指令，用来通过固定布局将元素固定在页面上

* 我们可以像这样创建一个通过指令值来更新竖直位置像素值的自定义指令：

```html
<div id="baseexample">
  <p>Scroll down the page</p>
  <p v-pin="200">Stick me 200px from the top of the page</p>
</div>
```

```js
Vue.directive('pin', {
  bind: function (el, binding, vnode) {
    el.style.position = 'fixed'
    el.style.top = binding.value + 'px'
  }
})

new Vue({
  el: '#baseexample'
})
```

这会把该元素固定在距离页面顶部 `200` 像素的位置

但如果场景是我们需要把元素固定在左侧而不是顶部又该怎么办呢？

这时使用动态参数就可以非常方便地根据每个组件实例来进行更新：

```html
<div id="dynamicexample">
  <h3>Scroll down inside this section ↓</h3>
  <p v-pin:[direction]="200">I am pinned onto the page at 200px to the left.</p>
</div>
```

```js
Vue.directive('pin', {
  bind: function (el, binding, vnode) {
    el.style.position = 'fixed'
    var s = (binding.arg == 'left' ? 'left' : 'top')
    el.style[s] = binding.value + 'px'
  }
})

new Vue({
  el: '#dynamicexample',
  data: function () {
    return {
      direction: 'left'
    }
  }
})
```

[【示例效果请点击查看】](https://cn.vuejs.org/v2/guide/custom-directive.html#动态指令参数)

这样这个自定义指令现在的灵活性就足以支持一些不同的用例了

### 函数简写

在很多时候，你可能想在 `bind` 和 `update` 时触发相同行为，而不关心其它的钩子

比如这样写：

```js
Vue.directive('color-swatch', function (el, binding) {
  el.style.backgroundColor = binding.value
})
```

### 对象字面量

如果指令需要多个值，可以传入一个 JavaScript 对象字面量

> 记住，指令函数能够接受所有合法的 JavaScript 表达式

```html
<div v-demo="{ color: 'white', text: 'hello!' }"></div>
```

```js
Vue.directive('demo', function (el, binding) {
  console.log(binding.value.color) // => "white"
  console.log(binding.value.text)  // => "hello!"
})
```

## 渲染函数 & JSX

### 基础

Vue 推荐在绝大多数情况下使用模板来创建你的 HTML

* 然而在一些场景中，你真的需要 JavaScript 的完全编程的能力

* 这时你可以用 **`渲染函数`** ，它比模板更接近编译器

让我们深入一个简单的例子，这个例子里 `render` 函数很实用

* 假设我们要生成一些带锚点的标题：

```html
<h1>
  <a name="hello-world" href="#hello-world">
    Hello world!
  </a>
</h1>
```

对于上面的 HTML，你决定这样定义组件接口：

```html
<anchored-heading :level="1">Hello world!</anchored-heading>
```

当开始写一个只能通过 `level` prop 动态生成标题 (heading) 的组件时，你可能很快想到这样实现：

```js
<script type="text/x-template" id="anchored-heading-template">
  <h1 v-if="level === 1">
    <slot></slot>
  </h1>
  <h2 v-else-if="level === 2">
    <slot></slot>
  </h2>
  <h3 v-else-if="level === 3">
    <slot></slot>
  </h3>
  <h4 v-else-if="level === 4">
    <slot></slot>
  </h4>
  <h5 v-else-if="level === 5">
    <slot></slot>
  </h5>
  <h6 v-else-if="level === 6">
    <slot></slot>
  </h6>
</script>
```

```js
Vue.component('anchored-heading', {
  template: '#anchored-heading-template',
  props: {
    level: {
      type: Number,
      required: true
    }
  }
})
```

这里用模板并不是最好的选择：

* 不但代码冗长，而且在每一个级别的标题中重复书写了 `<slot></slot>` ，在要插入锚点元素时还要再次重复

* 虽然模板在大多数组件中都非常好用，但是显然在这里它就不合适了

那么，我们来尝试使用 `render` 函数重写上面的例子：

```js
Vue.component('anchored-heading', {
  render: function (createElement) {
    return createElement(
      'h' + this.level,   // 标签名称
      this.$slots.default // 子节点数组
    )
  },
  props: {
    level: {
      type: Number,
      required: true
    }
  }
})
```

看起来简单多了！

这样代码精简很多，但是需要非常熟悉 Vue 的实例 property

在这个例子中，你需要知道：向组件中传递不带 `v-slot` 指令的子节点时，比如 `anchored-heading` 中的 `Hello world!` ，这些子节点被存储在组件实例中的 `$slots.default` 中

> 如果你还不了解，在深入渲染函数之前推荐阅读[【实例 property API 】](https://cn.vuejs.org/v2/api/#实例-property)

### 节点、树以及虚拟 DOM

在深入渲染函数之前，了解一些浏览器的工作原理是很重要的

以下面这段 HTML 为例：

```html
<div>
  <h1>My title</h1>
  Some text content
  <!-- TODO: Add tagline -->
</div>
```

当浏览器读到这些代码时，它会建立一个[【 DOM 节点树】](https://javascript.info/dom-nodes)来保持追踪所有内容，如同你会画一张家谱树来追踪家庭成员的发展一样

上述 HTML 对应的 DOM 节点树如下图所示：

![图片](https://cn.vuejs.org/images/dom-tree.png)

* 每个元素都是一个节点

* 每段文字也是一个节点

* 甚至注释也都是节点

* 一个节点就是页面的一个部分

* 就像家谱树一样，每个节点都可以有孩子节点

  也就是说每个部分可以包含其它的一些部分

高效地更新所有这些节点会是比较困难的，不过所幸你不必手动完成这个工作

你只需要告诉 Vue 你希望页面上的 HTML 是什么，这可以是在一个模板里：

```html
<h1>{{ blogTitle }}</h1>
```

或者一个渲染函数里：

```js
render: function (createElement) {
  return createElement('h1', this.blogTitle)
}
```

在这两种情况下，Vue 都会自动保持页面的更新，即便 `blogTitle` 发生了改变

#### 虚拟 DOM

Vue 通过建立一个虚拟 DOM 来追踪自己要如何改变真实 DOM

请仔细看这行代码：

```js
return createElement('h1', this.blogTitle)
```

`createElement` 到底会返回什么呢？

* 其实不是一个实际的 DOM 元素

* 它更准确的名字可能是 `createNodeDescription`

  因为它所包含的信息会告诉 Vue 页面上需要渲染什么样的节点，包括及其子节点的描述信息

* 我们把这样的节点描述为 **`虚拟节点 (virtual node)`** ，也常简写它为 `VNode`

  **`虚拟 DOM`** 是我们对由 Vue 组件树建立起来的整个 VNode 树的称呼

### createElement 参数

接下来你需要熟悉的是如何在 `createElement` 函数中使用模板中的那些功能

这里是 `createElement` 接受的参数：

```js
// @returns {VNode}
createElement(
  // {String | Object | Function}
  // 一个 HTML 标签名、组件选项对象
  // 或者 resolve 了上述任何一种的一个 async 函数
  // 必填项
  'div',

  // {Object}
  // 一个与模板中 attribute 对应的数据对象
  // 可选
  {
    // (详情见下一节)
  },

  // {String | Array}
  // 子级虚拟节点 (VNodes)
  // 由 `createElement()` 构建而成
  // 也可以使用字符串来生成“文本虚拟节点”
  // 可选
  [
    '先写一些文字',
    createElement('h1', '一则头条'),
    createElement(MyComponent, {
      props: {
        someProp: 'foobar'
      }
    })
  ]
)
```

#### 深入数据对象

有一点要注意：

正如 `v-bind:class` 和 `v-bind:style` 在模板语法中会被特别对待一样，它们在 VNode 数据对象中也有对应的顶层字段

该对象也允许你绑定普通的 `HTML` attribute，也允许绑定如 `innerHTML` 这样的 DOM property (这会覆盖 `v-html` 指令)

```js
{
  // 与 `v-bind:class` 的 API 相同，
  // 接受一个字符串、对象或字符串和对象组成的数组
  'class': {
    foo: true,
    bar: false
  },
  // 与 `v-bind:style` 的 API 相同，
  // 接受一个字符串、对象，或对象组成的数组
  style: {
    color: 'red',
    fontSize: '14px'
  },
  // 普通的 HTML attribute
  attrs: {
    id: 'foo'
  },
  // 组件 prop
  props: {
    myProp: 'bar'
  },
  // DOM property
  domProps: {
    innerHTML: 'baz'
  },
  // 事件监听器在 `on` 内，
  // 但不再支持如 `v-on:keyup.enter` 这样的修饰器。
  // 需要在处理函数中手动检查 keyCode。
  on: {
    click: this.clickHandler
  },
  // 仅用于组件，用于监听原生事件，而不是组件内部使用
  // `vm.$emit` 触发的事件。
  nativeOn: {
    click: this.nativeClickHandler
  },
  // 自定义指令。注意，你无法对 `binding` 中的 `oldValue`
  // 赋值，因为 Vue 已经自动为你进行了同步。
  directives: [
    {
      name: 'my-custom-directive',
      value: '2',
      expression: '1 + 1',
      arg: 'foo',
      modifiers: {
        bar: true
      }
    }
  ],
  // 作用域插槽的格式为
  // { name: props => VNode | Array<VNode> }
  scopedSlots: {
    default: props => createElement('span', props.text)
  },
  // 如果组件是其它组件的子组件，需为插槽指定名称
  slot: 'name-of-slot',
  // 其它特殊顶层 property
  key: 'myKey',
  ref: 'myRef',
  // 如果你在渲染函数中给多个元素都应用了相同的 ref 名，
  // 那么 `$refs.myRef` 会变成一个数组。
  refInFor: true
}
```












































































































































































































































