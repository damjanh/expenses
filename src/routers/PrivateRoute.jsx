/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';

const PrivateRoute = (props) => {
    const {
        isAuthenticated,
        component: Component,
        ...rest
    } = props;
    return (
        <Route
            {...rest}
            component={(inProps) => (
                isAuthenticated ? (
                    <div>
                        <Header />
                        <Component {...inProps} />
                    </div>
                ) : (
                    <Redirect to="/" />
                )
            )}
        />
    );
};

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    component: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid,
});

export default connect(mapStateToProps)(PrivateRoute);
