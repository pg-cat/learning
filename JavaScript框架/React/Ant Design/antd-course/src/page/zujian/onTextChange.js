import React from 'react';

import MyInputs from './zujianx/MyInput.js';

class Demo extends React.Component {
  constructor(props){
    super(props);
    this.state={
      text: null
    }
  }

  onTextChange = (event) => {
    this.setState({ text: event.target.value });
  }

  onTextReset = () => {
    this.setState({ text: '' });
  }

  render() {
    const style1={
      marginRight:'10px',
      color: 'red'
    }
    const style2={
      marginLeft:'10px'
    }
    return (
      <div>
        <MyInputs
          style={style1}
          value={this.state.text}
          onChange={this.onTextChange}
        ></MyInputs>
        <button
          onClick={this.onTextReset}
          style={style2}
        >
          Reset
        </button>
      </div>
    )
  }
}

export default Demo;