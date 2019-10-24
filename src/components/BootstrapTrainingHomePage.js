import React from 'react';
import {Card, CardBody, CardTitle, NavLink} from 'reactstrap';
import {NavLink as RRNavLink} from "react-router-dom";

export default class BootstrapTrainingHomePage extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         cardTitle: "Favorite Players",
    //     }
    // };

    render = () =>
       <div className="bg-light">
            <div>
                <img src="https://www.babibet.com/mymedia/images/carousels/127/21955/en_EN/image.jpg" className="img-fluid" alt="Responsive image"/>
            </div>
            <div className="container">
                <div className="row">
                    <Card className="border-top-0 border-right-0 border-left-0 col-sm">
                        <CardTitle>GAMES</CardTitle>
                        <CardBody>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Geisha</li>
                                <li className="list-group-item">Nuwa</li>
                                <li className="list-group-item">12 Zodiacs</li>
                            </ul>
                        </CardBody>
                    </Card>
                    <Card className="border-top-0 border-right-0 border-left-0 border-primaryMedium col-sm">
                        <CardTitle>SPORTS</CardTitle>
                        <CardBody>
                            Thousands of in-play and pre-match events with generous sport bonuses that ensure a great time!
                            <NavLink className="btn btn-outline-info mt-3" exact tag={RRNavLink} to="/sports">BET NOW</NavLink>
                        </CardBody>
                    </Card>
                    <Card className="border-top-0 border-right-0 border-left-0 border-primaryDark col-sm">
                        <CardTitle>AFFILIATE PROGRAM</CardTitle>
                        <CardBody>
                            Be a part of a winning team! Join the 18BET rewarding affiliate program and earn money for each of your referred customers. The more players you refer,
                            the higher you move up through the revenue share ranks.
                            <NavLink className="btn btn-outline-info mt-3" exact tag={RRNavLink} to="/sports">
                                <i className="fa fa-user-plus mr-3"/>
                                Sign up now!
                            </NavLink>
                        </CardBody>
                    </Card>
                </div>
                    <div className="col-sm-8 mt-3">
                        <Card className="bg-light border-0 shadow-none">
                            <CardTitle className="mb-0 bg-light text-black border-bottom border-primary w-25">Competitions</CardTitle>
                            <CardBody>
                            </CardBody>
                         </Card>
                    </div>
            </div>
       </div>
    };