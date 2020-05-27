import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = (props) => {
    const { startLoginProp } = props;
    return (
        <div className="box-layout">
            <div className="box-layout__box">
                <h1 className="box-layout__title">Expenses</h1>
                <p>Control your expenses!</p>
                <button type="button" onClick={startLoginProp}>
                    Login
                </button>
            </div>
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
