import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Route,
    Switch,
    NavLink,
} from 'react-router-dom';
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

const EditExpensePage = () => (
    <div>
        Edit expense page.
    </div>
);

const HelpPage = () => (
    <div>
        Help page.
    </div>
);

const NotFoundPage = () => (
    <div>
        Not found 404!
    </div>
);

const Header = () => (
    <header>
        <h1>
            Expenses
        </h1>
        <p>
            <NavLink to="/" activeClassName="is-active" exact> Dashboard</NavLink>
            <NavLink to="/create" activeClassName="is-active" exact>Create</NavLink>
            <NavLink to="/edit" activeClassName="is-active" exact>Edit</NavLink>
            <NavLink to="/help" activeClassName="is-active" exact>Help</NavLink>
        </p>
    </header>
);

const routes = (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
