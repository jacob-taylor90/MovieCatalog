import React, {Component} from 'react';
import {Route, NavLink, HashRouter} from 'react-router-dom';
import Home from '../components/home';
import AddMovie from '../components/add-movie';
import ViewCatalog from '../components/view-catalog';
import Account from '../components/account-pop-up';
import '../app.css';

export default class Navigation extends Component {

    render() {
        return(
            <HashRouter>
                <div>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/add">Add Movie</NavLink></li>
                        <li><NavLink to="/view">View Catalog</NavLink></li>
                        <li className="right"><NavLink to="/account">Log In/Sign Up</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route exact path="/" component={Home} />
                        <Route path="/add" component={AddMovie} />
                        <Route path="/view" component={ViewCatalog} />
                        <Route path="/account" component={Account} />
                    </div>
                </div>
            </HashRouter>
        );
    }
}