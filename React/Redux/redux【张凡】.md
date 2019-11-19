# redux 状态管理工具

redux 是一个独立的组件，在很多地方都可以使用，只不过这里是在 react 中用的最多

## action 行为

通过 type 来指定你要执行的功能

## reducer 处理

他的功能类似于: `旧 state` + `action` = `新 state 值`

## store 状态树

`存放 / 声明` 所有状态的地方

### 纯 redux

- 首先，声明好你需要用的变量：

```jsx
// 声明一个state需要的变量
const gongzi = 10000;
```

- 其次，声明 action 部分，意味着你的数据处理都有几种情况

```jsx
// action部分
const up = {
  type : '涨薪'
}
const down = {
  type : '扣工资'
}
```

- 再次，说明，action 里面的每一个 type 对应需要执行什么函数

```jsx
// reducer
const reducer = (state = gongzi,action) => {
  // 通过判断，执行哪个action
  switch (action.type){
    case '涨薪':
      return state += 1000;
    case '扣工资':
      return state -= 100;
    default:
      return state;
  }
}
```

- 最后，创建状态树，并且传入 reducer 当做参数

```jsx
// 创建状态树
const store = createStore(reducer);

最终处理的结果，需要怎么展示或者怎么进一步处理
// 处理事件的结果需要放在派发事件上面
store.subscribe(()=>{
    console.log(store.getState());
  });

  具体执行哪个type，或者执行哪个函数
// 触发事件/派发事件
// store.dispatch(down);
```

## 如果要在 react 里面使用 redux ，需要安装 `react-redux`

在使用 redux 的页面需要引入以下内容

```jsx
import { Provider,connect } from 'react-redux'
```

### react-redux 配合使用

- 和上面相比，需要多出来指定渲染到页面的变量

```jsx
function mapStateToProps(state){
  return {
    页面上要用的变量名 : state
  }
}
```

- 页面上需要触发的函数/需要触发的 action

```jsx
function mapDispatchToProps(dispatch){
  return {
    函数名: ()=>dispatch({type:'涨薪'}),
    函数名:()=>dispatch({type:'扣工资'})
  }
}
```

- 连接组件

```jsx
App = connect(mapStateToProps,mapDispatchToProps)(App);
```

- 页面上如果要使用 redux 里面的变量，需要在调用该组件的时候，外部嵌套 Provider

```jsx
<Provider store={store}>
  <App />
</Provider>
```

- 在页面上使用 `函数 mapDispatchToProps 声明` 的时候，需要进行转接

```jsx
class App extends Component{
  render(){
    const { Payup,Paydown } = this.props;
    return (
      <div>
        <h1>{this.props.gongzi}</h1>
        <button onClick={Payup}>涨工资</button>
        <button onClick={Paydown}>扣工资</button>
      </div>
    )
  }
}
```