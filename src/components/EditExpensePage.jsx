import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
    const {
        dispatch,
        history,
        expense,
        match: { params: { id } },
    } = props;
    return (
        <div>
            <ExpenseForm
                expense={expense}
                onSubmit={(exp) => {
                    dispatch(editExpense(id, exp));
                    history.push('/');
                }}
            />
            <button
                type="submit"
                onClick={() => {
                    dispatch(removeExpense(id));
                    history.push('/');
                }}
            >
                Remove
            </button>
        </div>
    );
};

EditExpensePage.defaultProps = {
    expense: {
        note: '',
    },
};

EditExpensePage.propTypes = {
    dispatch: PropTypes.func.isRequired,
    history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
    expense: PropTypes.shape({
        id: PropTypes.string.isRequired,
        createdAt: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
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
