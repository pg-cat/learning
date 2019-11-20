【 `2019` 年 `5` 月 `2` 日】整理自 [【 `redux-saga-in-chinese` 文档（版本时间 - `2018` 年）】](https://github.com/superRaytin/redux-saga-in-chinese)

---
---


![图片](https://redux-saga.js.org/logo/0800/Redux-Saga-Logo-Landscape.png)

# 自述

> [【 `Redux-saga` 原文档】](https://redux-saga-in-chinese.js.org/)

> 文档版本号: `1.0.0-beta`

> 英文原版: https://redux-saga.js.org/

`redux-saga` 是一个用于管理应用程序 `Side Effect`（副作用）的 `library`
* 它的目标是让副作用管理更容易, 执行更高效, 测试更简单, 在处理故障时更容易

> `Side Effect` 副作用, 例如异步获取数据, 访问浏览器缓存等

可以想像为, 一个 `saga` 就像是应用程序中一个单独的线程, 它独自负责处理副作用:

* `redux-saga` 是一个 `redux` 中间件, 意味着这个线程可以通过正常的 `redux action` 从主应用程序启动, 暂停和取消

* 它能访问完整的 `redux state` , 也可以 `dispatch redux action`

`redux-saga` 使用了 `ES6` 的 `Generator` 功能, 让异步的流程更易于读取, 写入和测试:

* 通过这样的方式, 这些异步的流程看起来就像是标准同步的 `Javascript` 代码

* 有点像 `async` / `await`, 但 `Generator` 还有一些更棒而且我们也需要的功能

> 如果你还不熟悉 `Generator` 的话, [【这里有一些介绍性的链接】](https://redux-saga-in-chinese.js.org/docs/ExternalResources.html)

你可能已经用了 `redux-thunk` 来处理数据的读取, 但 `redux-saga` 可能更适合你:

* 不同于 `redux thunk` , 你不会再遇到回调地狱了

* 让你可以很容易地测试异步流程, 并保持你的 `action` 是干净的

## 安装 `redux-saga`

```sh
$ npm install --save redux-saga
```

或

```sh
$ yarn add redux-saga
```

或者, 你可以直接在 `HTML` 页面的 `<script>` 标签中使用提供的 `UMD` 构建文件[【参见本节】](https://github.com/pg-cat/Learning-Notes/blob/master/React/Redux/Redux-saga.md#在浏览器中使用-umd-构建版本)

## 使用示例

假设我们有一个 `UI` 界面, 在单击按钮时从远程服务器获取一些用户数据

* 为简单起见, 我们只列出 `action` 触发代码

```javascript
class UserComponent extends React.Component {
  ...
  onSomeButtonClicked() {
    const { userId, dispatch } = this.props
    dispatch({type: 'USER_FETCH_REQUESTED', payload: {userId}})
  }
  ...
}
```

这个组件 `dispatch` - 一个 `plain Object` 的 `action` 到 `Store`

* 我们将创建一个 `Saga` 来监听所有的 `USER_FETCH_REQUESTED action`

* 并触发一个 `API` 调用获取用户数据

### `sagas.js`

```javascript
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import Api from '...'

// worker Saga : 将在 USER_FETCH_REQUESTED action 被 dispatch 时调用
function* fetchUser(action) {
   try {
      const user = yield call(Api.fetchUser, action.payload.userId);
      yield put({type: "USER_FETCH_SUCCEEDED", user: user});
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

/*
  在每个 `USER_FETCH_REQUESTED` action 被 dispatch 时调用 fetchUser
  允许并发（译注: 即同时处理多个相同的 action）
*/
function* mySaga() {
  yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
}

/*
  也可以使用 takeLatest

  不允许并发, dispatch 一个 `USER_FETCH_REQUESTED` action 时,
  如果在这之前已经有一个 `USER_FETCH_REQUESTED` action 在处理中,
  那么处理中的 action 会被取消, 只会执行当前的
*/
function* mySaga() {
  yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
}

export default mySaga;
```

为了能跑起 `Saga` , 我们需要使用 `redux-saga` 中间件将 `Saga` 与 `Redux Store` 建立连接

### `main.js`

```javascript
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducer from './reducers'
import mySaga from './sagas'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)

// then run the saga
sagaMiddleware.run(mySaga)

// render the application
```

## 文档

- [【介绍】](http://superRaytin.github.io/redux-saga-in-chinese/docs/introduction/index.html)
- [【基本概念】](http://superRaytin.github.io/redux-saga-in-chinese/docs/basics/index.html)
- [【高级概念】](http://superRaytin.github.io/redux-saga-in-chinese/docs/advanced/index.html)
- [【技巧】](http://superRaytin.github.io/redux-saga-in-chinese/docs/recipes/index.html)
- [【外部资源】](http://superRaytin.github.io/redux-saga-in-chinese/docs/ExternalResources.html)
- [【问题解答】](http://superRaytin.github.io/redux-saga-in-chinese/docs/Troubleshooting.html)
- [【名词解释】](http://superRaytin.github.io/redux-saga-in-chinese/docs/Glossary.html)
- [【 `API` 参考】](http://superRaytin.github.io/redux-saga-in-chinese/docs/api/index.html)

## 在浏览器中使用 `umd` 构建版本

在 `dist/` 文件夹有一个可用的 **`umd`** `redux-saga` 构建文件

* `redux-saga` 以 `ReduxSaga` 挂载在全局 `window` 对象中

* 这能让你在创建 `Saga` 中间件时不需要使用 `ES6` 的 `import` 语法:

```javascript
var sagaMiddleware = ReduxSaga.default()
```

`umd` 版本在你不使用 `Webpack` 或 `Browserify` 时相当有用

* 你可以从 [【 `unpkg` 】](https://unpkg.com/) 直接读取

以下是可用的构建好的文件:

- [https://unpkg.com/redux-saga/dist/redux-saga.js](https://unpkg.com/redux-saga/dist/redux-saga.js)
- [https://unpkg.com/redux-saga/dist/redux-saga.min.js](https://unpkg.com/redux-saga/dist/redux-saga.min.js)

在 `redux saga` 运行之前必须导入(这一点非常重要!):

* 如果你的目标浏览器不支持 *`ES2015 generators`*

* 那么你必须使用转换器来编译它们

  * 比如 [【 `babel plugin` 】](https://github.com/facebook/regenerator/tree/master/packages/regenerator-transform)

* 并提供一个有效的 `runtime`

  * 比如 [【这个】](https://unpkg.com/regenerator-runtime/runtime.js)

  * 这个 `runtime` 必须在 **`redux-saga`** 之前引入:

```javascript
import 'regenerator-runtime/runtime'
// then
import sagaMiddleware from 'redux-saga'
```

## 从资源构建示例

```sh
$ git clone https://github.com/redux-saga/redux-saga.git
$ cd redux-saga
$ npm install
$ npm test
```

以下的例子是从 `Redux` 仓库移植过来的（截至目前）。

### 计数器示例

有 `3` 个计数器例子:

#### `counter-vanilla`

这个例子使用了 `vanilla Javascript` 和 `UMD` 构建版本

* 所有资源都在 `index.html` 中引入

* 在浏览器中打开 `index.html` 运行这个例子

> 重要: 你的浏览器必须支持 `Generator`
>> 以下最新版本的浏览器已经支持:
>> * `Chrome`
>> * `Firefox`
>> * `Edge`

#### `counter`

这个例子使用了 `webpack` 和高阶 `API` - `takeEvery`

```sh
$ npm run counter

# test sample for the generator
$ npm run test-counter
```

#### `cancellable-counter`

这个例子使用了低阶 `API` 来演示任务取消的场景

```sh
$ npm run cancellable-counter
```

### 购物车示例

```sh
$ npm run shop

# test sample for the generator
$ npm run test-shop
```

### 异步示例

```sh
$ npm run async

# test sample for the generators
$ npm run test-async
```

### 真实项目示例（使用 `webpack` 的热重载）

```sh
$ npm run real-world

# sorry, no tests yet
```

### `TypeScript`

`Redux-Saga` 与 `TypeScript` 配合使用需要 `DOM.Iterable` 或 `ES2015.Iterable`

* 如果你的 `target` 是 `ES6`, 则不需要再设置

* 然而如果是 `ES5`, 你将需要自己把它们加进来

> 检查你的 `tsconfig.json` 文件和官方的[【 `compiler options` 】](https://www.typescriptlang.org/docs/handbook/compiler-options.html)文档

### `Logo`

你可以在 [【 `logo` 目录】](https://github.com/redux-saga/redux-saga/tree/master/logo) 中找到不同风格的 `Redux-Saga` 官方 `logo`

## 贡献者

此处不做介绍, 有兴趣者可以前往[【文档】](https://github.com/superRaytin/redux-saga-in-chinese#贡献者)了解


# 介绍

## 新手教程

### 本教程的目标

本教程尝试用一种容易上手的方式（希望如此）来介绍 `redux-saga`

* 我们将使用 `Redux` 仓库那个很小的计数器例子作为我们的入门教程

* 这个应用程序比较简单，但是非常适合用来演示说明 `redux-saga` 的基本概念，不至于迷失在过多的细节里

### 初始步骤

* 在我们开始前，`clone` 这个[【教程仓库】](https://github.com/redux-saga/redux-saga-beginner-tutorial)

  > 教程的最终代码放在 `sagas` 分支上

* 然后在命令行输入：

```sh
$ cd redux-saga-beginner-tutorial
$ npm install
```

* 接着启动应用：

```sh
$ npm start
```

我们先从最简单的用例开始：

* 用 `2` 个按钮计数

  * `Increment` 增加
  * `Decrement` 减少

* 之后我们将介绍异步调用

不出意外的话，你应该能看到 `2` 个按钮

* `Increment`
* `Decrement`
* 以及按钮下方 `Counter : 0` 的文字

> 如果你在运行这个应用程序的时候遇到问题，可随时在这个教程仓库上创建 `issue`

### `Hello，Sagas！`

接下来将创建我们的第一个 `Saga` , 按照传统，我们将编写一个 `Sagas` 版本的 `Hello, world`

* 创建一个 `sagas.js` 的文件，然后添加以下代码片段：

```jsx
export function* helloSaga() {
  console.log('Hello Sagas!');
}
```

* 这段代码的唯一的作用就是打印一句问候的消息到控制台

> 注意 `function` 后的 `*`

为了运行我们的 `Saga` ，我们需要：

* 创建一个 `Saga middleware` 和要运行的 `Sagas`

  * 目前我们只有一个 `helloSaga`

* 将这个 `Saga middleware` 连接至 `Redux store`

我们修改一下 `main.js`：

```jsx
// ...
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

//...
import { helloSaga } from './sagas'

const store = createStore(
  reducer,
  applyMiddleware(createSagaMiddleware(helloSaga))
)

// rest unchanged
```

* 首先我们引入 `./sagas` 模块中的 `Saga`

  * 然后使用 `redux-saga` 模块的 `createSagaMiddleware` 工厂函数来创建一个 `Saga middleware`

* 运行 `helloSaga` 之前，我们必须使用 `applyMiddleware` 将 `middleware` 连接至 `Store`

  * 然后使用 `sagaMiddleware.run(helloSaga)` 运行 `Saga`

* 到目前为止，我们的 `Saga` 并没做什么特别的事情

  * 它只是打印了一条消息，然后退出

### 发起异步调用

现在我们来添加一些更接近原始计数器例子的东西

> 为了演示异步调用，我们将添加另外一个按钮，用于在点击 `1` 秒后增加计数

* 首先，我们需要在 `UI` 组件上添加一个额外的按钮和一个回调 `onIncrementAsync`

```jsx
const Counter = ({ value, onIncrement, onDecrement, onIncrementAsync }) =>
  <div>
    <button onClick={onIncrementAsync}>
      Increment after 1 second
    </button>
    {' '}
    <button onClick={onIncrement}>
      Increment
    </button>
    {' '}
    <button onClick={onDecrement}>
      Decrement
    </button>
    <hr />
    <div>
      Clicked: {value} times
    </div>
  </div>
```

* 接下来我们需要将组件的 `onIncrementAsync` 与 `Store action` 连接起来，修改 `main.js` 模块：

```jsx
function render() {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => action('INCREMENT')}
      onDecrement={() => action('DECREMENT')}
      onIncrementAsync={() => action('INCREMENT_ASYNC')} />,
    document.getElementById('root')
  )
}
```

> 注意，与 `redux-thunk` 不同，上面组件 `dispatch` 的是一个 `plain Object` 的 `action`

现在我们将介绍另一种执行异步调用的 `Saga` , 我们的用例如下：

* 我们需要在每个 `INCREMENT_ASYNC action` 启动一个做以下事情的任务：

  * 等待 `1` 秒，然后增加计数

* 添加以下代码到 `sagas.js` 模块：

```jsx
import { delay } from 'redux-saga'
import { put, takeEvery } from 'redux-saga/effects'

// ...

// Our worker Saga: 将执行异步的 increment 任务
export function* incrementAsync() {
  yield delay(1000)
  yield put({ type: 'INCREMENT' })
}

// Our watcher Saga: 在每个 INCREMENT_ASYNC action spawn 一个新的 incrementAsync 任务
export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}
```

以上，我们引入了一个工具函数 `delay` ，这个函数返回一个延迟 `1` 秒再 `resolve` 的[【 `Promise` 】](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)我们将使用这个函数去 `block` (阻塞) `Generator`

* `Sagas` 被实现为[【 `Generator functions` 】](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*)，它会 `yield` 对象到 `redux-saga middleware`

  * 被 `yield` 的对象都是一类指令，指令可被 `middleware` 解释执行

  * 当 `middleware` 取得一个 `yield` 后的 `Promise` ，`middleware` 会暂停 `Saga` ，直到 `Promise` 完成

  * 在上面的例子中，`incrementAsync` 这个 `Saga` 会暂停直到 `delay` 返回的 `Promise` 被 `resolve` ，这个 `Promise` 将在 `1` 秒后 `resolve`

* 一旦 `Promise` 被 `resolve` ，`middleware` 会恢复 `Saga` 接着执行，直到遇到下一个 `yield`

  * 在这个例子中，下一个语句是另一个被 `yield` 的对象：

  * 调用 `put({type: 'INCREMENT'})` 的结果，意思是告诉 `middleware` 发起一个 `INCREMENT` 的 `action`

* `put` 就是我们称作 `Effect` 的一个例子

  * `Effects` 是一些简单 `Javascript` 对象，包含了要被 `middleware` 执行的指令

  * 当 `middleware` 拿到一个被 `Saga yield` 的 `Effect` ，它会暂停 `Saga` ，直到 `Effect` 执行完成，然后 `Saga` 会再次被恢复

* 总结一下，`incrementAsync Saga` 通过 `delay(1000)` 延迟了 `1` 秒钟，然后 `dispatch` 一个叫 `INCREMENT` 的 `action`

接下来，我们创建了另一个 `Saga watchIncrementAsync`

* 我们用了一个 `redux-saga` 提供的辅助函数 `takeEvery` ，用于监听所有的 `INCREMENT_ASYNC action` ，并在 `action` 被匹配时执行 `incrementAsync` 任务

* 现在我们有了 `2` 个 `Sagas` ，我们需要同时启动它们

  * 为了做到这一点，我们将添加一个 `rootSaga` ，负责启动其他的 `Sagas`

* 在同样的 `sagas.js` 文件中，重构文件如下：

```jsx
import { delay } from 'redux-saga'
import { put, takeEvery, all } from 'redux-saga/effects'


function* incrementAsync() {
  yield delay(1000)
  yield put({ type: 'INCREMENT' })
}


function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}


// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsync()
  ])
}
```

* 这个 `Saga yield` 了一个数组，值是调用 `helloSaga` 和 `watchIncrementAsync` 两个 `Saga` 的结果

  * 意思是说这两个 `Generators` 将会同时启动

* 现在我们只有在 `main.js` 的 `root Saga` 中调用 `sagaMiddleware.run`

```jsx
// ...
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const store = ...
sagaMiddleware.run(rootSaga)

// ...
```

### 让我们的代码可测试

我们希望测试 `incrementAsync Saga` ，以确保它执行期望的任务，创建另一个文件 `saga.spec.js` ：

```jsx
import test from 'tape';

import { incrementAsync } from './sagas'

test('incrementAsync Saga test', (assert) => {
  const gen = incrementAsync()

  // now what ?
});
```

`incrementAsync` 是一个 `Generator` 函数

* 执行的时候返回一个 `iterator object`

* 这个 `iterator` 的 `next` 方法返回一个如下格式的对象：

  ```jsx
  gen.next() // => { done: boolean, value: any }
  ```

  * `value` 字段包含被 `yield` 后的表达式，也就是 `yield` 后面那个表达式的结果

  * `done` 字段指示 `generator` 是结束了，还是有更多的 `yield` 表达式

* 在 `incrementAsync` 的例子中，`generator` 连续 `yield` 了两个值：

  * `yield delay(1000)`
  * `yield put({type: 'INCREMENT'})`

* 所以，如果我们连续 `3` 次调用 `generator` 的 `next` 方法，我们会得到以下结果：

  ```jsx
  gen.next() // => { done: false, value: <result of calling delay(1000)> }
  gen.next() // => { done: false, value: <result of calling put({type: 'INCREMENT'})> }
  gen.next() // => { done: true, value: undefined }
  ```

  * 前两次调用返回了 `yield` 表达式的结果

  * 第三次调用由于没有更多的 `yield` 了，所以 `done` 字段被设置为 `true`

  * 并且由于 `incrementAsync Generator` 未返回任何东西（没有 `return` 语句），所以 `value` 字段被设置为 `undefined`

* 所以现在，为了测试 `incrementAsync` 里面的逻辑，我们需要对返回的 `Generator` 进行简单地迭代并检查 `Generator yield` 后的值

  ```jsx
  import test from 'tape';

  import { incrementAsync } from './sagas'

  test('incrementAsync Saga test', (assert) => {
    const gen = incrementAsync()

    assert.deepEqual(
      gen.next(),
      { done: false, value: ??? },
      'incrementAsync should return a Promise that will resolve after 1 second'
    )
  });
  ```

上面的问题是我们如何测试 `delay` 的返回值？

* 我们不能在 `Promise` 之间做简单的相等测试

  * 如果 `delay` 返回的是一个 普通（ `normal` ） 的值， 事情将会变得很简单

* `redux-saga` 提供了一种方式，让上面的语句变得可能

  * 与在 `incrementAsync` 中直接（ `directly` ）调用 `delay(1000)` 不同，我们叫它 `indirectly`

  ```jsx
  import { delay } from 'redux-saga'
  import { put, takeEvery, all, call } from 'redux-saga/effects'

  // ...

  export function* incrementAsync() {
    // use the call Effect
    yield call(delay, 1000)
    yield put({ type: 'INCREMENT' })
  }
  ```

我们现在做的是 `yield call(delay, 1000)` 而不是 `yield delay(1000)` ，所以有何不同？

* 在 `yield delay(1000)` 的情况下，`yield` 后的表达式 `delay(1000)` 在被传递给 `next` 的调用者之前就被执行了

  * 当运行我们的代码时，调用者可能是 `middleware`

  * 也有可能是运行 `Generator` 函数并对返回的 `Generator` 进行迭代的测试代码

  * 所以调用者得到的是一个 `Promise` ，像在以上的测试代码里一样

* 而在 `yield call(delay, 1000)` 的情况下，`yield` 后的表达式 `call(delay, 1000)` 被传递给 `next` 的调用者

  * `call` 就像 `put` ， 返回一个 `Effect` ，告诉 `middleware` 使用给定的参数调用给定的函数

  * 实际上，无论是 `put` 还是 `call` 都不执行任何 `dispatch` 或异步调用，它们只是简单地返回 `plain Javascript` 对象

  ```jsx
  put({type: 'INCREMENT'}) // => { PUT: {type: 'INCREMENT'} }
  call(delay, 1000)        // => { CALL: {fn: delay, args: [1000]}}
  ```

* 这里发生的事情是：

  * `middleware` 检查每个被 `yield` 的 `Effect` 的类型，然后决定如何实现哪个 `Effect`

  * 如果 `Effect` 类型是 `PUT` 那 `middleware` 会 `dispatch` 一个 `action` 到 `Store`

  * 如果 `Effect` 类型是 `CALL` 那么它会调用给定的函数

这种把 `Effect` 创建和 `Effect` 执行之间分开的做法，使得我们能够以一种非常简单的方法去测试 `Generator`

```jsx
import test from 'tape';

import { put, call } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { incrementAsync } from './sagas'

test('incrementAsync Saga test', (assert) => {
  const gen = incrementAsync()

  assert.deepEqual(
    gen.next().value,
    call(delay, 1000),
    'incrementAsync Saga must call delay(1000)'
  )

  assert.deepEqual(
    gen.next().value,
    put({type: 'INCREMENT'}),
    'incrementAsync Saga must dispatch an INCREMENT action'
  )

  assert.deepEqual(
    gen.next(),
    { done: true, value: undefined },
    'incrementAsync Saga must be done'
  )

  assert.end()
});
```

* 由于 `put` 和 `call` 返回 `plain Object` ，所以我们可以在测试代码中重复使用同样的函数

  * 为了测试 `incrementAsync` 的逻辑， 我们可以简单地遍历 `generator` 并对它的值做 `deepEqual` 测试

* 为了运行上面的测试代码，我们需要运行：

```sh
$ npm test
```

* 测试结果会显示在控制面板上

## `Saga` 概念的背景

### WIP

目前，可以参考下面这些有用的链接

> 外部链接
> * [【 `Applying the Saga Pattern (Youtube video)` 】](https://www.youtube.com/watch?v=xDuwrtwYHu8) By Caitie McCaffrey
> * [【 `Original paper` 】](http://www.cs.cornell.edu/andru/cs711/2002fa/reading/sagas.pdf) By Hector Garcia-Molina & Kenneth Salem
> * [【 `A Saga on Sagas` 】](https://msdn.microsoft.com/en-us/library/jj591569.aspx) from MSDN site


# 基础概念

## 使用 `Saga` 辅助函数

> `redux-saga` 提供了一些辅助函数，包装了一些内部方法，用来在一些特定的 `action` 被发起到 `Store` 时派生任务
> * 这些辅助函数构建在低阶 `API` 之上
> * 我们将会在高级概念一章看到这些函数是如何实现的

### 函数 `takeEvery`

> 第一个函数 `takeEvery` ，是最常见的，它提供了类似 `redux-thunk` 的行为

让我们通过常见的 `AJAX` 例子来演示一下:

* 每次点击 `Fetch` 按钮时，我们发起一个 `FETCH_REQUESTED` 的 `action`

* 我们想通过启动一个从服务器获取一些数据的任务，来处理这个 `action`

首先我们创建一个将执行异步 `action` 的任务：

```jsx
import { call, put } from 'redux-saga/effects'

export function* fetchData(action) {
   try {
      const data = yield call(Api.fetchUser, action.payload.url);
      yield put({type: "FETCH_SUCCEEDED", data});
   } catch (error) {
      yield put({type: "FETCH_FAILED", error});
   }
}
```

然后在每次 `FETCH_REQUESTED action` 被发起时启动上面的任务

```jsx
import { takeEvery } from 'redux-saga'

function* watchFetchData() {
  yield* takeEvery('FETCH_REQUESTED', fetchData)
}
```

在上面的例子中，`takeEvery` 允许多个 `fetchData` 实例同时启动

* 在某个特定时刻，尽管之前还有一个或多个 `fetchData` 尚未结束，我们还是可以启动一个新的 `fetchData` 任务

* 如果我们只想得到最新那个请求的响应

  * 例如，始终显示最新版本的数据

  * 我们可以使用 `takeLatest` 辅助函数

### 函数 `takeLatest`

> 和 `takeEvery` 不同，在任何时刻 `takeLatest` 只允许一个 `fetchData` 任务在执行
> * 并且这个任务是最后被启动的那个
> * 如果已经有一个任务在执行的时候启动另一个 `fetchData` ，那之前的这个任务会被自动取消

```jsx
import { takeLatest } from 'redux-saga'

function* watchFetchData() {
  yield* takeLatest('FETCH_REQUESTED', fetchData)
}
```

### 同时使用多个 `takeEvery` 函数

如果你有多个 `Saga` 监视不同的 `action` ，你可以用内置辅助函数创建很多观察者，就像用了 `fork` 来派生他们

* 之后我们会讲到 `fork` ，现在就把它当作一个允许我们在后台启动多个 `saga` 的 `Effect`

* 举个例子：

```jsx
import { takeEvery } from 'redux-saga/effects'

// FETCH_USERS
function* fetchUsers(action) { ... }

// CREATE_USER
function* createUser(action) { ... }

// 同时使用它们
export default function* rootSaga() {
  yield takeEvery('FETCH_USERS', fetchUsers)
  yield takeEvery('CREATE_USER', createUser)
}
```

## 声明式 `Effects`

在 `redux-saga` 的世界里，`Sagas` 都用 `Generator` 函数实现

* 我们从 `Generator` 里 `yield` 纯 `JavaScript` 对象以表达 `Saga` 逻辑

  * 我们称呼那些对象为 `Effect`

  * `Effect` 是一个简单的对象，这个对象包含了一些给 `middleware` 解释执行的信息

  * 你可以把 `Effect` 看作是发送给 `middleware` 的指令以执行某些操作

    * 调用某些异步函数，发起一个 `action` 到 `store` ，等等

* 你可以使用 `redux-saga/effects` 包里提供的函数来创建 `Effect`

  * 这一部分和接下来的部分，我们将介绍一些基础的 `Effect`

  * 并见识到这些 `Effect` 概念是如何让 `Sagas` 很容易地被测试的

  * `Sagas` 可以多种形式 `yield Effect`

    * 最简单的方式是 `yield` 一个 `Promise`

举个例子，假设我们有一个监听 `PRODUCTS_REQUESTED action` 的 `Saga`

* 每次匹配到 `action` ，它会启动一个从服务器上获取产品列表的任务

```jsx
import { takeEvery } from 'redux-saga/effects'
import Api from './path/to/api'

function* watchFetchProducts() {
  yield takeEvery('PRODUCTS_REQUESTED', fetchProducts)
}

function* fetchProducts() {
  const products = yield Api.fetch('/products')
  console.log(products)
}
```

* 在上面的例子中，我们在 `Generator` 中直接调用了 `Api.fetch`

  * 在 `Generator` 函数中，`yield` 右边的任何表达式都会被求值，结果会被 `yield` 给调用者

* `Api.fetch('/products')` 触发了一个 `AJAX` 请求并返回一个 `Promise` ，`Promise` 会 `resolve` 请求的响应， 这个 `AJAX` 请求将立即执行

看起来简单又地道，但...

* 假设我们想测试上面的 `generator` ：

```jsx
const iterator = fetchProducts()
assert.deepEqual(iterator.next().value, ??) // 我们期望得到什么？
```

* 我们想要检查 `generator yield` 的结果的第一个值

  * 在我们的情况里，这个值是执行 `Api.fetch('/products')` 这个 `Promise` 的结果

  * 在测试过程中，执行真正的服务 `real service` 是一个既不可行也不实用的方法，所以我们必须 模拟 `Api.fetch` 函数

  * 也就是说，我们需要将真实的函数替换为一个假的

    * 这个假的函数并不会真的发送 `AJAX` 请求而只会检查是否用正确的参数调用了 `Api.fetch`

    * 在我们的情况里，正确的参数是 `/products`

* 模拟使测试更加困难和不可靠

  * 另一方面，那些只简单地返回值的函数更加容易测试，因此我们可以使用简单的 `equal()` 来检查结果

    * 这是编写最可靠测试用例的方法

    * 不相信？我建议你阅读[【 `Eric Elliott's article` 】](https://medium.com/javascript-scene/what-every-unit-test-needs-f6cd34d9836d#.4ttnnzpgc)

> `（…）equal（）` ，本质上回答了每个单元测试必须回答的两个最重要的问题，但大多数回答不了：
> * 实际的输出是什么？
> * 预计的输出是什么？
>> 如果你没有回答以上两个问题就完成了一个测试，你就没有真正的进行单元测试

实际上我们需要的只是保证 `fetchProducts` 任务 `yield` 一个调用正确的函数，并且函数有着正确的参数

* 相比于在 `Generator` 中直接调用异步函数，我们可以仅仅 `yield` 一条描述函数调用的信息

  * 也就是说，我们将简单地 `yield` 一个看起来像下面这样的对象

```jsx
// Effect -> 调用 Api.fetch 函数并传递 `./products` 作为参数
{
  CALL: {
    fn: Api.fetch,
    args: ['./products']
  }
}
```

* 换句话说，`Generator` 将会 `yield` 包含 **`指令`** 的文本对象（ `plain Objects` ），`redux-saga middleware` 将确保执行这些指令并将指令的结果回馈给 `Generator`

这样的话，在测试 `Generator` 时，所有我们需要做的就是，将 `yield` 后的对象作一个简单的 `deepEqual` 来检查它是否 `yield` 了我们期望的指令

### `call` 函数

出于这样的原因，`redux-saga` 提供了一个不一样的方式来执行异步调用:

```jsx
import { call } from 'redux-saga/effects'

function* fetchProducts() {
  const products = yield call(Api.fetch, '/products')
  // ...
}
```

* 我们使用了 `call(fn, ...args)` 这个函数

  * 与前面的例子不同的是，现在我们不立即执行异步调用，相反，`call` 创建了一条描述结果的信息

    * 就像在 `Redux` 里你使用 `action` 创建器，创建一个将被 `Store` 执行的、描述 `action` 的纯文本对象

  * `call` 创建一个纯文本对象描述函数调用

  * `redux-saga middleware` 确保执行函数调用并在响应被 `resolve` 时恢复 `generator`

* 这让你能容易地测试 `Generator` ，就算它在 `Redux` 环境之外

  * 因为 `call` 只是一个返回纯文本对象的函数而已

```jsx
import { call } from 'redux-saga/effects'
import Api from '...'

const iterator = fetchProducts()

// expects a call instruction
assert.deepEqual(
  iterator.next().value,
  call(Api.fetch, '/products'),
  "fetchProducts should yield an Effect call(Api.fetch, './products')"
)
```

* 现在我们不需要模拟任何东西了，一个简单的相等测试就足够了

这些 *声明式调用 `declarative calls`* 的优势是

* 我们可以通过简单地遍历 `Generator` 并在 `yield` 后的成功的值上面做一个 `deepEqual` 测试， 就能测试 `Saga` 中所有的逻辑

* 这是一个真正的好处，因为复杂的异步操作都不再是黑盒，你可以详细地测试操作逻辑，不管它有多么复杂

* `call` 同样支持调用对象方法，你可以使用以下形式，为调用的函数提供一个 `this` 上下文：

```jsx
yield call([obj, obj.method], arg1, arg2, ...) // 如同 obj.method(arg1, arg2 ...)
```

### `apply` 函数

`apply` 提供了另外一种调用的方式：

```jsx
yield apply(obj, obj.method, [arg1, arg2, ...])
```

> `call` 和 `apply` 非常适合返回 `Promise` 结果的函数

### `cps` 函数

另外一个函数 `cps` 可以用来处理 `Node` 风格的函数

* 例如，`fn(...args, callback)` 中的 `callback` 是 `(error, result) => ()` 这样的形式

* `cps` 表示的是延续传递风格 `Continuation Passing Style`

举个例子：

```jsx
import { cps } from 'redux-saga'

const content = yield cps(readFile, '/path/to/file')
```

当然你也可以像测试 `call` 一样测试它

```jsx
import { cps } from 'redux-saga/effects'

const iterator = fetchSaga()
assert.deepEqual(iterator.next().value, cps(readFile, '/path/to/file') )
```

> `cps` 同 `call` 的方法调用形式是一样的

> 完整列表的 `declarative effects` 可在这里找到[【 `API reference` 】](https://redux-saga.js.org/docs/api/#effect-creators)

## 发起 `action` 到 `store`

> 在前面的例子上更进一步
> - 假设每次保存之后，我们想发起一些 `action` 通知 `Store` 数据获取成功了
>> 目前我们先忽略失败的情况

我们可以找出一些方法来传递 `Store` 的 `dispatch` 函数到 `Generator`

- 然后 `Generator` 可以在接收到获取的响应之后调用它

```jsx
//...

function* fetchProducts(dispatch)
  const products = yield call(Api.fetch, '/products')
  dispatch({ type: 'PRODUCTS_RECEIVED', products })
}
```

- 然而，该解决方案与我们在上一节中看到的从 `Generator` 内部直接调用函数，有着相同的缺点

  - 如果我们想要测试 `fetchProducts` 接收到 `AJAX` 响应之后执行 `dispatch` ， 我们还需要模拟 `dispatch` 函数

- 相反，我们需要同样的声明式的解决方案

  - 只需创建一个对象来指示 `middleware` 我们需要发起一些 `action` ，然后让 `middleware` 执行真实的 `dispatch`

  - 这种方式我们就可以同样的方式测试 `Generator` 的 `dispatch` ：

    - 只需检查 `yield` 后的 `Effect` ，并确保它包含正确的指令

`redux-saga` 为此提供了另外一个函数 `put` ，这个函数用于创建 `dispatch Effect`

```jsx
import { call, put } from 'redux-saga/effects'
//...

function* fetchProducts() {
  const products = yield call(Api.fetch, '/products')
  // 创建并 yield 一个 dispatch Effect
  yield put({ type: 'PRODUCTS_RECEIVED', products })
}
```

现在，我们可以像上一节那样轻易地测试 `Generator` ：

```jsx
import { call, put } from 'redux-saga/effects'
import Api from '...'

const iterator = fetchProducts()

// 期望一个 call 指令
assert.deepEqual(
  iterator.next().value,
  call(Api.fetch, '/products'),
  "fetchProducts should yield an Effect call(Api.fetch, './products')"
)

// 创建一个假的响应对象
const products = {}

// 期望一个 dispatch 指令
assert.deepEqual(
  iterator.next(products).value,
  put({ type: 'PRODUCTS_RECEIVED', products }),
  "fetchProducts should yield an Effect put({ type: 'PRODUCTS_RECEIVED', products })"
)
```

现在我们通过 `Generator` 的 `next` 方法来将假的响应对象传递到 `Generator`

- 在 `middleware` 环境之外，我们可完全控制 `Generator`

- 通过简单地模拟结果并还原 `Generator` ，我们可以模拟一个真实的环境

- 相比于去模拟函数和窥探调用 `spying calls` ，模拟数据要简单的多

## 错误处理

> 在这一节中，我们将看到如何在前面的例子中处理故障案例

我们假设远程读取因为某些原因失败了，`API` 函数 `Api.fetch` 返回一个被拒绝 `rejected` 的 `Promise`

- 我们希望通过在 `Saga` 中发起 `PRODUCTS_REQUEST_FAILED action` 到 `Store` 来处理那些错误

- 我们可以使用熟悉的 `try/catch` 语法在 `Saga` 中捕获错误

```jsx
import Api from './path/to/api'
import { call, put } from 'redux-saga/effects'

// ...

function* fetchProducts() {
  try {
    const products = yield call(Api.fetch, '/products')
    yield put({ type: 'PRODUCTS_RECEIVED', products })
  }
  catch(error) {
    yield put({ type: 'PRODUCTS_REQUEST_FAILED', error })
  }
}
```

- 为了测试故障案例，我们将使用 `Generator` 的 `throw` 方法

```jsx
import { call, put } from 'redux-saga/effects'
import Api from '...'

const iterator = fetchProducts()

// 期望一个 call 指令
assert.deepEqual(
  iterator.next().value,
  call(Api.fetch, '/products'),
  "fetchProducts should yield an Effect call(Api.fetch, './products')"
)

// 创建一个模拟的 error 对象
const error = {}

// 期望一个 dispatch 指令
assert.deepEqual(
  iterator.throw(error).value,
  put({ type: 'PRODUCTS_REQUEST_FAILED', error }),
  "fetchProducts should yield an Effect put({ type: 'PRODUCTS_REQUEST_FAILED', error })"
)
```

- 在这个案例中，我们传递一个模拟的 `error` 对象给 `throw` ，这会引发 `Generator` 中断当前的执行流并执行捕获区块 `catch block`

当然了，你并不一定得在 `try/catch` 区块中处理错误，你也可以让你的 `API` 服务返回一个正常的含有错误标识的值

- 例如，你可以捕捉 `Promise` 的拒绝操作，并将它们映射到一个错误字段对象

```jsx
import Api from './path/to/api'
import { call, put } from 'redux-saga/effects'

function fetchProductsApi() {
  return Api.fetch('/products')
    .then(response => ({ response }))
    .catch(error => ({ error }))
}

function* fetchProducts() {
  const { response, error } = yield call(fetchProductsApi)
  if (response)
    yield put({ type: 'PRODUCTS_RECEIVED', products: response })
  else
    yield put({ type: 'PRODUCTS_REQUEST_FAILED', error })
}
```

## 一个常见的抽象概念: `Effect`

概括来说，从 `Saga` 内触发异步操作 `Side Effect` 总是由 `yield` 一些声明式的 `Effect` 来完成的

- 你也可以直接 `yield Promise` ，但是这会让测试变得困难，就像我们在第一节中看到的一样

- 一个 `Saga` 所做的实际上是组合那些所有的 `Effect` ，共同实现所需的控制流

  - 最简单的例子是直接把 `yield` 一个接一个地放置来对序列化 `yield Effect`

  - 你也可以使用熟悉的控制流操作符（ `if` , `while` , `for` ） 来实现更复杂的控制流

- 我们已经看到，使用 `Effect` 诸如 `call` 和 `put` ，与高阶 `API` 如 `takeEvery` 相结合

  - 让我们实现与 `redux-thunk` 同样的东西， 但又有额外的易于测试的好处

- 但 `redux-saga` 相比 `redux-thunk` 还提供了另一种好处

  - 在后面的章节，你会遇到一些更强大的 `Effect` ，让你可以表达更复杂的控制流的同时，仍然拥有可测试性的好处


# 高级

## 监听未来的 `action`

到现在为止，我们已经使用了辅助函数 `takeEvery effect` 以在每个 `action` 来到时派生一个新的任务

> 这多少有些模仿 `redux-thunk` 的行为，举个例子：
> - 每次一个组件调用 `fetchProducts Action` 创建器（ `Action Creator` ）
> - `Action` 创建器就会发起一个 `thunk` 来执行控制流程

在现实情况中，`takeEvery` 只是一个在强大的低阶 `API` 之上构建的 `wrapper effect`

- 在这一节中我们将看到一个新的 `Effect` ，即 `take`

- `take` 让我们通过全面控制 `action` 观察进程来构建复杂的控制流成为可能

### 一个简单的日志记录器








































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































