import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = (props) => {
    const {
        id,
        description,
        amount,
        createdAt,
        dispatch,
    } = props;
    return (
        <div>
            <Link to={`/edit/${id}`}>
                <h3>{description}</h3>
            </Link>
            <p>
                {amount}
                -
                {createdAt}
            </p>
            <button
                type="button"
                onClick={() => {
                    dispatch(removeExpense({ id }));
                }}
            >
                Remove
            </button>
        </div>
    );
};

ExpenseListItem.propTypes = {
    dispatch: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    createdAt: PropTypes.number.isRequired,
};

export default connect()(ExpenseListItem);
