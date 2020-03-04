import React from 'react';
import {ReactComponent as Logo} from "../assets/img/logo.svg";

const Footer = props => {

    const getServices = () => {
        return (
            <ul className="list-unstyled">
                <li>
                    <a href="#!">Promotions</a>
                </li>
                <li>
                    <a href="#!">Results</a>
                </li>
            </ul>
        );
    };

    const getInformation = () => {
        return (
            <ul className="list-unstyled">
                <li>
                    <a href="#!">About us</a>
                </li>
                <li>
                    <a href="#!">FAQ</a>
                </li>
                <li>
                    <a href="#!">Betting Rules</a>
                </li>
                <li>
                    <a href="#!">Terms & Conditions</a>
                </li>
                <li>
                    <a href="#!">Payment Methods</a>
                </li>
                <li>
                    <a href="#!">Contact us</a>
                </li>
            </ul>
        );
    };

    const getPlayNow = () => {
        return (
            <ul className="list-unstyled">
                <li>
                    <a href="#!">Live Casino</a>
                </li>
                <li>
                    <a href="#!">Casino</a>
                </li>
                <li>
                    <a href="#!">Games</a>
                </li>
            </ul>
        );
    };

    return <div className="page-footer bg-medium text-white">
            <div className="container text-md-right">
                <div className="row">
                    <div className="col-sm-2 mt-5">
                        <Logo width="166px"/>
                    </div>
                    <div className="col-sm-3 mt-5">
                        <h5 className="text-uppercase mb-3">SERVICES</h5>
                        {getServices()}
                    </div>
                    <div className="col-sm-3 mt-5">
                        <h5 className="text-uppercase mb-3">INFORMATION</h5>
                        {getInformation()}
                    </div>
                    <div className="col-sm-3 mt-5">
                        <h5 className="text-uppercase mb-3">PLAY NOW</h5>
                        {getPlayNow()}
                    </div>
                </div>
            </div>
            <div className="footer-copyright text-center py-3 mt-3">© 2019 Copyright:
                <a href="#!"> someone</a>
            </div>
        </div>
};

export default Footer