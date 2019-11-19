# 父组件给子组件传值

## 父组件代码

```jsx
// ...

render() {
  return (
    <div>
      <Child text={ this.state.str } />
    </div>
  );
}
```

## 子组件代码

```jsx
// ...

render() {
  return (
    <div>
      <h2> {this.props.text} </h2>
    </div>
  );
}
```

# 子组件给父组件传值

- 首先，父组件声明函数，用于修改本页面变量

```jsx
// ...

onChildtext (newstr){
  console.log('函数被执行');
  this.setState({
    str : newstr
  })
}
```

- 然后，函数传递到子组件，并且在子组件进行调用

```jsx
// ...

onChange (){
  console.log(this.props);
  this.props.fuFun(this.state.str);
}
```

- 最后，子组件信息通过参数传递到父组件
