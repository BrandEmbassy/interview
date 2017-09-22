import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './views/app/App';
import store from './stores/store';
// import registerServiceWorker from './registerServiceWorker';

/* global document */

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
// registerServiceWorker();
