# vuex

- 在之前的学习过程中，vue 页面之间相互传值非常麻烦

- 并且在前后台分离的页面中，利用变量的状态来控制页面的显示层次

> vuex 就是来解决以上两个问题的:
> - 统一管理所有变量状态
> - 其次可以方便的进行页面传值

## vuex 的安装

> 在普通的 vue 项目中不包含 vuex ，需要进行 `npm install vuex --save-dev`
>> 然后在的 main.js 中进行引入:
>> - 或者单独拿出来一个文件夹，然后引入 vuex 之后，再在 main.js 中引入

一般情况下，放置 vuex 的文件夹叫做 store

- 在该文件中引入 vue 和 vuex ，在 `src/store/index.js` 中

```js
import Vue from 'vue'
import Vuex from 'vuex'

// 使用vuex
Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    str : '这是状态管理过来的变量',
  }
})

// 向外暴露
export default store
```

## State 状态树

所有需要的数据，都要在 State 这里声明保存，在其他页面，可以通过 `this.$store.state` 来获取数据

- 比如 `{{ this.$store.state.str }}` 是在 HelloWorld 页面中使用的变量



## Getters 操作 state 中的数值计算

如果你要计算 state 里面的数据，可以使用该方法或者该对象

```js
getters:{
  addNum:function(state){
    return state.numbers + 1
  }
}
```

- 它的功能，就是计算 state 里面的数值的，包括一些复杂的计算

  > 类似于 vue 中的 computed

## mutations

> 如果要对 vuex 里面的 state 里面的数值或者变量进行改变，需要从底层往最上层进行修改

- 修改的函数在 mutations 对象中进行声明

```js
mutations:{
  jianNum:function(state){
    state.numbers = state.numbers - 1;
  }
}
```

- 在需要修改的地方，进行函数调用

```js
jianNumbers:function(){
  this.$store.commit('jianNum');
}
```

## actions

- 在 actions 里面调用 mutations 的方法

```js
actions:{
  chengNum:function(context){
    context.commit('jianNum');
  }
}
```

- 在 vue 文件中，使用 dispatch 来调用 actions 里面的方法

```js
chengNumbers:function(){
  this.$store.dispatch('chengNum');
}
```

## mapstate

> 一种转变的写法，之前主要的目的，就是不用再页面上写比较长的变量名称

- 在使用变量的页面引入 vuex 中的该对象

`import { mapState } from 'vuex'`

- 在计算属性生命周期函数中，执行以下操作

```js
computed:{
  ...mapState({
    shuzi:state => state.numbers
  })
},
```

## mapActions

> 需要放在 methods 里面进行使用

```js
methods:{
  addNumbers:function(){
    this.$store.state.numbers = this.$store.state.numbers + 1
  },
  jianNumbers:function(){
    this.$store.commit('jianNum');
  },
  chengNumbers:function(){
    this.$store.dispatch('chengNum');
  },
  ...mapActions({
    fun:'chengNum'
  })
}
```