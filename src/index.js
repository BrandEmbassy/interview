import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory as history } from 'react-router';

import App from './views/app/App';
import Main from './views/main/Main';
import ContactForm from './views/contact/ContactForm';
import store from './stores/store';
// import registerServiceWorker from './registerServiceWorker';

/* global document */

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Main} />
        <Route path="contact" component={ContactForm} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root'));
// registerServiceWorker();
