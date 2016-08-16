import App from './app/App.react';
import Home from './home/HomePage.react';
import React from 'react';
import { IndexRoute, Route } from 'react-router';

export default function createRoutes(getState) {
  return (
    <Route component={App} path="/">
      <IndexRoute component={Home} />
    </Route>
  );
}
