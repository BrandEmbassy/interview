/// <reference path="../typings/require.d.ts" />
/// <reference path="../typings/react-router/react-router.d.ts" />
import React = require('react')
import ReactDom = require('react-dom')
import { Router, Route, browserHistory } from 'react-router'

import AppState = require('./model/AppState')
import routes = require('./routes')

// We want this to be packed in our bundle
require('!style!css!less!../../css/style.less')

// init app state
const appState : AppState = new AppState([
    {
        fullName: "Patrik Vrbovsky",
        bio: "Human beings are a disease, a cancer of this planet. You're a plague and we are the cure.",
        phone: 123456789,
        email: "john.smith@matrix.com"
    },
    {
        fullName: "Thomas Anderson",
        bio: "I know you're out there. I can feel you now. I know that you're afraid... you're afraid of us. You're afraid of change.",
        phone: 111222333,
        email: "thomas.anderson@matrix.com"
    }
])

// Init routes, render
function createElement(Component, props) {
  return <Component appState={appState} {...props} />
}

ReactDom.render(
    <Router 
        history={browserHistory}
        createElement={createElement}
        routes = {routes}
    />,
    document.getElementById('app')
)    
