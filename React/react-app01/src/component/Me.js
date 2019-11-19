import React from 'react';
import './Me.css';
import { Link } from 'react-router-dom';

function Me() {
  return (
    <div className="me">
      别整那些花里胡哨的，<br />这就是个人中心！<br />
      <Link to="/redio">回到首页</Link>
    </div>
  );
}

export default Me;