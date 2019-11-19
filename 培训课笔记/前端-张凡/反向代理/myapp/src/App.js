import React from 'react';
import { Link, HashRouter, Route, Switch } from 'react-router-dom'
import { menuData } from './common/menuData'
import { className } from './common/className'
import Menu from './components/Menu'
import './App.css'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: '/home'
    };
  }

  changeTab(path) {
    this.setState({
      selected: path,
      showMenu: false
    })
  }

  showMenu() {
    const bool = this.state.showMenu;
    this.setState({
      showMenu: !bool
    })
  }

  getData() {
    fetch('/api?cityname=孝感', {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    }).then(function (res) {
      console.log(res);
      return res.json()
    }).then(function (res) {
      console.log(JSON.parse(res.body).result);
    })
  }

  // 测试是否反向代理
  componentDidMount() {
    fetch('/api/go?a=1')
      .then(
        res => res.json()
      )
      .then(
        data => console.log(data)
      )
      .catch(
        err => console.log(err)
      )

    // fetch('https://cnodejs.org/api/v1/topics', {
    //   page: 2,
    //   tab: 'good',
    //   limit: 10
    // })
    //   .then(
    //     res => res.json()
    //   )
    //   .then(
    //     data => console.log(data, '+data')
    //   )
    //   .catch(
    //     err => console.log(err, '+err')
    //   )
  }

  render() {
    return (
      <div className={this.state.showMenu === true ? 'content' : ''}>
        <header>
          <button onClick={this.showMenu.bind(this)}>菜单</button>
        </header>
        <Menu showMenu={this.state.showMenu} />

        <HashRouter>
          <section>
            <Switch>
              {menuData.map((item) => (
                <Route key={item.key} path={item.path} component={item.component}></Route>
              ))}
            </Switch>
            <button onClick={this.getData}>点击</button>
          </section>
          <footer>
            {menuData.map((item) => (
              <Link key={item.key} onClick={this.changeTab.bind(this, item.path)} to={item.path}>
                <img alt="" src={this.state.selected === item.path ? item.ActiveIcon : item.Icon} />
                <span className={this.state.selected === item.path ? className.active : ''}>{item.title}</span>
              </Link>
            ))}
          </footer>
        </HashRouter>
      </div>
    );
  }
}


export default App;
