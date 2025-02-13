import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';

export default class ExpsenseForm extends React.Component {
    constructor(props) {
        super(props);

        const {
            expense,
        } = props;

        // eslint-disable-next-line react/state-in-constructor
        this.state = {
            description: expense.description ? expense.description : '',
            note: expense.note ? expense.note : '',
            amount: expense.amount ? (expense.amount / 100).toString() : '',
            createdAt: expense.createdAt ? moment(expense.createdAt) : moment(),
            calendarFocused: false,
            error: '',
        };
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    }

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    }

    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    }

    onDateChange = (date) => {
        if (date) {
            this.setState(() => ({ createdAt: date }));
        }
    }

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    }

    onSubmit = (e) => {
        e.preventDefault();
        const {
            description,
            amount,
            note,
            createdAt,
        } = this.state;
        if (!description || !amount) {
            this.setState(() => ({ error: 'Please provide a description and amount.' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                description,
                note,
                amount: parseFloat(amount, 10) * 100,
                createdAt: createdAt.valueOf(),
            });
        }
    }

    render() {
        const {
            description,
            note,
            amount,
            createdAt,
            calendarFocused,
            error,
        } = this.state;
        return (
            <form className="form" onSubmit={this.onSubmit}>
                {error && <p className="form__error">{error}</p>}
                <input
                    className="text-input"
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={this.onDescriptionChange}
                />
                <input
                    className="text-input"
                    type="text"
                    placeholder="Amount"
                    value={amount}
                    onChange={this.onAmountChange}
                />
                <SingleDatePicker
                    id="sdp1"
                    onDateChange={this.onDateChange}
                    date={createdAt}
                    focused={calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
                <textarea
                    className="text-area"
                    placeholder="Add a note for your expense. (Optional)"
                    value={note}
                    onChange={this.onNoteChange}
                />
                <div>
                    <button className="button" type="submit">Save Expense</button>
                </div>
            </form>
        );
    }
}

ExpsenseForm.defaultProps = {
    expense: {
        description: '',
        createdAt: null,
        amount: null,
        note: '',
    },
};

ExpsenseForm.propTypes = {
    expense: PropTypes.shape({
        description: PropTypes.string,
        createdAt: PropTypes.number,
        amount: PropTypes.number,
        note: PropTypes.string,
    }),
    onSubmit: PropTypes.func.isRequired,
};
