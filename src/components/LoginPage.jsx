import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import startLogin from '../actions/auth';

export const LoginPage = (props) => {
    const { startLoginProp } = props;
    return (
        <div>
            <button type="button" onClick={startLoginProp}>
                Login
            </button>
        </div>
    );
};

LoginPage.propTypes = {
    startLoginProp: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
    startLoginProp: () => dispatch(startLogin()),
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
