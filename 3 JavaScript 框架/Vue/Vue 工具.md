以下内容整理自[【 Vue.js 官方文档】【 2.x 】](https://cn.vuejs.org/v2/guide/installation.html)


# Vue 工具

## 单文件组件

### 介绍

> [【观看本节视频讲解】](https://learning.dcloud.io/#/?vid=14)

在很多 Vue 项目中，我们使用 `Vue.component` 来定义全局组件，紧接着用 `new Vue({ el: '#container '})` 在每个页面内指定一个容器元素

* 这种方式在很多中小规模的项目中运作的很好，在这些项目里 JavaScript 只被用来加强特定的视图

但当在更复杂的项目中，或者你的前端完全由 JavaScript 驱动的时候，下面这些缺点将变得非常明显：

* 全局定义 (Global definitions)

  强制要求每个 `component` 中的命名不得重复

* 字符串模板 (String templates)

  缺乏语法高亮，在 `HTML` 有多行的时候，需要用到丑陋的 `\`

* 不支持 `CSS` (No CSS support)

  意味着当 `HTML` 和 `JavaScript` 组件化时，`CSS` 明显被遗漏

* 没有构建步骤 (No build step)

  限制只能使用 HTML 和 ES5 JavaScript ，而不能使用预处理器，如 `Pug (formerly Jade)` 和 `Babel`

文件扩展名为 `.vue` 的 `single-file components` (单文件组件) 为以上所有问题提供了解决方法，并且还可以使用 `webpack` 或 `Browserify` 等构建工具

这是一个文件名为 `Hello.vue` 的简单实例：

![图片](https://cn.vuejs.org/images/vue-component.png)

在 `index.js` 中引用 `Hello.vue` ：

```js
import Vue from "vue";
import App from "./Hello";

// 关闭生产模式下给出的提示
Vue.config.productionTip = false;

new Vue({
  el: "#app",
  template: "<App/>",
  components: { App }
});
```

现在我们获得：

* [【完整语法高亮】](https://github.com/vuejs/awesome-vue#source-code-editing)
* [【 CommonJS 模块】](https://webpack.js.org/concepts/modules/#what-is-a-webpack-module)
* [【组件作用域的 CSS 】](https://vue-loader.vuejs.org/zh-cn/features/scoped-css.html)

正如我们说过的，我们可以使用预处理器来构建简洁和功能更丰富的组件，比如 `Pug` ，`Babel (with ES2015 modules)` ，和 `Stylus`

![图片](https://cn.vuejs.org/images/vue-component-with-preprocessors.png)

这些特定的语言只是例子，你可以只是简单地使用 `Babel` ，`TypeScript` ，`SCSS` ，`PostCSS`，或者其他任何能够帮助你提高生产力的预处理器

* 如果搭配 `vue-loader` 使用 `webpack` ，它也能为 CSS Modules 提供头等支持

#### 怎么看待关注点分离？

一个重要的事情值得注意，*`关注点分离不等于文件类型分离`*

在现代 UI 开发中，我们已经发现：

* 相比于把代码库分离成三个大的层次并将其相互交织起来

* 把它们划分为松散耦合的组件再将其组合起来更合理一些

* 在一个组件里，其模板、逻辑和样式是内部耦合的，并且把他们搭配在一起实际上使得组件更加内聚且更可维护

即便你不喜欢单文件组件，你仍然可以把 JavaScript 、CSS 分离成独立的文件然后做到热重载和预编译

```html
<!-- my-component.vue -->
<template>
  <div>This will be pre-compiled</div>
</template>
<script src="./my-component.js"></script>
<style src="./my-component.css"></style>
```

### 起步

#### 例子沙箱

如果你希望深入了解并开始使用单文件组件，请来 CodeSandbox [【看看这个简单的 `todo` 应用】](https://codesandbox.io/s/o29j95wx9)

#### 针对刚接触 JavaScript 模块开发系统的用户

有了 `.vue` 组件，我们就进入了高级 JavaScript 应用领域

如果你没有准备好的话，意味着还需要学会使用一些附加的工具：

* Node Package Manager (NPM)

  [【阅读 Getting Started guide 】](https://docs.npmjs.com/packages-and-modules/getting-packages-from-the-registry)中关于如何从注册地 (registry) 获取包的章节

* Modern JavaScript with ES2015/16

  阅读 Babel 的[【 Learn ES2015 guide 】](https://babeljs.io/docs/learn-es2015/)

  你不需要立刻记住每一个方法，但是你可以保留这个页面以便后期参考

在你花一天时间了解这些资源之后，我们建议你参考[【 Vue CLI 3 】](https://cli.vuejs.org/zh/)

只要遵循指示，你就能很快地运行一个带有 `.vue` 组件、`ES2015` 、`webpack` 和热重载 ( `hot-reloading` ) 的 Vue 项目！

#### 针对高级用户

CLI 会为你搞定大多数工具的配置问题，同时也支持细粒度[【自定义配置项】](https://cli.vuejs.org/zh/config/)

有时你会想从零搭建你自己的构建工具，这时你需要通过[【 Vue Loader 】](https://vue-loader.vuejs.org/zh/)手动配置 webpack

> 关于学习更多 webpack 的内容，请[【查阅其官方文档】](https://webpack.js.org/configuration/)和[【 Webpack Academy 】](https://webpack.academy/p/the-core-concepts)

## 单元测试

> [【 Vue CLI 】](https://cli.vuejs.org/zh/)拥有开箱即用的通过[【 Jest 】](https://github.com/facebook/jest)或[【 Mocha 】](https://mochajs.org/)进行单元测试的内置选项
>> 我们还有官方的[【 Vue Test Utils 】](https://vue-test-utils.vuejs.org/zh/)提供更多详细的指引和自定义设置

### 简单的断言

你不必为了可测性在组件中做任何特殊的操作，导出原始设置就可以了：

```html
<template>
  <span>{{ message }}</span>
</template>

<script>
  export default {
    data () {
      return {
        message: 'hello!'
      }
    },
    created () {
      this.message = 'bye!'
    }
  }
</script>
```

然后随着[【 Vue Test Utils 】](https://vue-test-utils.vuejs.org/)导入组件，你可以使用许多常见的断言 (这里我们使用的是 Jest 风格的 `expect` 断言作为示例)：

```js
// 导入 Vue Test Utils 内的 `shallowMount` 和待测试的组件
import { shallowMount } from '@vue/test-utils'
import MyComponent from './MyComponent.vue'

// 挂载这个组件
const wrapper = shallowMount(MyComponent)

// 这里是一些 Jest 的测试，你也可以使用你喜欢的任何断言库或测试
describe('MyComponent', () => {
  // 检查原始组件选项
  it('has a created hook', () => {
    expect(typeof MyComponent.created).toBe('function')
  })

  // 评估原始组件选项中的函数的结果
  it('sets the correct default data', () => {
    expect(typeof MyComponent.data).toBe('function')
    const defaultData = MyComponent.data()
    expect(defaultData.message).toBe('hello!')
  })

  // 检查 mount 中的组件实例
  it('correctly sets the message when created', () => {
    expect(wrapper.vm.$data.message).toBe('bye!')
  })

  // 创建一个实例并检查渲染输出
  it('renders the correct message', () => {
    expect(wrapper.text()).toBe('bye!')
  })
})
```

### 编写可被测试的组件

很多组件的渲染输出由它的 `props` 决定

事实上，如果一个组件的渲染输出完全取决于它的 `props` ，那么它会让测试变得简单，就好像断言不同参数的纯函数的返回值

看下面这个例子：

```html
<template>
  <p>{{ msg }}</p>
</template>

<script>
  export default {
    props: ['msg']
  }
</script>
```

你可以使用[【 Vue Test Utils 】](https://vue-test-utils.vuejs.org/)来在输入不同 prop 时为渲染输出下断言：

```js
import { shallowMount } from '@vue/test-utils'
import MyComponent from './MyComponent.vue'

// 挂载元素并返回已渲染的组件的工具函数
function getMountedComponent(Component, propsData) {
  return shallowMount(Component, {
    propsData
  })
}

describe('MyComponent', () => {
  it('renders correctly with different props', () => {
    expect(
      getMountedComponent(MyComponent, {
        msg: 'Hello'
      }).text()
    ).toBe('Hello')

    expect(
      getMountedComponent(MyComponent, {
        msg: 'Bye'
      }).text()
    ).toBe('Bye')
  })
})
```

### 断言异步更新

由于 Vue 进行[【异步更新 DOM 】](https://cn.vuejs.org/v2/guide/reactivity.html#异步更新队列)的情况，一些依赖 DOM 更新结果的断言必须在 `vm.$nextTick()` resolve 之后进行：

```js
// 在状态更新后检查生成的 HTML
it('updates the rendered message when wrapper.message updates', async () => {
  const wrapper = shallowMount(MyComponent)
  wrapper.setData({ message: 'foo' })

  // 在状态改变后和断言 DOM 更新前等待一刻
  await wrapper.vm.$nextTick()
  expect(wrapper.text()).toBe('foo')
})
```

> 关于更深入的 Vue 单元测试的内容，请移步[【 Vue Test Utils 】](https://vue-test-utils.vuejs.org/zh/)以及我们关于[【 Vue 组件的单元测试】](https://cn.vuejs.org/v2/cookbook/unit-testing-vue-components.html)的 cookbook 文章

## TypeScript 支持

> [【 Vue CLI 】](https://cli.vuejs.org/)提供了内建的 TypeScript 工具支持

### 发布为 NPM 包的官方声明文件

静态类型系统能帮助你有效防止许多潜在的运行时错误，而且随着你的应用日渐丰满会更加显著

* 这就是为什么 Vue 不仅仅为 Vue core 提供了针对[【 TypeScript 】](https://www.typescriptlang.org/)的[【官方类型声明】](https://github.com/vuejs/vue/tree/dev/types)

* 还为[【 Vue Router 】](https://github.com/vuejs/vue-router/tree/dev/types)和[【 Vuex 】](https://github.com/vuejs/vuex/tree/dev/types)也提供了相应的声明文件

* 而且，我们已经把它们[【发布到了 NPM 】](https://cdn.jsdelivr.net/npm/vue/types/)，最新版本的 TypeScript 也知道该如何自己从 NPM 包里解析类型声明

* 这意味着只要你成功地通过 NPM 安装了，就不再需要任何额外的工具辅助，即可在 Vue 中使用 TypeScript 了

### 推荐配置

```js
// tsconfig.json
{
  "compilerOptions": {
    // 与 Vue 的浏览器支持保持一致
    "target": "es5",
    // 这可以对 `this` 上的数据 property 进行更严格的推断
    "strict": true,
    // 如果使用 webpack 2+ 或 rollup，可以利用 tree-shake:
    "module": "es2015",
    "moduleResolution": "node"
  }
}
```

> 注意：你需要引入 `strict: true` (或者至少 `noImplicitThis: true` ，这是 `strict` 模式的一部分) 以利用组件方法中 `this` 的类型检查，否则它会始终被看作 `any` 类型
>> 参阅[【 TypeScript 编译器选项文档 (英)】](https://www.typescriptlang.org/docs/handbook/compiler-options.html)了解更多

### 开发工具链

#### 工程创建

[【 Vue CLI 3 】](https://github.com/vuejs/vue-cli)可以使用 TypeScript 生成新工程

创建方式：

```shell
# 1. 如果没有安装 Vue CLI 就先安装
npm install --global @vue/cli

# 2. 创建一个新工程，并选择 "Manually select features (手动选择特性)" 选项
vue create my-project-name
```

#### 编辑器支持

要使用 TypeScript 开发 Vue 应用程序，我们强烈建议您使用[【 Visual Studio Code 】](https://code.visualstudio.com/)，它为 TypeScript 提供了极好的 **`开箱即用`** 支持

* 如果你正在使用[【单文件组件(SFC)】](https://cn.vuejs.org/v2/guide/single-file-components.html)，可以安装提供 SFC 支持以及其他更多实用功能的[【 Vetur 插件】](https://github.com/vuejs/vetur)

* [【 WebStorm 】](https://www.jetbrains.com/webstorm/)同样为 TypeScript 和 Vue 提供了 **`开箱即用`** 的支持

### 基本用法

要让 TypeScript 正确推断 Vue 组件选项中的类型，您需要使用 `Vue.component` 或 `Vue.extend` 定义组件：

```ts
import Vue from 'vue'
const Component = Vue.extend({
  // 类型推断已启用
})

const Component = {
  // 这里不会有类型推断，
  // 因为 TypeScript 不能确认这是 Vue 组件的选项
}
```

### 基于类的 Vue 组件

如果您在声明组件时更喜欢基于类的 API ，则可以使用官方维护的[【 vue-class-component 】](https://github.com/vuejs/vue-class-component)装饰器：

```ts
import Vue from 'vue'
import Component from 'vue-class-component'

// @Component 修饰符注明了此类为一个 Vue 组件
@Component({
  // 所有的组件选项都可以放在这里
  template: '<button @click="onClick">Click!</button>'
})
export default class MyComponent extends Vue {
  // 初始数据可以直接声明为实例的 property
  message: string = 'Hello!'

  // 组件方法也可以直接声明为实例的方法
  onClick (): void {
    window.alert(this.message)
  }
}
```

### 增强类型以配合插件使用

插件可以增加 Vue 的全局/实例 property 和组件选项

* 在这些情况下，在 TypeScript 中制作插件需要类型声明

* 庆幸的是，TypeScript 有一个特性来补充现有的类型，叫做[【模块补充 (module augmentation)】](https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation)

例如，声明一个 `string` 类型的实例 property `$myProperty` ：

```ts
// 1. 确保在声明补充的类型之前导入 'vue'
import Vue from 'vue'

// 2. 定制一个文件，设置你想要补充的类型
//    在 types/vue.d.ts 里 Vue 有构造函数类型
declare module 'vue/types/vue' {
// 3. 声明为 Vue 补充的东西
  interface Vue {
    $myProperty: string
  }
}
```

在你的项目中包含了上述作为声明文件的代码之后 (像 `my-property.d.ts` )，你就可以在 Vue 实例上使用 `$myProperty` 了

```ts
var vm = new Vue()
console.log(vm.$myProperty) // 将会顺利编译通过
```

你也可以声明额外的 property 和组件选项：

```ts
import Vue from 'vue'

declare module 'vue/types/vue' {
  // 可以使用 `VueConstructor` 接口
  // 来声明全局 property
  interface VueConstructor {
    $myGlobal: string
  }
}

// ComponentOptions 声明于 types/options.d.ts 之中
declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    myOption?: string
  }
}
```

上述的声明允许下面的代码顺利编译通过：

```ts
// 全局 property
console.log(Vue.$myGlobal)

