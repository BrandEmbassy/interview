import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { createStore } from "redux";
import { Provider } from "react-redux";

import contactsApp from "./reducers";

/* <Provider store={createStore(contactsApp)}>
<App />
</Provider>, */

ReactDOM.render(
  <Provider store={createStore(contactsApp)}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
