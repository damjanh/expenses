/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';

import ExpenseListItem from './ExpenseListItem';

const ExpenseList = (props) => {
    const { expenses } = props;
    return (
        <div>
            <h1>Expense List</h1>
            {expenses.map((expense) => (
                <ExpenseListItem
                    key={expense.id}
                    description={expense.description}
                    amount={expense.amount}
                    createdAt={expense.createdAt}
                />
            ))}
        </div>
    );
};

const mapStateToProps = (state) => ({
    expenses: state.expenses,
});

export default connect(mapStateToProps)(ExpenseList);
