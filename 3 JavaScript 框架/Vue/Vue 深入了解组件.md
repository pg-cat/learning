以下内容整理自[【 Vue.js 官方文档】【 2.x 】](https://cn.vuejs.org/v2/guide/installation.html)


# Vue.js

## 组件注册

> [【观看本节视频讲解】](https://learning.dcloud.io/#/?vid=13)

### 组件名

在注册一个组件的时候，我们始终需要给它一个名字

比如在全局注册的时候我们已经看到了：

```js
Vue.component('my-component-name', { /* ... */ })
```

该组件名就是 `Vue.component` 的第一个参数

你给予组件的名字可能依赖于你打算拿它来做什么

* 当直接在 DOM 中使用一个组件 (而不是在字符串模板或[【单文件组件】](https://cn.vuejs.org/v2/guide/single-file-components.html)) 的时候

  我们强烈推荐遵循[【 W3C 规范】](https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name)中的自定义组件名 (字母全小写且必须包含一个连字符)

* 这会帮助你避免和当前以及未来的 HTML 元素相冲突

> 你可以在[【风格指南】](https://cn.vuejs.org/v2/style-guide/#基础组件名-强烈推荐)中查阅到关于组件名的其它建议

#### 组件名大小写

定义组件名的方式有两种：

* 使用 kebab-case

```js
Vue.component('my-component-name', { /* ... */ })
```

> 当使用 kebab-case (短横线分隔命名) 定义一个组件时，你也必须在引用这个自定义元素时使用 kebab-case，例如 `<my-component-name>`

* 使用 PascalCase

```js
Vue.component('MyComponentName', { /* ... */ })
```

> 当使用 PascalCase (首字母大写命名) 定义一个组件时，你在引用这个自定义元素时两种命名法都可以使用
>> 也就是说 `<my-component-name>` 和 `<MyComponentName>` 都是可接受的
> * 注意：尽管如此，直接在 DOM (即非字符串的模板) 中使用时只有 kebab-case 是有效的

### 全局注册

到目前为止，我们只用过 `Vue.component` 来创建组件：

```js
Vue.component('my-component-name', {
  // ... 选项 ...
})
```

这些组件是全局注册的

* 也就是说它们在注册之后可以用在任何新创建的 Vue 根实例 ( `new Vue` ) 的模板中

```js
Vue.component('component-a', { /* ... */ })
Vue.component('component-b', { /* ... */ })
Vue.component('component-c', { /* ... */ })

new Vue({ el: '#app' })
```

```html
<div id="app">
  <component-a></component-a>
  <component-b></component-b>
  <component-c></component-c>
</div>
```

在所有子组件中也是如此，也就是说这三个组件 **`在各自内部`** 也都可以相互使用

### 局部注册

全局注册往往是不够理想的

* 比如，如果你使用一个像 webpack 这样的构建系统

  全局注册所有的组件意味着即便你已经不再使用一个组件了，它仍然会被包含在你最终的构建结果中

* 这造成了用户下载的 JavaScript 的无谓的增加

在这些情况下，你可以通过一个普通的 JavaScript 对象来定义组件：

```js
var ComponentA = { /* ... */ }
var ComponentB = { /* ... */ }
var ComponentC = { /* ... */ }
```

然后在 components 选项中定义你想要使用的组件：

```js
new Vue({
  el: '#app',
  components: {
    'component-a': ComponentA,
    'component-b': ComponentB
  }
})
```

对于 `components` 对象中的每个 property 来说，其 property 名就是自定义元素的名字，其 property 值就是这个组件的选项对象

> 注意：局部注册的组件在其子组件中不可用

例如，如果你希望 `ComponentA` 在 `ComponentB` 中可用，则你需要这样写：

```js
var ComponentA = { /* ... */ }

var ComponentB = {
  components: {
    'component-a': ComponentA
  },
  // ...
}
```

或者如果你通过 Babel 和 webpack 使用 ES2015 模块，那么代码看起来更像：

```js
import ComponentA from './ComponentA.vue'

export default {
  components: {
    ComponentA
  },
  // ...
}
```

> 注意：在 `ES2015+` 中，在对象中放一个类似 `ComponentA` 的变量名其实是 `ComponentA: ComponentA` 的缩写，即这个变量名同时是：
> * 用在模板中的自定义元素的名称
> * 包含了这个组件选项的变量名

### 模块系统

如果你通过 `import` / `require` 使用一个模块系统，那么我们会为你提供一些特殊的使用说明和注意事项

#### 在模块系统中局部注册

如果你使用了诸如 `Babel` 和 `webpack` 的模块系统

* 在这些情况下，我们推荐创建一个 `components` 目录，并将每个组件放置在其各自的文件中

* 然后你需要在局部注册之前导入每个你想使用的组件

例如，在一个假设的 `ComponentB.js` 或 `ComponentB.vue` 文件中：

```js
import ComponentA from './ComponentA'
import ComponentC from './ComponentC'

export default {
  components: {
    ComponentA,
    ComponentC
  },
  // ...
}
```

现在 `ComponentA` 和 `ComponentC` 都可以在 `ComponentB` 的模板中使用了

#### 础组件的自动化全局注册

可能你的许多组件只是包裹了一个输入框或按钮之类的元素，是相对通用的

* 我们有时候会把它们称为[【基础组件】](https://cn.vuejs.org/v2/style-guide/#基础组件名-强烈推荐)，它们会在各个组件中被频繁的用到

* 所以会导致很多组件里都会有一个包含基础组件的长列表

```js
import BaseButton from './BaseButton.vue'
import BaseIcon from './BaseIcon.vue'
import BaseInput from './BaseInput.vue'

export default {
  components: {
    BaseButton,
    BaseIcon,
    BaseInput
  }
}
```

而只是用于模板中的一小部分：

```html
<BaseInput
  v-model="searchText"
  @keydown.enter="search"
/>
<BaseButton @click="search">
  <BaseIcon name="search"/>
</BaseButton>
```

如果你恰好使用了 webpack (或在内部使用了 webpack 的[【 `Vue CLI 3+` 】](https://github.com/vuejs/vue-cli))，那么就可以使用 `require.context` 只全局注册这些非常通用的基础组件

这里有一份可以让你在应用入口文件 (比如 `src/main.js` ) 中全局导入基础组件的示例代码：

```js
import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const requireComponent = require.context(
  // 其组件目录的相对路径
  './components',
  // 是否查询其子目录
  false,
  // 匹配基础组件文件名的正则表达式
  /Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  // 获取组件配置
  const componentConfig = requireComponent(fileName)

  // 获取组件的 PascalCase 命名
  const componentName = upperFirst(
    camelCase(
      // 获取和目录深度无关的文件名
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  )

  // 全局注册组件
  Vue.component(
    componentName,
    // 如果这个组件选项是通过 `export default` 导出的，那么就会优先使用 `.default`，否则回退到使用模块的根
    componentConfig.default || componentConfig
  )
})
```

> 记住 **`全局注册的行为必须在根 Vue 实例 (通过 `new Vue` ) 创建之前发生`**
>> [【这里有一个真实项目情景下的示例】](https://github.com/chrisvfritz/vue-enterprise-boilerplate/blob/master/src/components/_globals.js)

## Prop

### Prop 的大小写 (camelCase vs kebab-case)

HTML 中的 attribute 名是大小写不敏感的，所以浏览器会把所有大写字符解释为小写字符

* 这意味着当你使用 DOM 中的模板时，camelCase (驼峰命名法) 的 prop 名需要使用其等价的 kebab-case (短横线分隔命名) 命名

```js
Vue.component('blog-post', {
  // 在 JavaScript 中是 camelCase 的
  props: ['postTitle'],
  template: '<h3>{{ postTitle }}</h3>'
})
```

```html
<!-- 在 HTML 中是 kebab-case 的 -->
<blog-post post-title="hello!"></blog-post>
```

> 重申一次，如果你使用字符串模板，那么这个限制就不存在了

### Prop 类型

到这里，我们只看到了以字符串数组形式列出的 prop

```js
props: ['title', 'likes', 'isPublished', 'commentIds', 'author']
```

但是，通常你希望每个 prop 都有指定的值类型

这时，你可以以对象形式列出 prop ，这些 property 的名称和值分别是 prop 各自的名称和类型：

```js
props: {
  title: String,
  likes: Number,
  isPublished: Boolean,
  commentIds: Array,
  author: Object,
  callback: Function,
  contactsPromise: Promise // or any other constructor
}
```

这不仅为你的组件提供了文档

* 还会在它们遇到错误的类型时从浏览器的 JavaScript 控制台提示用户

* 你会在这个页面接下来的部分看到[【类型检查和其它 prop 验证】](https://cn.vuejs.org/v2/guide/components-props.html#Prop-验证)

### 传递静态或动态 Prop

像这样，你已经知道了可以像这样给 prop 传入一个静态的值：

```html
<blog-post title="My journey with Vue"></blog-post>
```

你也知道 prop 可以通过 `v-bind` 动态赋值，例如：

```html
<!-- 动态赋予一个变量的值 -->
<blog-post v-bind:title="post.title"></blog-post>

<!-- 动态赋予一个复杂表达式的值 -->
<blog-post
  v-bind:title="post.title + ' by ' + post.author.name"
></blog-post>
```

在上述两个示例中，我们传入的值都是字符串类型的，但实际上 **`任何类型`** 的值都可以传给一个 prop

#### 传入一个数字

```html
<!-- 即便 `42` 是静态的，我们仍然需要 `v-bind` 来告诉 Vue -->
<!-- 这是一个 JavaScript 表达式而不是一个字符串。-->
<blog-post v-bind:likes="42"></blog-post>

<!-- 用一个变量进行动态赋值。-->
<blog-post v-bind:likes="post.likes"></blog-post>
```

#### 传入一个布尔值

```html
<!-- 包含该 prop 没有值的情况在内，都意味着 `true` -->
<blog-post is-published></blog-post>

<!-- 即便 `false` 是静态的，我们仍然需要 `v-bind` 来告诉 Vue -->
<!-- 这是一个 JavaScript 表达式而不是一个字符串。-->
<blog-post v-bind:is-published="false"></blog-post>

<!-- 用一个变量进行动态赋值。-->
<blog-post v-bind:is-published="post.isPublished"></blog-post>
```

#### 传入一个数组

```html
<!-- 即便数组是静态的，我们仍然需要 `v-bind` 来告诉 Vue -->
<!-- 这是一个 JavaScript 表达式而不是一个字符串。-->
<blog-post v-bind:comment-ids="[234, 266, 273]"></blog-post>

<!-- 用一个变量进行动态赋值。-->
<blog-post v-bind:comment-ids="post.commentIds"></blog-post>
```

#### 传入一个对象































































































































































































































































































































































































































































































































































































































































































































































































































































