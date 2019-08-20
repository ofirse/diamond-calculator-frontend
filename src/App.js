import React from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Sports from "./components/Sports";
import Casino from "./components/Casino";
import Player from "./components/Player";


const HomeLayout = props =>
    <Home {...props}/>

const SportsLayout = props =>
    <Sports {...props}/>

const CasinoLayout = props =>
    <Casino {...props}/>

const PlayerLayout = props => {
    return <Player {...props} />
}

const AppRouter = () => {
    return (
        <Router>
            <div>
                <Header/>
                <Route path="/" exact component={HomeLayout} />
                <Route path="/sports/" component={SportsLayout} />
                <Route path="/casino/" component={CasinoLayout} />
                <Route path="/player/:player_name" component={PlayerLayout}/>
            </div>
        </Router>
    );
}

export default AppRouter;
