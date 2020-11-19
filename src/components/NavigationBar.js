import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { moviesClassificationRoutes } from '../routes';

import './NavigationBar.css';

class NavigationBar extends Component {

    render() {
        if (this.props.location.pathname === '/') {
            this.props.history.push('/popular')
        }
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
                <NavLink className="navbar-brand" to="/" > Movies4u </NavLink>
                <form className="form-inline ml-auto my-2 my-lg-0" >
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
                        <div class="input-group-append" >
                            <button class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
                        </div>
                    </div>
                </form>
            </nav >
        );
    }
}

export default NavigationBar;