// 额外的组件选项
var vm = new Vue({
  myOption: 'Hello'
})
```

### 标注返回值

因为 Vue 的声明文件天生就具有循环性，TypeScript 可能在推断某个方法的类型的时候存在困难

因此，你可能需要在 `render` 或 `computed` 里的方法上标注返回值

```ts
import Vue, { VNode } from 'vue'

const Component = Vue.extend({
  data () {
    return {
      msg: 'Hello'
    }
  },
  methods: {
    // 需要标注有 `this` 参与运算的返回值类型
    greet (): string {
      return this.msg + ' world'
    }
  },
  computed: {
    // 需要标注
    greeting(): string {
      return this.greet() + '!'
    }
  },
  // `createElement` 是可推导的，但是 `render` 需要返回值类型
  render (createElement): VNode {
    return createElement('div', this.greeting)
  }
})
```

如果你发现类型推导或成员补齐不工作了，标注某个方法也许可以帮助你解决这个问题

* 使用 `--noImplicitAny` 选项将会帮助你找到这些未标注的方法

### 标注 Prop

```ts
import Vue, { PropType } from 'vue'

interface ComplexMessage {
  title: string,
  okMessage: string,
  cancelMessage: string
}
const Component = Vue.extend({
  props: {
    name: String,
    success: { type: String },
    callback: {
      type: Function as PropType<() => void>
    },
    message: {
      type: Object as PropType<ComplexMessage>,
      required: true,
      validator (message: ComplexMessage) {
        return !!message.title;
      }
    }
  }
})
```

如果你发现校验器并没有得到类型推导或命名补全不工作，用预期的类型标注参数可能会助你解决这类问题

## 生产环境部署

> 以下大多数内容在你使用[【 Vue CLI 】](https://cli.vuejs.org/zh/)时都是默认开启的
>> 该章节仅跟你自定义的构建设置有关

### 开启生产环境模式

开发环境下，Vue 会提供很多警告来帮你对付常见的错误与陷阱

* 而在生产环境下，这些警告语句却没有用，反而会增加应用的体积

* 此外，有些警告检查还有一些小的运行时开销，这在生产环境模式下是可以避免的

#### 不使用构建工具

如果用 Vue 完整独立版本，即直接用 `<script>` 元素引入 Vue 而不提前进行构建，请记得在生产环境下使用压缩后的版本 ( `vue.min.js` )

* 两种版本都可以在[【安装指导】](https://cn.vuejs.org/v2/guide/installation.html#直接用-lt-script-gt-引入)中找到

#### 使用构建工具

当使用 `webpack` 或 `Browserify` 类似的构建工具时，Vue 源码会根据 `process.env.NODE_ENV` 决定是否启用生产环境模式

> 默认情况为开发环境模式

* 在 `webpack` 与 `Browserify` 中都有方法来覆盖此变量，以启用 Vue 的生产环境模式，同时在构建过程中警告语句也会被压缩工具去除

* 所有这些在 `vue-cli` 模板中都预先配置好了，但了解一下怎样配置会更好

`webpack`

在 `webpack 4+` 中，你可以使用 `mode` 选项：

```js
module.exports = {
  mode: 'production'
}
```

但是在 webpack 3 及其更低版本中，你需要使用[【 DefinePlugin 】](https://webpack.js.org/plugins/define-plugin/)：

```js
var webpack = require('webpack')

