import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../app.css';

export default class Navigation extends Component {
    static propTypes = {
        selected: PropTypes.func
    };

    render() {
        return(
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#add">Add Movie</a></li>
                <li><a href="#view">View Catalog</a></li>
                <li className="right"><a href="#logIn">Log In/Sign Up</a></li>
            </ul>
        );
    }
}