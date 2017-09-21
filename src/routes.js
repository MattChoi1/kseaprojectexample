
// src/routes.js
import React from 'react';
import { Switch, Route } from 'react-router-dom'

import App from './components/App';
import About from './components/About';
import NotFound from './components/NotFound';

const Routes = () => (
    <main>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/about" component={About} />
            <Route path="*" component={NotFound} />
        </Switch>
    </main>
);

export default Routes;
