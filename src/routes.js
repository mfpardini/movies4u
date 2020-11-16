import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Browser from './pages/Browser';
import Test from './pages/test';

export default function Routes() {
    return (
        <Router>
            <NavigationBar />
            <Switch>
                <Route path='/' exact>
                    <Browser />
                </Route>
                <Route path='/test' exact>
                    <Test />
                </Route>
            </Switch>
        </Router>
    );
}