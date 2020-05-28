import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const formattedTotal = numeral(expensesTotal / 100).format('$0,0.00');
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">
                    Viewing
                    &nbsp;
                    <span>{expenseCount}</span>
                    &nbsp;
                    {expenseWord}
                    &nbsp;
                    totaling
                    &nbsp;
                    <span>{formattedTotal}</span>
                    .
                </h1>
                <div className="page-header__actions">
                    <Link className="button" to="/create" activeClassName="is-active" exact>Add Expense</Link>
                </div>
            </div>
        </div>
    );
};

ExpensesSummary.propTypes = {
    expenseCount: PropTypes.number.isRequired,
    expensesTotal: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => {
    const { expenses, filters } = state;
    const visibleExpenses = selectExpenses(expenses, filters);
    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: getExpensesTotal(visibleExpenses),
    };
};

export default connect(mapStateToProps)(ExpensesSummary);
