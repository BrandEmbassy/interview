import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider, connect } from 'react-redux';
import createRoutes from './Routes';
import reducer from './reducer';

const routes = createRoutes();
const store = createStore(reducer, {});

ReactDOM.render(
    <Provider store={store}>
      <Router>
        {routes}
      </Router>
    </Provider>,
    document.getElementById("root")
);
