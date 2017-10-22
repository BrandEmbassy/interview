import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer$ from './state/mainReducer';
import createState from './state/createState';
import Provider from './state/Provider';

const state$ = createState(reducer$);

ReactDOM.render(
  <Router>
    <Provider state$={state$}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
