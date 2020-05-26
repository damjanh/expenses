import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';
import {
    startAddExpense,
    addExpense,
    editExpense,
    removeExpense,
    setExpenses,
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';

const mockStore = configureStore([thunk]);

beforeEach((done) => {
    const expensesData = {};
    expenses.forEach(({
        id,
        description,
        note,
        amount,
        createdAt,
    }) => {
        expensesData[id] = {
            description,
            note,
            amount,
            createdAt,
        };
    });
    database.ref('expenses').set(expensesData).then(() => done());
});

test('Should setup remove expense action object', () => {
    const action = removeExpense('123');
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123',
    });
});

test('Should setup edit expense action object', () => {
    const action = editExpense('123', { amount: 10, note: 'Some note' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123',
        updates: {
            amount: 10,
            note: 'Some note',
        },
    });
});

test('Should setup add expense action object', () => {
    const action = addExpense(expenses[0]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[0],
    });
});

test('Should add expense to database and store', (done) => {
    const store = mockStore({});
    const expense = {
        description: expenses[0].description,
        note: expenses[0].note,
        amount: expenses[0].amount,
        createdAt: expenses[0].createdAt,
    };
    store.dispatch(startAddExpense(expense)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            id: expect.any(String),
            ...expense,
        });

        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expense);
        done();
    });
});

test('Should setup expense action with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses,
    });
});
