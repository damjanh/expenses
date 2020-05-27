import {
    addExpense,
    editExpense,
    removeExpense,
    setExpenses,
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';


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

test('Should setup expense action with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses,
    });
});
