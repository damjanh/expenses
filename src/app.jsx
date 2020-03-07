import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './styles/styles.scss';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';

import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisbleExpense from './selectors/expenses';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill' }));
store.dispatch(addExpense({ description: 'Gas bill' }));
store.dispatch(setTextFilter('water'));

const state = store.getState();
const visible = getVisbleExpense(state.expenses, state.filters);
console.log(visible);

ReactDOM.render(<AppRouter />, document.getElementById('app'));
