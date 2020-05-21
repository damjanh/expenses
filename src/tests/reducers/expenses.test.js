import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('Should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('Should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '2',
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([
        expenses[0],
        expenses[2],
    ]);
});

test('Should not remove expenses if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1',
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('Should add expense', () => {
    const newExpense = {
        id: '4',
        description: 'Description',
        note: '',
        amount: 1000,
        createdAt: moment(0).add(6, 'days'),
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense: newExpense,
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([
        ...expenses,
        newExpense,
    ]);
});

test('Should edit an expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '3',
        updates: {
            description: 'Mastercard',
        },
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([
        expenses[0],
        expenses[1],
        {
            id: expenses[2].id,
            description: 'Mastercard',
            amount: expenses[2].amount,
            note: expenses[2].note,
            createdAt: expenses[2].createdAt,
        },
    ]);
});

test('Should not edit an expense if id not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '10',
        updates: {
            description: 'American Express',
        },
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});
