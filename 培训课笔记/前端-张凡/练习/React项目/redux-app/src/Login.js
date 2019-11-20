import React from 'react';
import './Login.css'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: String,
      password: String
    }
  }

  render() {
    return (
      <div className='LoginBG'>
        <div className="login">
          <h1>登陆丨Login</h1>
          <div className='input'>
            <label htmlFor="username">用户名：</label>
            <input type="text" id="username" placeholder='请输入至少六位数的用户名' />
            <label htmlFor="password">密 码：</label>
            <input type="text" id="password" placeholder='请输入至少八位数的密码' />
          </div>
          <div className='btns'>
            <button>登陆</button>
            <button>取消</button>
          </div>
        </div>
      </div>
    )
  }


}