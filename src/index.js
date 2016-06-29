import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import contactsApp from './reducers';
import App from './components/App';

const persistedState = {
  contacts: [
    {
      id: 'john-smith',
      fullName: 'John Smith',
      bio: 'Human beings are a disease, a cancer of this planet. You\'re a plague and we are the cure.',
      phone: 123456789,
      email: 'john.smith@matrix.com',
    },
  ],
};
const store = createStore(contactsApp, persistedState);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
