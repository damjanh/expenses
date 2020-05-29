import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        const { startEditExpenseProp, history, expense: { id } } = this.props;
        startEditExpenseProp(id, expense);
        history.push('/');
    }

    onRemove = () => {
        const { startRemoveExpenseProp, history, expense: { id } } = this.props;
        startRemoveExpenseProp(id);
        history.push('/');
    }

    render() {
        const {
            expense,
        } = this.props;
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm
                        expense={expense}
                        onSubmit={this.onSubmit}
                    />
                    <button
                        className="button button--secondary"
                        type="submit"
                        onClick={this.onRemove}
                    >
                        Remove Expense
                    </button>
                </div>
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
    startEditExpenseProp: PropTypes.func.isRequired,
    startRemoveExpenseProp: PropTypes.func.isRequired,
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
    const expense = state.expenses.find((exp) => exp.id === props.match.params.id);
    return {
        expense,
    };
};

const mapDispatchToProps = (dispatch) => ({
    startEditExpenseProp: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpenseProp: (id) => dispatch(startRemoveExpense(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
