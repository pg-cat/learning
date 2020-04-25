import React from 'react';
import logo from './logo.svg';
import './Weather.css';

export default class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: String
    }
  }

  change = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  fetchCity = () => {
    let cityname = this.state.value;
    fetch('/api?cityname=' + cityname)
      .then(res => {
        res.json()
      })
      .then(res => {
        console.log(JSON.parse(res.body).result)
      })
  }

  render() {
    return (
      <div className="Weather">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <input
              type="text"
              defaultValue={this.state.value}
              placeholder='请输入城市名'
              onChange={this.change}
            />
            <button onClick={this.fetchCity}>点击发送</button>
          </div>
        </header>
      </div>
    )
  }
}
