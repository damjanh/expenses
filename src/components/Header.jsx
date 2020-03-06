import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>
            Expenses
        </h1>
        <p>
            <NavLink to="/" activeClassName="is-active" exact> Dashboard</NavLink>
            <NavLink to="/create" activeClassName="is-active" exact>Create</NavLink>
            <NavLink to="/edit" activeClassName="is-active" exact>Edit</NavLink>
            <NavLink to="/help" activeClassName="is-active" exact>Help</NavLink>
        </p>
    </header>
);

export default Header;
