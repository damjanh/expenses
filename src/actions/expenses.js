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

const startAddExpense = (expenseData = {}) => (dispatch, getState) => {
    const { uid } = getState().auth;
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
    return database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
        dispatch(addExpense({
            id: ref.key,
            ...expense,
        }));
    });
};

const startSetExpenses = () => (dispatch, getState) => {
    const { uid } = getState().auth;
    return database.ref(`users/${uid}/expenses`).once('value').then((snapshot) => {
        const expenses = [];
        snapshot.forEach((child) => {
            expenses.push({
                id: child.key,
                ...child.val(),
            });
        });
        dispatch(setExpenses(expenses));
    });
};

const startRemoveExpense = (id) => (dispatch, getState) => {
    const { uid } = getState().auth;
    return database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
        dispatch(removeExpense(id));
    });
};

const startEditExpense = (id, updates) => (dispatch, getState) => {
    const { uid } = getState().auth;
    return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {
        dispatch(editExpense(id, updates));
    });
};

export {
    startAddExpense,
    addExpense,
    startRemoveExpense,
    removeExpense,
    startEditExpense,
    editExpense,
    startSetExpenses,
    setExpenses,
};
