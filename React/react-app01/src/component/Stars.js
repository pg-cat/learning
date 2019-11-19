import React from 'react';
import './Stars.css';
const star0 = './img/start0.png';
const star1 = './img/start1.png';
const star2 = './img/start2.png';

export default class Stars extends React.Component {
  constructor(poprs) {
    super(poprs);
    this.state = {
      starArr: [],
    }
  }

  componentDidMount() {
    //// 父组件给的值
    // 星星的数量
    let num = this.props.starsNum.num;
    // 评分
    let score = this.props.starsNum.score / (this.props.starsNum.scoreMax / num);

    console.log(this.props.starsNum.scoreMax / num);
    console.log(score);

    // 星星的样式
    let arrClass = ['star2', 'star1', 'star0'];
    let arr = [];
    for (let i = 0; i < num; i++) {
      if (i < Math.floor(score)) {
        arr.push(arrClass[0]);
      } else {
        arr.push(arrClass[2])
      }
    }

    if (score % 1 >= 0.5) {
      arr[Math.ceil(score) - 1] = 'star1';
    }

    this.setState({
      starArr: arr
    })
  }

  render() {
    return (
      <div className="star">
        {this.state.starArr.map((item, index) => (
          <div key={index} className={item}></div>
        ))}
      </div >
    )
  }
}
