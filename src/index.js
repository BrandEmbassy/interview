import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import contactsApp from './reducers';
import App from './components/App';

const persistedState = {};
const store = createStore(contactsApp, persistedState);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