module.exports = {
  // ...
  plugins: [
    // ...
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
}
```

`Browserify`

* 在运行打包命令时将 `NODE_ENV` 设置为 `"production"`

  这等于告诉 `vueify` 避免引入热重载和开发相关的代码

* 对打包后的文件进行一次全局的[【 envify 】](https://github.com/hughsk/envify)转换

  这使得压缩工具能清除掉 Vue 源码中所有用环境变量条件包裹起来的警告语句

```shell
NODE_ENV=production browserify -g envify -e main.js | uglifyjs -c -m > build.js
```

* 或者在 Gulp 中使用[【 envify 】](https://github.com/hughsk/envify)：

```js
// 使用 envify 的自定义模块来定制环境变量
var envify = require('envify/custom')

browserify(browserifyOptions)
  .transform(vueify)
  .transform(
    // 必填项，以处理 node_modules 里的文件
    { global: true },
    envify({ NODE_ENV: 'production' })
  )
  .bundle()
```

* 或者配合 Grunt 和[【 grunt-browserify 】](https://github.com/jmreidy/grunt-browserify)使用[【 envify 】](https://github.com/hughsk/envify)：

```js
// 使用 envify 自定义模块指定环境变量
var envify = require('envify/custom')

browserify: {
  dist: {
    options: {
        // 该函数用来调整 grunt-browserify 的默认指令
        configure: b => b
        .transform('vueify')
        .transform(
            // 用来处理 `node_modules` 文件
          { global: true },
          envify({ NODE_ENV: 'production' })
        )
        .bundle()
    }
  }
}
```

`Rollup`

使用[【 @rollup/plugin-replace 】](https://github.com/rollup/plugins/tree/master/packages/replace)：

```js
const replace = require('@rollup/plugin-replace')
rollup({
  // ...
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify( 'production' )
    })
  ]
}).then(...)
```

### 模板预编译

当使用 DOM 内模板或 JavaScript 内的字符串模板时，模板会在运行时被编译为渲染函数

* 通常情况下这个过程已经足够快了，但对性能敏感的应用还是最好避免这种用法

* 预编译模板最简单的方式就是使用[【单文件组件】](https://cn.vuejs.org/v2/guide/single-file-components.html)

  相关的构建设置会自动把预编译处理好，所以构建好的代码已经包含了编译出来的渲染函数而不是原始的模板字符串

* 如果你使用 `webpack` ，并且喜欢分离 JavaScript 和模板文件，你可以使用[【 vue-template-loader 】](https://github.com/ktsn/vue-template-loader)，它也可以在构建过程中把模板文件转换成为 JavaScript 渲染函数

### 提取组件的 CSS

当使用单文件组件时，组件内的 CSS 会以 `<style>` 标签的方式通过 JavaScript 动态注入

* 这有一些小小的运行时开销，如果你使用服务端渲染，这会导致一段 **`无样式内容闪烁(fouc)`**

* 将所有组件的 CSS 提取到同一个文件可以避免这个问题，也会让 CSS 更好地进行压缩和缓存

查阅这个构建工具各自的文档来了解更多：

* [【 webpack + vue-loader 】](https://vue-loader.vuejs.org/zh-cn/configurations/extract-css.html)( `vue-cli` 的 webpack 模板已经预先配置好)
* [【 Browserify + vueify 】](https://github.com/vuejs/vueify#css-extraction)
* [【 Rollup + rollup-plugin-vue 】](https://vuejs.github.io/rollup-plugin-vue/#/en/2.3/?id=custom-handler)

### 跟踪运行时错误

如果在组件渲染时出现运行错误，错误将会被传递至全局 `Vue.config.errorHandler` 配置函数 (如果已设置)

* 利用这个钩子函数来配合错误跟踪服务是个不错的主意

* 比如[【 Sentry 】](https://sentry.io/)，它为 Vue 提供了[【官方集成】](https://sentry.io/for/vue/)
