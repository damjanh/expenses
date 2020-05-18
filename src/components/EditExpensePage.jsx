import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';

const EditExpensePage = (props) => {
    const { expense, match: { params: { id } } } = props;
    return (
        <div>
            <ExpenseForm
                expense={expense}
                onSubmit={(exp) => {
                    console.log(exp);
                }}
            />
        </div>
    );
};

EditExpensePage.defaultProps = {
    expense: {
        note: '',
    },
};

EditExpensePage.propTypes = {
    expense: PropTypes.shape({
        id: PropTypes.string.isRequired,
        createdAt: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        note: PropTypes.string,
    }),
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
