import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css';
import './styles/styles.scss';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';

import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisbleExpense from './selectors/expenses';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill', amount: 3450 }));
store.dispatch(addExpense({ description: 'Gas bill', amount: 9340 }));
store.dispatch(setTextFilter('water'));

const state = store.getState();
const visible = getVisbleExpense(state.expenses, state.filters);
console.log(visible);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
