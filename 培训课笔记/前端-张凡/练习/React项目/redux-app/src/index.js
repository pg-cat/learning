import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// 使用 redux react-redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ReduxIndex from './indexRedux';

const store = createStore(ReduxIndex);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
