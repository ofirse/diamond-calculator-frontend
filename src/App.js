import React from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./components/Header";

const Index = () => (
    <h2>Test</h2>
)
const About = () => (
    <h2>About</h2>
)

const Users = () => (
    <h2>Users</h2>
)

const AppRouter = () => {
    return (
        <Router>
            <div>
                <Header/>
                <Route path="/" exact component={Index} />
                <Route path="/about/" component={About} />
                <Route path="/users/" component={Users} />
            </div>
        </Router>
    );
}

export default AppRouter;
