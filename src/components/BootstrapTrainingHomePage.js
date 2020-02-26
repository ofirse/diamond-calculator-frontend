import React from 'react';
import {Card, CardBody, CardTitle, NavLink} from 'reactstrap';
import {NavLink as RRNavLink} from "react-router-dom";
import PromotionsList from './PromotionsList';
import Footer from "./Footer";
import MainCarousel from "./MainCarousel";

const BootstrapTrainingHomePage = props => {

    const getGames = () => {
        return (
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Geisha</li>
                <li className="list-group-item">Nuwa</li>
                <li className="list-group-item">12 Zodiacs</li>
            </ul>
        );
    };
    //TODO
    // Create bootstrap (Reactstrap) carousel here instead of the image
    return <>
        <div>
            <MainCarousel/>
            {/*<img src="https://www.babibet.com/mymedia/images/carousels/127/21955/en_EN/image.jpg" className="img-fluid" alt="Responsive img"/>}*/}
        </div>
        <div className="container bg-light my-5">
            <div className="row">
                <div className="col-md-4">
                    <Card className="border-top-0 border-right-0 border-left-0 col-sm h-100">
                        <CardTitle className="h5">GAMES</CardTitle>
                        <CardBody>
                            {getGames()}
                        </CardBody>
                    </Card>
                </div>
                <div className="col-md-4">
                    <Card className="border-top-0 border-right-0 border-left-0 border-primary-medium col-sm  h-100 ">
                        <CardTitle className="h5">SPORTS</CardTitle>
                        <CardBody className="d-flex flex-column">
                            Thousands of in-play and pre-match events with generous sport bonuses that ensure a great time!
                            <NavLink className="btn btn-outline-info mt-md-auto mt-3" exact tag={RRNavLink} to="/sports">BET NOW</NavLink>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-md-4">
                    <Card className="border-top-0 border-right-0 border-left-0 border-primary-dark col-sm h-100">
                        <CardTitle className="h5">AFFILIATE PROGRAM</CardTitle>
                        <CardBody>
                            Be a part of a winning team! Join the 18BET rewarding affiliate program and earn money for each of your referred customers. The more players you refer,
                            the higher you move up through the revenue share ranks.
                            <NavLink className="btn btn-outline-info mt-3" exact tag={RRNavLink} to="/">
                                <i className="fa fa-user-plus mr-3"/>
                                Sign up now!
                            </NavLink>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <PromotionsList/>
        </div>
        <Footer/>
   </>
};

export default BootstrapTrainingHomePage