/// <reference path="../typings/require.d.ts" />

/// <reference path="../typings/react/react.d.ts" />
import React = require('react')

/// <reference path="../typings/react/react-dom.d.ts" />
import ReactDom = require('react-dom')

/// <reference path="../typings/react-router/react-router.d.ts" />
import { Router, Route, browserHistory } from 'react-router'

/// <reference path="../typings/redux/redux.d.ts" />
import { createStore } from 'redux'

/// <reference path="../typings/react-redux/react-redux.d.ts" />
import { Provider } from 'react-redux'

import AppState = require('./model/AppState')
import routes = require('./routes')
import rootReducer = require('./reducers')

// We want this to be packed in our bundle
require('!style!css!less!../../css/style.less')

// init app state
const initialState : AppState = {
    contacts: [
        {
            id: 1,
            fullName: "Patrik Vrbovsky",
            bio: "Human beings are a disease, a cancer of this planet. You're a plague and we are the cure.",
            phone: 123456789,
            email: "john.smith@matrix.com"
        },
        {
            id: 2,
            fullName: "Thomas Anderson",
            bio: "I know you're out there. I can feel you now. I know that you're afraid... you're afraid of us. You're afraid of change.",
            phone: 111222333,
            email: "thomas.anderson@matrix.com"
        }
    ]
}

let store = createStore(rootReducer, initialState)

// Init routes, render
ReactDom.render(
    <Provider store={store}>
        <Router 
            history={browserHistory}
            routes={routes}
        />
    </Provider>,
    document.getElementById('app')
)    
