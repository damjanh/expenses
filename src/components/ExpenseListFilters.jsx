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

export class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null,
    };

    onDatesChange = ({ startDate, endDate }) => {
        const { setStartDateProp, setEndDateProp } = this.props;
        setStartDateProp(startDate);
        setEndDateProp(endDate);
    };

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    };

    onTextChange = (e) => {
        const { setTextFilterProp } = this.props;
        setTextFilterProp(e.target.value);
    }

    onSortChange = (e) => {
        const { sortByDateProp, sortByAmountProp } = this.props;
        if (e.target.value === 'date') {
            sortByDateProp();
        } else if (e.target.value === 'amount') {
            sortByAmountProp();
        }
    }

    render() {
        const {
            filters: {
                text,
                sortBy,
                startDate,
                endDate,
            },
        } = this.props;
        const { calendarFocused } = this.state;
        return (
            <div className="content-container">
                <div className="input-group">
                    <div className="input-group__item">
                        <input
                            className="text-input"
                            placeholder="Search expenses"
                            type="text"
                            value={text}
                            onChange={this.onTextChange}
                        />
                    </div>
                    <div className="input-group__item">
                        <select
                            className="select"
                            value={sortBy}
                            onChange={this.onSortChange}
                        >
                            <option value="date">Date</option>
                            <option value="amount">Amount</option>
                        </select>
                    </div>
                    <div className="input-group__item">
                        <DateRangePicker
                            startDate={startDate}
                            endDate={endDate}
                            onDatesChange={this.onDatesChange}
                            focusedInput={calendarFocused}
                            onFocusChange={this.onFocusChange}
                            numberOfMonths={1}
                            isOutsideRange={() => false}
                            startDateId="start"
                            endDateId="end"
                            showClearDates
                        />
                    </div>
                </div>
            </div>
        );
    }
}

ExpenseListFilters.propTypes = {
    setTextFilterProp: PropTypes.func.isRequired,
    sortByDateProp: PropTypes.func.isRequired,
    sortByAmountProp: PropTypes.func.isRequired,
    setStartDateProp: PropTypes.func.isRequired,
    setEndDateProp: PropTypes.func.isRequired,
    filters: PropTypes.shape({
        text: PropTypes.string.isRequired,
        sortBy: PropTypes.string.isRequired,
        startDate: PropTypes.object,
        endDate: PropTypes.object,
    }).isRequired,
};

const mapDispatchToProps = (dispatch) => (
    {
        setTextFilterProp: (text) => dispatch(setTextFilter(text)),
        sortByDateProp: () => dispatch(sortByDate()),
        sortByAmountProp: () => dispatch(sortByAmount()),
        setStartDateProp: (startDate) => dispatch(setStartDate(startDate)),
        setEndDateProp: (endDate) => dispatch(setEndDate(endDate)),
    }
);

const mapStateToProps = (state) => (
    {
        filters: state.filters,
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
