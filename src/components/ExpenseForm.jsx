import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export default class ExpsenseForm extends React.Component {
    state = {
        description: '',
        note: '',
        amount: '',
        createdAt: moment(),
        calendarFocused: false,
        error: '',
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
        const { description, amount } = this.state;
        if (!description || !amount) {
            this.setState(() => ({ error: 'Please provide a description and amount.' }));
        } else {
            this.setState(() => ({ error: '' }));
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
            <div>
                {error && <p>{error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="Description"
                        value={description}
                        onChange={this.onDescriptionChange}
                    />
                    <input
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
                        placeholder="Add a note for your expense. (Optional)"
                        value={note}
                        onChange={this.onNoteChange}
                    />
                    <button type="submit">Add Expense</button>
                </form>
            </div>
        );
    }
}
