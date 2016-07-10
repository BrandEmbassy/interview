/// <reference path="../typings/require.d.ts" />
import React = require("react")
import ReactDom = require("react-dom")
import Layout = require('./components/Layout')

// We want this to be packed in our bundle
require("!style!css!less!../../css/style.less")

function ConnectComponentToDOM<T>(component: React.ComponentClass<T>, elementId: string)
{
    ReactDom.render(
        React.createElement(component, null),
        document.getElementById(elementId)
    )    
}

ConnectComponentToDOM(Layout, 'app');