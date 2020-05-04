import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate } from '../actions/filters';

const ExpenseListFilters = (props) => {
    const { filters: { text, sortBy }, dispatch } = props;
    return (
        <div>
            <input
                type="text"
                value={text}
                onChange={(e) => {
                    dispatch(setTextFilter(e.target.value));
                }}
            />
            <select
                value={sortBy}
                onChange={(e) => {
                    if (e.target.value === 'date') {
                        dispatch(sortByDate());
                    } else if (e.target.value === 'amount') {
                        dispatch(sortByAmount());
                    }
                }}
            >
                <option value="date">Date</option>
                <option value="amount">Amount</option>
            </select>
        </div>
    );
};

ExpenseListFilters.propTypes = {
    dispatch: PropTypes.func.isRequired,
    filters: PropTypes.shape({
        text: PropTypes.string.isRequired,
        sortBy: PropTypes.string.isRequired,
    }).isRequired,
};

const mapStateToProps = (state) => (
    {
        filters: state.filters,
    }
);

export default connect(mapStateToProps)(ExpenseListFilters);
