import React from 'react';
import './Radio.css';
import ReactDOM from 'react-dom'

export default class Radio extends React.Component {
  constructor(poprs) {
    super(poprs);
    this.state = {
      clickRadio: 1
    }
  }

  change(i) {
    this.setState({
      clickRadio: i
    });
  }

  componentDidMount() {
    const dom = ReactDOM.findDOMNode(this);
    console.log(dom,'+dom')
    // this为当前组件的实例
  }

  render() {
    return (
      <div className="radio">
        <div onClick={() => this.change(1)} className={this.state.clickRadio === 1 ? 'active' : ''}>A</div>
        <div onClick={() => this.change(2)} className={this.state.clickRadio === 2 ? 'active' : ''}>B</div>
        <div onClick={() => this.change(3)} className={this.state.clickRadio === 3 ? 'active' : ''}>C</div>
        <div onClick={() => this.change(4)} className={this.state.clickRadio === 4 ? 'active' : ''}>D</div>
      </div >
    )
  }
}
