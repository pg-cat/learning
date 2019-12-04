import React from 'react';
import './List.css';

import Logo from './Logo';

function List() {
  return (
    <div className="list">

      <Logo />

      <div className='page'>PAGE 01</div>
      <div className='page'>PAGE 02</div>
      <div className='page'>PAGE 03</div>
      <div className='page'>PAGE 04</div>

    </div>
  );
}

export default List;