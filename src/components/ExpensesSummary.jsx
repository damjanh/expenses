import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const formattedTotal = numeral(expensesTotal / 100).format('$0,0.00');
    return (
        <div>
            <h1>
                Viewing
                &nbsp;
                {expenseCount}
                &nbsp;
                {expenseWord}
                &nbsp;
                totaling
                &nbsp;
                {formattedTotal}
                .
            </h1>
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
