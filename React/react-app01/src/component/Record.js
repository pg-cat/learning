import React from 'react';
import './Radio.css';
import ReactDOM from 'react-dom'

export default class Radio extends React.Component {
  constructor(poprs) {
    super(poprs);
    this.state = {
      // 当前路由
      record: {
        toTime: null,
        goTime: null,
        maps: []
      }
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="radio">
        您已浏览页面：{this.state.pages} 丨用时：
      </div >
    )
  }
}
