import Header from "./Header";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PriceCalculator from "./PriceCalculator";

const Routers = () => {

    const getPage = () => {
            return (
                <>
                    <Header/>
                    <Route path="/" exact component={PriceCalculator} />
                </>
            );
    };

    return  <Router>
            {getPage()}
        </Router>
};

export default Routers;
