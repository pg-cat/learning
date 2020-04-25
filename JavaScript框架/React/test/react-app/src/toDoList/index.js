import React, { Component, Fragment } from 'react';
import './toDoList.css';

export default class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: []
    }
  }

  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor='insertArea'>请输入内容</label>
          <input
            id='insertArea'
            className='input'
            value={this.state.inputValue}
            onChange={this.handleInputChange.bind(this)}
          />
          <button
            onClick={this.handleBtnClick.bind(this)}
          >提交</button>
        </div>
        <ul>
          {this.state.list.map(
            (item, index) => {
              return (
                <li
                  className='li'
                  key={index}
                  onClick={this.handleItemDelete.bind(this, index)}
                  dangerouslySetInnerHTML={{ __html: item }}
                ></li>
              )
            }
          )}
        </ul>
      </Fragment>
    );
  }

  // 改变input框内的值
  handleInputChange(e) {
    // console.log(e.target.value);
    this.setState({
      inputValue: e.target.value
    });
  }

  // 点击按钮时添加内容到下面的列表
  handleBtnClick(e) {
    console.log(e.detail, '+detail');
    if (this.state.inputValue) {
      this.setState({
        list: [...this.state.list, this.state.inputValue],
        inputValue: ''
      })
    }
  }

  // 点击列表中哪一行就会删除哪一行
  handleItemDelete(index) {
    // 重新赋值列表数据给新变量，因为react中不建议直接修改state中的值
    const list = this.state.list;
    console.log(list);
    list.splice(index, 1);
    this.setState({
      list: list
    })
  }

}
