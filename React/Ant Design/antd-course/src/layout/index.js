import { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';

// Header, Footer, Sider, Content 组件在 Layout 组件模块下
const { Header, Footer, Sider, Content } = Layout;

// 引入子菜单组件
const SubMenu = Menu.SubMenu;

// 引入 Link 组件
import Link from 'umi/link';

export default class BasicLayout extends Component {
  render() {
    return (
      <Layout>
        <Sider width={256} style={{ minHeight: '100vh' }}>
          <div style={{ height: '33px', background: 'rgba(255,255,255,0.2)', margin: '13px'}}/>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Link to='/admin'>
                <Icon type="home" />
                <span>主 页</span>
              </Link>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={<span><Icon type="dashboard" /><span>功能区域一</span></span>}
            >
               <Menu.Item key="2"><Link to='/admin/dashboard/analysis'>分析页一</Link></Menu.Item>
               <Menu.Item key="3"><Link to='/admin/dashboard/monitor'>监控页一</Link></Menu.Item>
               <Menu.Item key="4"><Link to='/admin/dashboard/workplace'>工作台一</Link></Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={<span><Icon type="dashboard" /><span>功能区域二</span></span>}
            >
               <Menu.Item key="5"><Link to='/admin/dashboard/analysis'>分析页二</Link></Menu.Item>
               <Menu.Item key="6"><Link to='/admin/dashboard/monitor'>监控页二</Link></Menu.Item>
               <Menu.Item key="7"><Link to='/admin/dashboard/workplace'>工作台二</Link></Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              title={<span><Icon type="dashboard" /><span>功能区域三</span></span>}
            >
               <Menu.Item key="8"><Link to='/admin/dashboard/analysis'>分析页三</Link></Menu.Item>
               <Menu.Item key="9"><Link to='/admin/dashboard/monitor'>监控页三</Link></Menu.Item>
               <Menu.Item key="10"><Link to='/admin/dashboard/workplace'>工作台三</Link></Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout >
          <Header style={{ background: '#fff', textAlign: 'center', padding: '0px' }}>
            Header +顶部头部区域
          </Header>
          <Content style={{ margin: '24px 16px 0' }}>
            +中间内容区域01
            <div style={{ padding: '24px', background: '#fff', minHeight: '360px' }}>
              {this.props.children}
            </div>
            +中间内容区域02
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED +底部标签区域
          </Footer>
        </Layout>
      </Layout>
    )
  }
}