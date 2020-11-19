import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import MovieDetail from './pages/MovieDetail';
import Movies from './pages/Movies';

export const moviesClassificationRoutes = ["/popular", "/top_rated", "/upcoming", "/now_playing",];

export default function Routes() {
    return (
        <Router>
            <Route component={NavigationBar} />
            <Switch>
                <Route path={moviesClassificationRoutes.concat('/')} exact component={Movies} />
                <Route path="/movie/detail/:id" exact component={MovieDetail} />
            </Switch>
        </Router>
    );
}