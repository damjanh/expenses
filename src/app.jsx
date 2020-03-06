import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import 'normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
    <div>
        This is from dashboard component!
    </div>
);

const AddExpensePage = () => (
    <div>
        This is from add expense component!
    </div>
);

const NotFoundPage = () => (
    <div>
        Not found 404!
        <p>
            <Link to="/">Go home!</Link>
        </p>
    </div>
);

const routes = (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact />
            <Route path="/create" component={AddExpensePage} />
            <Route component={NotFoundPage} />
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
