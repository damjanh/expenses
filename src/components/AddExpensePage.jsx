import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

const AddExpensePage = (props) => {
    const { dispatch } = props;
    return (
        <div>
            <h1>Add Expense</h1>
            <ExpenseForm
                onSubmit={(expense) => {
                    dispatch(addExpense(expense));
                }}
            />
        </div>
    );
};

AddExpensePage.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

export default connect()(AddExpensePage);
