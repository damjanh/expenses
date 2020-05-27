/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = (props) => {
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
                    <Redirect to="/dashboard" />
                ) : (
                    <Component {...inProps} />
                )
            )}
        />
    );
};

PublicRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    component: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid,
});

export default connect(mapStateToProps)(PublicRoute);
