import React from 'react';

class FangKuai extends React.Component {
  constructor(props){
    super(props);
    this.state={
      display: null
    }
  }
  render(){
    // const style={
    //   display: none
    // }

    return (
      <div
        className={this.props.fang}
      >
        <div>这是一个 {this.props.name}</div>
        <h3>
          点击按钮会改变后面的字：{this.state.display}
        </h3>
        <button
          onClick={
            () => this.setState({
              display: 'display:none'
            })
          }
        >
          点击按钮消灭 {this.props.name}
        </button>
      </div>
    )
  }
}

export default FangKuai;
