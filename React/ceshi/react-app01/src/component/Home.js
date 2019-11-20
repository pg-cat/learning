import React from 'react';
import './Home.css';

import Logo from './Logo';
// import Stars from './Stars';

export default class Home extends React.Component {
  constructor(poprs) {
    super(poprs);

    this.state = {
      num: 123
    }
  }

  changeNum(){
    this.setState({
      num:'字'
    })
  }

  render() {
    return (
      <div className="home">

        {/* <Stars starsNum={{score:1.6,num:5,scoreMax:5}} /> */}

        <Logo />

        <div className='hotSearch'>
          <h2>热点搜索丨Hot search</h2>
          <a href="javaScript(0)">老师节</a>
          <a href="javaScript(0)">开学季</a>
          <a href="javaScript(0)">暑假班</a>
          <a href="javaScript(0)">世界环境日</a>
          <a href="javaScript(0)">毕业季</a>
          <a href="javaScript(0)">儿童节</a>
          <a href="javaScript(0)">端午节</a>
          <a href="javaScript(0)">{this.state.num}</a>
          <a href="javaScript(0)" onClick={()=>this.changeNum()}>点击改变</a>
        </div>

        <div className="hotPage">
          <h2>热点页面丨Hot page</h2>
          <a href="javaScript(0)"><img src="/img/page.jpg" alt="" /><div>教师节</div></a>
          <a href="javaScript(0)"><img src="/img/page.jpg" alt="" /><div>秋季招生</div></a>
          <a href="javaScript(0)"><img src="/img/page.jpg" alt="" /><div>中秋节海报</div></a>
          <a href="javaScript(0)"><img src="/img/page.jpg" alt="" /><div>国庆节</div></a>
          <a href="javaScript(0)"><img src="/img/page.jpg" alt="" /><div>建国70周年</div></a>
          <a href="javaScript(0)"><img src="/img/page.jpg" alt="" /><div>扫除黑恶</div></a>
          <h3>更多 +</h3>
        </div>

      </div>
    )
  }
}
