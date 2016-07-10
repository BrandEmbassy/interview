import React = require('react')
import { Route } from 'react-router'

import Layout = require('./components/Layout')
import ContactDetail = require('./components/ContactDetail')

export = (
    <Route path="/" component={Layout}>
        <Route path="/contact/:contactId" component={ContactDetail} />
        <Route path="/contact/:contactId/:action" component={ContactDetail} />
    </Route>
)
