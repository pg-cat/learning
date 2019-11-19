// 主页
import Home from '../static/image/home.png'
import HomeActive from '../static/image/active-home.png'
// 列表页
import List from '../static/image/list.png'
import ListActive from '../static/image/active-list.png'
// 我的
import Mine from '../static/image/mine.png'
import MineActive from '../static/image/active-mine.png'

// 引入所有组件
import HomeComponent from '../components/Index';
import ListComponent from '../components/List';
import MineComponent from '../components/User';

var menuData = [{
  Icon:Home,
  ActiveIcon:HomeActive,
  path:'/home',
  title:'主页',
  key:0,
  component:HomeComponent
},{
  Icon:List,
  ActiveIcon:ListActive,
  path:'/list',
  title:'列表页',
  key:1,
  component:ListComponent
},{
  Icon:Mine,
  ActiveIcon:MineActive,
  path:'/mine',
  title:'我的',
  key:2,
  component:MineComponent
}]

export {
  menuData
}
