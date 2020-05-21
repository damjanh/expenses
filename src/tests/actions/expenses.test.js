import {
    addExpense,
    editExpense,
    removeExpense,
} from '../../actions/expenses';

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
    const expenseData = {
        description: 'Description',
        amount: 887711,
        createdAt: 1000,
        note: 'Note',
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            ...expenseData,
        },
    });
});

test('Should setup add expense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0,
        },
    });
});
