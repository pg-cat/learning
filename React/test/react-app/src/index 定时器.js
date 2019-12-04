// react 相关引用
import React from 'react';
import ReactDOM from 'react-dom';

// redux 相关引用
import { createStore } from 'redux';

const Counter = ({ value,onIncrement,onDecrement }) => (
  <div>
    <h1>{value}</h1>
    <button onClick={onIncrement}> + </button>
    丨
    <button onClick={onDecrement}> - </button>
  </div>
)

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(reducer);

const render = () => {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => store.dispatch({type: 'INCREMENT'})}
      onDecrement={() => store.dispatch({type: 'DECREMENT'})}
    />,
    document.getElementById('root')
  )
}

render();
store.subscribe(render);
