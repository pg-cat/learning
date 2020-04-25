import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './component/Home';
import List from './component/List';
import Me from './component/Me';
import Radio from './component/Radio';
import Tabbar from './component/Tabbar';

const BasicRoute = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/list" component={List} />
      <Route path="/me" component={Me} />
      <Route path="/radio" component={Radio} />
    </Switch>
    <Tabbar />
  </BrowserRouter>
);


export default BasicRoute;