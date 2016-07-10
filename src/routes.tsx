import React = require('react')
import { Route } from 'react-router'

import Layout = require('./components/Layout')
import ContactDetails = require('./components/ContactDetails')

export = (
    <Route path="/" component={Layout}>
        <Route path="/contact/:contactId" component={ContactDetails} />
    </Route>
)
