import { Tabs } from 'antd';

export default () => {
  const TabPane = Tabs.TabPane;
  return (
    <Tabs>
      <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
      <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
    </Tabs>
  )


  // state = {
  //   activeKey: '1',
  // }

  // onTabChange = (activeKey) => {
  //   this.setState({
  //     activeKey
  //   })
  // }

  // return (
  //   <Tabs activeKey={this.state.activeKey} onChange={this.onTabChange}>
  //     <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
  //     <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
  //   </Tabs>
  // )
}