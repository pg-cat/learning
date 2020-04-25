import React from 'react';

import Tabs from './zujianx/Tabs';

class Demo extends React.Component {
  constructor(props){
    super(props);
    this.state={
      activeKey: '1'
    }
  }

  onTabsChange = (activeKey) => {
    this.setState({
      activeKey
    })
  }

  onChangeToB = (activeKey) => {
    this.setState({
      activeKey: '2'
    })
  }

  render() {
    const style={
      marginTop: '22px',
      marginLeft: '11px'
    }
    return (
      <div>
        <Tabs
        activeKey={this.state.activeKey}
        onTabsChange={this.onTabsChange}
        ></Tabs>
        <button
        onClick={this.onChangeToB}
        style={style}
        >点击切换到 选项卡B</button>
      </div>
    )
  }
}

export default Demo;