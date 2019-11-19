import React from 'react';
import { Link,HashRouter,Route,Switch } from 'react-router-dom'
import { menuData } from './common/menuData'
import { className } from './common/className'
import './App.css'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected:'/home'
    };
  }

  changeTab(path){
    this.setState({
      selected:path
    })
  }

  render() {
    return (
      <div>
        <header>
        </header>
        <HashRouter>
          <Switch>
            {menuData.map((item)=>(
              <Route path={item.path} component={item.component}></Route>
            ))}
          </Switch>
            <footer>
              {menuData.map((item)=>(
                <Link key={item.key} onClick={this.changeTab.bind(this,item.path)} to={item.path}>
                  <img src={this.state.selected == item.path ? item.ActiveIcon : item.Icon} />
                  <span className={this.state.selected == item.path ? className.active : ''}>{item.title}</span>
                </Link>
              ))}
            </footer>
        </HashRouter>
      </div>
    );
  }
}


export default App;
