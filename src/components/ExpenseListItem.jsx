import React from 'react';
import PropTypes from 'prop-types';

const ExpenseListItem = (props) => {
    const { description, amount, createdAt } = props;
    return (
        <div>
            <h3>{description}</h3>
            <p>
                {amount}
                -
                {createdAt}
            </p>
        </div>
    );
};

ExpenseListItem.propTypes = {
    description: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    createdAt: PropTypes.number.isRequired,
};

export default ExpenseListItem;
