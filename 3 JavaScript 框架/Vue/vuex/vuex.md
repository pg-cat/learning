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
* 来自不同视图的行为需要变更同一状态


























































































































































































































































































