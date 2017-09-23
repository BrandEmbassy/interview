

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import contactsReducer from '../reducers/contactsReducer';

/* global window */

const rootReducer = combineReducers({ contactsModel: contactsReducer });

const composeEnhancers =
  typeof window === 'object' &&
  /* eslint no-underscore-dangle: 0 */
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  // other store enhancers if any
);

const store = createStore(rootReducer, {}, enhancer);


store.subscribe(() => {
  console.log('Store, subscribe');
  console.log(arguments);
  console.log('store changed', store.getState());
});

export default store;
