import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        const { editExpenseProp, history, expense: { id } } = this.props;
        editExpenseProp(id, expense);
        history.push('/');
    }

    onRemove = () => {
        const { removeExpenseProp, history, expense: { id } } = this.props;
        removeExpenseProp(id);
        history.push('/');
    }

    render() {
        const {
            expense,
        } = this.props;
        return (
            <div>
                <ExpenseForm
                    expense={expense}
                    onSubmit={this.onSubmit}
                />
                <button
                    type="submit"
                    onClick={this.onRemove}
                >
                    Remove
                </button>
            </div>
        );
    }
}

EditExpensePage.defaultProps = {
    expense: {
        note: '',
    },
};

EditExpensePage.propTypes = {
    editExpenseProp: PropTypes.func.isRequired,
    removeExpenseProp: PropTypes.func.isRequired,
    history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
    expense: PropTypes.shape({
        id: PropTypes.string.isRequired,
        createdAt: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        note: PropTypes.string,
    }),
};

const mapStateToProps = (state, props) => {
    const expense = state.expenses.find((exp) => exp.id === props.expense.id);
    return {
        expense,
    };
};

const mapDispatchToProps = (dispatch) => ({
    editExpenseProp: (id, expense) => dispatch(editExpense(id, expense)),
    removeExpenseProp: (id) => dispatch(removeExpense(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
