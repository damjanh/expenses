import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const EditExpensePage = (props) => {
    const { match: { params: { id } } } = props;
    return (
        <div>
            Edit expense page.
            Id is:
            { id }
        </div>
    );
};

EditExpensePage.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
};

const mapStateToProps = (state, props) => {
    const expense = state.expenses.find((exp) => exp.id === props.match.params.id);
    return {
        expense,
    };
};

export default connect(mapStateToProps)(EditExpensePage);
