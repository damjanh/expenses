import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';

import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisbleExpense from './selectors/expenses';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill', amount: 3450 }));
store.dispatch(addExpense({ description: 'Gas bill', amount: 9340, createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 100830 }));

const state = store.getState();
const visible = getVisbleExpense(state.expenses, state.filters);
console.log(visible);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
