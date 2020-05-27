import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = (props) => {
    const { startLogoutProp } = props;
    return (
        <header>
            <h1>
                Expenses
            </h1>
            <p>
                <NavLink to="/dashboard" activeClassName="is-active"> Dashboard</NavLink>
                <NavLink to="/create" activeClassName="is-active" exact>Create</NavLink>
                <button type="button" onClick={startLogoutProp}>Logout</button>
            </p>
        </header>
    );
};

Header.propTypes = {
    startLogoutProp: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
    startLogoutProp: () => dispatch(startLogout()),
});

export default connect(undefined, mapDispatchToProps)(Header);
