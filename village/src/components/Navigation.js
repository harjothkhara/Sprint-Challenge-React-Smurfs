import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import '../Navigation.css';

const Navigation = props => {
    return (
        <nav className="navigation">
            <NavLink to="/">
                <p>Home</p>
            </NavLink>

            <NavLink to="/smurf-form">
                <button>Add New Smurf</button>
            </NavLink>   
        </nav>
    )
}

export default Navigation;