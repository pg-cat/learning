import React from 'react';
import './index.css';
import { List } from '../common/List';
import Tabbar from './Tabbar';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected:'',
      selected2:''
    };
  }
  changeSelect(str){
    this.setState({
      selected : str
    })
  }
  changeSelect2(str){
    this.setState({
      selected2 : str
    })
  }
  render() {
    return (
      <div>

        { /* 有一个测试题，需要四选一 */ }
        {/*<p>请选择你喜欢的明星</p>
        <div className="item" onClick={this.changeSelect.bind(this,'A')} id={this.state.selected === "A" ? "active" : ""}>A</div>
        <div className="item" onClick={this.changeSelect.bind(this,'B')} id={this.state.selected === "B" ? "active" : ""}>B</div>
        <div className="item" onClick={this.changeSelect.bind(this,'C')} id={this.state.selected === "C" ? "active" : ""}>C</div>
        <div className="item" onClick={this.changeSelect.bind(this,'D')} id={this.state.selected === "D" ? "active" : ""}>D</div>
        <div>你当前选择的是:{this.state.selected}</div>

        <p>请选择你喜欢的电影</p>
        <div className="item" onClick={this.changeSelect2.bind(this,'A')} id={this.state.selected2 === "A" ? "active" : ""}>A</div>
        <div className="item" onClick={this.changeSelect2.bind(this,'B')} id={this.state.selected2 === "B" ? "active" : ""}>B</div>
        <div className="item" onClick={this.changeSelect2.bind(this,'C')} id={this.state.selected2 === "C" ? "active" : ""}>C</div>
        <div className="item" onClick={this.changeSelect2.bind(this,'D')} id={this.state.selected2 === "D" ? "active" : ""}>D</div>
        <div>你当前选择的是:{this.state.selected2}</div>*/}
        {List.map((item,index)=>[
          <Tabbar key={''+index+index} />,
          <p key={index}>{ item.question }</p>,
          item.selection.map((items,indexs)=>(
            <div className="item" onClick={this.changeSelect.bind(this,items)}  id={this.state.selected === items ? 'active':''} key={indexs}>{items}</div>
          ))
        ])}
      </div>
    );
  }
}

export default Index;
