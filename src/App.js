import React from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Sports from "./components/Sports";
import Casino from "./components/Casino";



const HomeLayout = () =>
    <Home/>

const SportsLayout = () =>
    <Sports/>

const CasinoLayout = () =>
    <Casino/>

const AppRouter = () => {
    return (
        <Router>
            <div>
                <Header/>
                <Route path="/" exact component={HomeLayout} />
                <Route path="/sport/" component={SportsLayout} />
                <Route path="/casino/" component={CasinoLayout} />
            </div>
        </Router>
    );
}

export default AppRouter;
