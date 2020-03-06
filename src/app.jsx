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

import AppRouter from './routers/AppRouter';

ReactDOM.render(<AppRouter />, document.getElementById('app'));
