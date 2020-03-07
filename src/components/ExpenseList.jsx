/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';

const ExpenseList = (props) => {
    const { expenses } = props;
    return (
        <div>
            <h1>Expense List</h1>
            Expenses count:
            {expenses.length}
        </div>
    );
};

const mapStateToProps = (state) => ({
    expenses: state.expenses,
});

export default connect(mapStateToProps)(ExpenseList);
