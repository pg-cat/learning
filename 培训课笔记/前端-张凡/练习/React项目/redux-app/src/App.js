import React from 'react';
import './App.css';
import Login from './Login'

// 使用 react-redux
import { connect } from 'react-redux';

class App extends React.Component {

  render() {
    // 从 props 中提取函数
    const { ADD, REM, CHENG, CHU } = this.props;
    return (
      <div className="App">

        <Login />

        <p>{this.props.gz}</p>
        <p>{this.props.bs}</p>
        <div className='btns'>
          <h4 onClick={ADD}>点击增加+</h4>
          <h4 onClick={REM}>点击减少-</h4>
          <h4 onClick={CHENG}>点击乘 2</h4>
          <h4 onClick={CHU}>点击除 3</h4>
        </div>

      </div>
    )
  }
}

// 需要渲染的数据
function mapStateToProps(state) {
  console.log(state);
  return {
    gz: state.gz,
    bs:state.bs
  }
}

// 通过标签里的函数触发事件
function mapDispatchToProps(dispatch) {
  return {
    ADD: () => dispatch({ type: 'ADD' }),
    REM: () => dispatch({ type: 'REM' }),
    CHENG: () => dispatch({ type: 'CHENG' }),
    CHU: () => dispatch({ type: 'CHU' })
  }
}

export default App = connect(mapStateToProps, mapDispatchToProps)(App);
