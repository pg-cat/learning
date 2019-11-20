import React from 'react';
import { Link } from 'react-router-dom';
import './Tabbar.css';

export default class Tabbar extends React.Component {
  constructor(poprs) {
    super(poprs);
    this.state = {
      classBtn: 1
    }
  }

  change(i) {
    this.setState({
      classBtn: i
    });
  }

  render() {
    return (
      <div className="tabbar">
        <button className={this.state.classBtn === 1 ? 'red' : ''} onClick={() => this.change(1)}>
          <Link to="/">首 页{this.state.classBtn}</Link>
        </button>
        <button className={this.state.classBtn === 2 ? 'red' : ''} onClick={() => this.change(2)}>
          <Link to="/list">列 表</Link>
        </button>
        <button className={this.state.classBtn === 3 ? 'red' : ''} onClick={() => this.change(3)}>
          <Link to="/me">我 的</Link>
        </button>
      </div>
    )
  }
}