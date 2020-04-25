import React from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // 控制金色星星的宽度
      starW: 0
    };

    // 星星区域的宽度
    this.starsW = Number;
    // 星星区域距左边屏幕的宽度
    this.starC = Number
  }

  componentDidMount() {
    let screen = document.body.offsetWidth;
    this.starsW = 5 * screen / 750 * 100;
    this.starC = (screen - this.starsW) / 2;
    // let star0 = document.getElementsByClassName('star0')[0];
    // star0.addEventListener('touchmove', this.touchMove);
    // star1.addEventListener('touchend', this.touchEnd);
  }

  // PC
  // click(e) {
  //   let num = (e.clientX - this.starC) / this.starsW * 100;
  //   this.setState({
  //     starW: Math.ceil(num / 20) * 20
  //   })
  // }
  mouseMove(e) {
    let num = (e.clientX - this.starC) / this.starsW * 100;
    this.setState({
      starW: Math.ceil(num / 20) * 20
    })
  }

  // 手机
  // touchEnd = (e) => {
  //   console.log(e, '+e');
  //   let num = (e.changedTouches[0].clientX - this.starC) / this.starsW * 100;
  //   this.setState({
  //     starW: Math.ceil(num / 20) * 20
  //   })
  // }
  touchMove = (e) => {
    let num = (e.changedTouches[0].clientX - this.starC) / this.starsW * 100;
    this.setState({
      starW: Math.ceil(num / 20) * 20
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div
            className="star star0"
            // onClick={(e) => this.click(e)}
            onMouseMove={(e) => this.mouseMove(e)}
            onTouchMove={this.touchMove}
          >
            <div className="star star1" style={{ width: this.state.starW + '%' }}>
              <div className="star star2"></div>
            </div>
          </div>
        </header>
      </div>
    )
  }
}
