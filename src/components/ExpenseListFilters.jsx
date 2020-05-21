import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import {
    setTextFilter,
    sortByAmount,
    sortByDate,
    setStartDate,
    setEndDate,
} from '../actions/filters';

class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null,
    };

    onDatesChange = ({ startDate, endDate }) => {
        const { dispatch } = this.props;
        dispatch(setStartDate(startDate));
        dispatch(setEndDate(endDate));
    };

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    };

    render() {
        const {
            filters: {
                text,
                sortBy,
                startDate,
                endDate,
            }, dispatch,
        } = this.props;
        const { calendarFocused } = this.state;
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
                <DateRangePicker
                    startDate={startDate}
                    endDate={endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    showClearDates="true"
                />
            </div>
        );
    }
}

ExpenseListFilters.propTypes = {
    dispatch: PropTypes.func.isRequired,
    filters: PropTypes.shape({
        text: PropTypes.string.isRequired,
        sortBy: PropTypes.string.isRequired,
        startDate: PropTypes.object,
        endDate: PropTypes.object,
    }).isRequired,
};

const mapStateToProps = (state) => (
    {
        filters: state.filters,
    }
);

export default connect(mapStateToProps)(ExpenseListFilters);
