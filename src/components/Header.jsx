import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = (props) => {
    const { startLogoutProp } = props;
    return (
        <header className="header">
            <div className="content-container">
                <div className="header__content">
                    <Link className="header__title" to="/dashboard" activeClassName="is-active">
                        <h1>
                            Expenses
                        </h1>
                    </Link>
                    {/* <NavLink to="/create" activeClassName="is-active" exact>Create</NavLink> */}
                    <button type="button" onClick={startLogoutProp}>Logout</button>
                </div>
            </div>
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
