/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';

import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => {
    const { expenses } = props;
    return (
        <div>
            {
                expenses.length === 0 ? (
                    <p>No expenses</p>
                ) : (
                    expenses.map((expense) => {
                        return (
                            <ExpenseListItem
                                key={expense.id}
                                id={expense.id}
                                description={expense.description}
                                amount={expense.amount}
                                createdAt={expense.createdAt}
                            />
                        );
                    })
                )
            }
        </div>
    );
};

const mapStateToProps = (state) => ({
    expenses: selectExpenses(state.expenses, state.filters),
});

export default connect(mapStateToProps)(ExpenseList);
