import * as React from 'react';
import * as Redux from 'redux';
import { Route, Switch } from 'react-router-dom';
import App from './pages/App';
import Home from './pages/Home';
import Detail from './pages/Detail';
import PageNotFound from './pages/PageNotFound';

export default function Routes() {
    return (
        <App>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/new-contact" component={Detail} />
                <Route path="/contact/:id" component={Detail} />
                <Route path="*" component={PageNotFound} />
            </Switch>
        </App>
    );
}
