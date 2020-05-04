/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';

import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => {
    const { expenses } = props;
    return (
        <div>
            <h1>Expense List</h1>
            {expenses.map((expense) => (
                <ExpenseListItem
                    key={expense.id}
                    id={expense.id}
                    description={expense.description}
                    amount={expense.amount}
                    createdAt={expense.createdAt}
                />
            ))}
        </div>
    );
};

const mapStateToProps = (state) => ({
    expenses: selectExpenses(state.expenses, state.filters),
});

export default connect(mapStateToProps)(ExpenseList);
