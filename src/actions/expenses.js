import database from '../firebase/firebase';

const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense,
});

const removeExpense = (id) => ({
    type: 'REMOVE_EXPENSE',
    id,
});

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates,
});

const setExpenses = (expenses = {}) => ({
    type: 'SET_EXPENSES',
    expenses,
});

const startAddExpense = (expenseData = {}) => (dispatch) => {
    const {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0,
    } = expenseData;
    const expense = {
        description,
        note,
        amount,
        createdAt,
    };
    return database.ref('expenses').push(expense).then((ref) => {
        dispatch(addExpense({
            id: ref.key,
            ...expense,
        }));
    });
};

const startSetExpenses = () => (dispatch) => database.ref('expenses').once('value').then((snapshot) => {
    const expenses = [];
    snapshot.forEach((child) => {
        expenses.push({
            id: child.key,
            ...child.val(),
        });
    });
    dispatch(setExpenses(expenses));
});


export {
    startAddExpense,
    addExpense,
    removeExpense,
    editExpense,
    startSetExpenses,
    setExpenses,
};
