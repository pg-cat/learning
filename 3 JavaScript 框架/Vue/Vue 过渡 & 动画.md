以下内容整理自[【 Vue.js 官方文档】【 2.x 】](https://cn.vuejs.org/v2/guide/installation.html)


# Vue 过渡 & 动画

## 进入/离开 & 列表过渡

### 概述

Vue 在插入、更新或者移除 DOM 时，提供多种不同方式的应用过渡效果

包括以下工具：

* 在 CSS 过渡和动画中自动应用 class

* 可以配合使用第三方 CSS 动画库，如 Animate.css

* 在过渡钩子函数中使用 JavaScript 直接操作 DOM

* 可以配合使用第三方 JavaScript 动画库，如 Velocity.js

在这里，我们只会讲到进入、离开和列表的过渡，你也可以看下一节的[【管理过渡状态】](https://cn.vuejs.org/v2/guide/transitioning-state.html)

### 单元素/组件的过渡

Vue 提供了 `transition` 的封装组件，在下列情形中，可以给任何元素和组件添加进入/离开过渡

* 条件渲染 (使用 `v-if` )
* 条件展示 (使用 `v-show` )
* 动态组件
* 组件根节点

这里是一个典型的例子：

```html
<div id="demo">
  <button v-on:click="show = !show">
    Toggle
  </button>
  <transition name="fade">
    <p v-if="show">hello</p>
  </transition>
</div>
```

```js
new Vue({
  el: '#demo',
  data: {
    show: true
  }
})
```

```css
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
```

当插入或删除包含在 `transition` 组件中的元素时，Vue 将会做以下处理：

* 自动嗅探目标元素是否应用了 CSS 过渡或动画，如果是，在恰当的时机添加/删除 CSS 类名

* 如果过渡组件提供了 JavaScript 钩子函数，这些钩子函数将在恰当的时机被调用

* 如果没有找到 JavaScript 钩子并且也没有检测到 CSS 过渡/动画，DOM 操作 (插入/删除) 在下一帧中立即执行

  > 注意：此指浏览器逐帧动画机制，和 Vue 的 nextTick 概念不同

#### 过渡的类名

在进入/离开的过渡中，会有 `6` 个 class 切换

* `v-enter`

  定义进入过渡的开始状态

  在元素被插入之前生效，在元素被插入之后的下一帧移除

* `v-enter-active`

  定义进入过渡生效时的状态

  在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成之后移除

  这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数

* `v-enter-to`

  `2.1.8` 版及以上定义进入过渡的结束状态

  在元素被插入之后下一帧生效 (与此同时 `v-enter` 被移除)，在过渡/动画完成之后移除

* `v-leave`

  定义离开过渡的开始状态

  在离开过渡被触发时立刻生效，下一帧被移除

* `v-leave-active`

  定义离开过渡生效时的状态

  在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在过渡/动画完成之后移除

  这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数

* `v-leave-to`

  `2.1.8` 版及以上定义离开过渡的结束状态

  在离开过渡被触发之后下一帧生效 (与此同时 `v-leave` 被删除)，在过渡/动画完成之后移除

![图片](https://cn.vuejs.org/images/transition.png)

对于这些在过渡中切换的类名来说，如果你使用一个没有名字的 `<transition>` ，则 `v-` 是这些类名的默认前缀

* 如果你使用了 `<transition name="my-transition">` ，那么 `v-enter` 会替换为 `my-transition-enter`

`v-enter-active` 和 `v-leave-active` 可以控制进入/离开过渡的不同的缓和曲线，在下面章节会有个示例说明

#### CSS 过渡

常用的过渡都是使用 CSS 过渡，下面是一个简单例子：

```html
<div id="example-1">
  <button @click="show = !show">
    Toggle render
  </button>
  <transition name="slide-fade">
    <p v-if="show">hello</p>
  </transition>
</div>
```

```js
new Vue({
  el: '#example-1',
  data: {
    show: true
  }
})
```

```css
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
```

#### CSS 动画

CSS 动画用法同 CSS 过渡，区别是在动画中 `v-enter` 类名在节点插入 DOM 后不会立即删除，而是在 `animationend` 事件触发时删除

示例(省略了兼容性前缀)：

```html
<div id="example-2">
  <button @click="show = !show">Toggle show</button>
  <transition name="bounce">
    <p v-if="show">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, at lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.</p>
  </transition>
</div>
```

```js
new Vue({
  el: '#example-2',
  data: {
    show: true
  }
})
```

```css
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
```

#### 自定义过渡的类名

我们可以通过以下 attribute 来自定义过渡类名：

* `enter-class`
* `enter-active-class`
* `enter-to-class` (2.1.8+)
* `leave-class`
* `leave-active-class`
* `leave-to-class` (2.1.8+)

他们的优先级高于普通的类名，这对于 Vue 的过渡系统和其他第三方 CSS 动画库，如[【 `Animate.css` 】](https://daneden.github.io/animate.css/)结合使用十分有用

```html
<link href="https://cdn.jsdelivr.net/npm/animate.css@3.5.1" rel="stylesheet" type="text/css">

<div id="example-3">
  <button @click="show = !show">
    Toggle render
  </button>
  <transition
    name="custom-classes-transition"
    enter-active-class="animated tada"
    leave-active-class="animated bounceOutRight"
  >
    <p v-if="show">hello</p>
  </transition>
</div>
```

```js
new Vue({
  el: '#example-3',
  data: {
    show: true
  }
})
```

#### 同时使用过渡和动画

Vue 为了知道过渡的完成，必须设置相应的事件监听器

* 它可以是 `transitionend` 或 `animationend` ，这取决于给元素应用的 CSS 规则

* 如果你使用其中任何一种，Vue 能自动识别类型并设置监听

但是，在一些场景中，你需要给同一个元素同时设置两种过渡动效

* 比如 `animation` 很快的被触发并完成了，而 `transition` 效果还没结束

* 在这种情况中，你就需要使用 `type` attribute 并设置 `animation` 或 `transition` 来明确声明你需要 Vue 监听的类型

#### 显性的过渡持续时间

> `2.2.0` 新增

在很多情况下，Vue 可以自动得出过渡效果的完成时机

* 默认情况下，Vue 会等待其在过渡效果的根元素的第一个 `transitionend` 或 `animationend` 事件

* 然而也可以不这样设定

  比如，我们可以拥有一个精心编排的一系列过渡效果，其中一些嵌套的内部元素相比于过渡效果的根元素有延迟的或更长的过渡效果

在这种情况下你可以用 `<transition>` 组件上的 `duration` prop 定制一个显性的过渡持续时间 (以毫秒计)：

```html
<transition :duration="1000">...</transition>
```

你也可以定制进入和移出的持续时间：

```html
<transition :duration="{ enter: 500, leave: 800 }">...</transition>
```

#### JavaScript 钩子

可以在 attribute 中声明 JavaScript 钩子：

```html
<transition
  v-on:before-enter="beforeEnter"
  v-on:enter="enter"
  v-on:after-enter="afterEnter"
  v-on:enter-cancelled="enterCancelled"

  v-on:before-leave="beforeLeave"
  v-on:leave="leave"
  v-on:after-leave="afterLeave"
  v-on:leave-cancelled="leaveCancelled"
>
  <!-- ... -->
</transition>
```

```js
// ...
methods: {
  // --------
  // 进入中
  // --------

  beforeEnter: function (el) {
    // ...
  },
  // 当与 CSS 结合使用时
  // 回调函数 done 是可选的
  enter: function (el, done) {
    // ...
    done()
  },
  afterEnter: function (el) {
    // ...
  },
  enterCancelled: function (el) {
    // ...
  },

  // --------
  // 离开时
  // --------

  beforeLeave: function (el) {
    // ...
  },
  // 当与 CSS 结合使用时
  // 回调函数 done 是可选的
  leave: function (el, done) {
    // ...
    done()
  },
  afterLeave: function (el) {
    // ...
  },
  // leaveCancelled 只用于 v-show 中
  leaveCancelled: function (el) {
    // ...
  }
}
```

这些钩子函数可以结合 CSS `transitions` / `animations` 使用，也可以单独使用

> 当只用 JavaScript 过渡的时候，在 `enter` 和 `leave` 中必须使用 done 进行回调
>> 否则，它们将被同步调用，过渡会立即完成

> 推荐：对于仅使用 JavaScript 过渡的元素添加 `v-bind:css="false"` ，Vue 会跳过 CSS 的检测
>> 这也可以避免过渡过程中 CSS 的影响

一个使用 `Velocity.js` 的简单例子：

```html
<!--
Velocity 和 jQuery.animate 的工作方式类似，也是用来实现 JavaScript 动画的一个很棒的选择
-->
<script src="https://cdnjs.cloudflare.com/ajax/libs/velocity/1.2.3/velocity.min.js"></script>

<div id="example-4">
  <button @click="show = !show">
    Toggle
  </button>
  <transition
    v-on:before-enter="beforeEnter"
    v-on:enter="enter"
    v-on:leave="leave"
    v-bind:css="false"
  >
    <p v-if="show">
      Demo
    </p>
  </transition>
</div>
```

```js
new Vue({
  el: '#example-4',
  data: {
    show: false
  },
  methods: {
    beforeEnter: function (el) {
      el.style.opacity = 0
      el.style.transformOrigin = 'left'
    },
    enter: function (el, done) {
      Velocity(el, { opacity: 1, fontSize: '1.4em' }, { duration: 300 })
      Velocity(el, { fontSize: '1em' }, { complete: done })
    },
    leave: function (el, done) {
      Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 600 })
      Velocity(el, { rotateZ: '100deg' }, { loop: 2 })
      Velocity(el, {
        rotateZ: '45deg',
        translateY: '30px',
        translateX: '30px',
        opacity: 0
      }, { complete: done })
    }
  }
})
```

### 初始渲染的过渡

可以通过 `appear` attribute 设置节点在初始渲染的过渡：

```html
<transition appear>
  <!-- ... -->
</transition>
```

这里默认和进入/离开过渡一样，同样也可以自定义 CSS 类名

```html
<transition
  appear
  appear-class="custom-appear-class"
  appear-to-class="custom-appear-to-class"
  appear-active-class="custom-appear-active-class"
>
  <!-- ... -->
</transition>
```

> `appear-to-class="custom-appear-to-class"` 的使用版本为 `2.1.8+`

自定义 JavaScript 钩子：

```html
<transition
  appear
  v-on:before-appear="customBeforeAppearHook"
  v-on:appear="customAppearHook"
  v-on:after-appear="customAfterAppearHook"
  v-on:appear-cancelled="customAppearCancelledHook"
>
  <!-- ... -->
</transition>
```

在上面的例子中，无论是 `appear` attribute 还是 `v-on:appear` 钩子都会生成初始渲染过渡

### 多个元素的过渡

我们之后讨论[【多个组件的过渡】](https://cn.vuejs.org/v2/guide/transitions.html#多个组件的过渡)，对于原生标签可以使用 `v-if` / `v-else`

最常见的多标签过渡是一个列表和描述这个列表为空消息的元素：

```html
<transition>
  <table v-if="items.length > 0">
    <!-- ... -->
  </table>
  <p v-else>Sorry, no items found.</p>
</transition>
```

> 可以这样使用，但是有一点需要注意：
>> 当有相同标签名的元素切换时，需要通过 `key` attribute 设置唯一的值来标记以让 Vue 区分它们，否则 Vue 为了效率只会替换相同标签内部的内容
> * 即使在技术上没有必要，给在 `<transition>` 组件中的多个元素设置 key 是一个更好的实践

```html
<transition>
  <button v-if="isEditing" key="save">
    Save
  </button>
  <button v-else key="edit">
    Edit
  </button>
</transition>
```

在一些场景中，也可以通过给同一个元素的 `key` attribute 设置不同的状态来代替 `v-if` 和 `v-else` ，上面的例子可以重写为：

```html
<transition>
  <button v-bind:key="isEditing">
    {{ isEditing ? 'Save' : 'Edit' }}
  </button>
</transition>
```

使用多个 `v-if` 的多个元素的过渡可以重写为绑定了动态 property 的单个元素过渡

```html
<transition>
  <button v-if="docState === 'saved'" key="saved">
    Edit
  </button>
  <button v-if="docState === 'edited'" key="edited">
    Save
  </button>
  <button v-if="docState === 'editing'" key="editing">
    Cancel
  </button>
</transition>
```

可以重写为：

```html
<transition>
  <button v-bind:key="docState">
    {{ buttonMessage }}
  </button>
</transition>
```

```js
// ...
computed: {
  buttonMessage: function () {
    switch (this.docState) {
      case 'saved': return 'Edit'
      case 'edited': return 'Save'
      case 'editing': return 'Cancel'
    }
  }
}
```

#### 过渡模式

这里还有一个问题，试着点击下面的按钮：

[【示例效果请点击查看】](https://cn.vuejs.org/v2/guide/transitions.html#过渡模式)

在 `on` 按钮和 `off` 按钮的过渡中，两个按钮都被重绘了，一个离开过渡的时候另一个开始进入过渡

* 这是 `<transition>` 的默认行为：

  进入和离开同时发生

在元素绝对定位在彼此之上的时候运行正常：

[【示例效果请点击查看】](https://cn.vuejs.org/v2/guide/transitions.html#过渡模式)

然后，我们加上 `translate` 让它们运动像滑动过渡：

[【示例效果请点击查看】](https://cn.vuejs.org/v2/guide/transitions.html#过渡模式)

同时生效的进入和离开的过渡不能满足所有要求，所以 Vue 提供了过渡模式：

* `in-out`

  新元素先进行过渡，完成之后当前元素过渡离开

* `out-in`

  当前元素先进行过渡，完成之后新元素过渡进入

用 `out-in` 重写之前的开关按钮过渡：

```html
<transition name="fade" mode="out-in">
  <!-- ... the buttons ... -->
</transition>
```

[【示例效果请点击查看】](https://cn.vuejs.org/v2/guide/transitions.html#过渡模式)

只用添加一个简单的 attribute ，就解决了之前的过渡问题而无需任何额外的代码

`in-out` 模式不是经常用到，但对于一些稍微不同的过渡效果还是有用的

* 将之前滑动淡出的例子结合

[【示例效果请点击查看】](https://cn.vuejs.org/v2/guide/transitions.html#过渡模式)

很酷!

### 多个组件的过渡

多个组件的过渡简单很多

* 我们不需要使用 `key` attribute

* 相反，我们只需要使用动态组件

```html
<transition name="component-fade" mode="out-in">
  <component v-bind:is="view"></component>
</transition>
```

```js
new Vue({
  el: '#transition-components-demo',
  data: {
    view: 'v-a'
  },
  components: {
    'v-a': {
      template: '<div>Component A</div>'
    },
    'v-b': {
      template: '<div>Component B</div>'
    }
  }
})
```

```css
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active for below version 2.1.8 */ {
  opacity: 0;
}
```

[【示例效果请点击查看】](https://cn.vuejs.org/v2/guide/transitions.html#多个组件的过渡)

### 列表过渡

目前为止，关于过渡我们已经讲到：

* 单个节点
* 同一时间渲染多个节点中的一个

那么怎么同时渲染整个列表，比如使用 `v-for` ？































































































































































































































































































































































