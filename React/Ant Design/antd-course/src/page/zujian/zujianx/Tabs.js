import { Tabs } from 'antd';

export default ({ activeKey, onTabsChange }) => {
  const TabPane = Tabs.TabPane;
  return (
    <Tabs activeKey={activeKey} onChange={onTabsChange}>
      <TabPane tab="选项卡A" key="1">Content of Tab Pane 1</TabPane>
      <TabPane tab="选项卡B" key="2">Content of Tab Pane 2</TabPane>
      <TabPane tab="选项卡C" key="3">Content of Tab Pane 2</TabPane>
    </Tabs>
  )
}