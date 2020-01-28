import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

import App from './App';

export default function RouterApp() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Todo</Link>
                        </li>
                        <li>
                            <Link to="/todo">???</Link>
                        </li>
                    </ul>
                </nav>
            <Switch>
                <Route path="/todo">
                    <About />
                </Route>
                <Route path="/">
                    <App />
                </Route>
            </Switch>
            </div>
        </Router>
    )
}

function About() {
    return <h2>About</h2>;
}