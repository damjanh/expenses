import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = (props) => {
    const {
        id,
        description,
        amount,
        createdAt,
    } = props;
    return (
        <div>
            <Link to={`/edit/${id}`}>
                <h3>{description}</h3>
            </Link>
            <p>
                {numeral(amount / 100).format('$0,0.00')}
                -
                {moment(createdAt).format('dd. MMM. yyyy')}
            </p>
        </div>
    );
};

ExpenseListItem.propTypes = {
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    createdAt: PropTypes.number.isRequired,
};

export default ExpenseListItem;
