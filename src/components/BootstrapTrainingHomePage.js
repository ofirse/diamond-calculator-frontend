import React from 'react';
import {Card, CardBody, CardTitle, NavLink} from 'reactstrap';
import {NavLink as RRNavLink} from "react-router-dom";
import { ReactComponent as Logo } from '../assets/img/logo.svg';

export default class BootstrapTrainingHomePage extends React.Component {
render = () =>
   <div>
        <div>
            <img src="https://www.babibet.com/mymedia/images/carousels/127/21955/en_EN/image.jpg" className="img-fluid" alt="Responsive image"/>
        </div>
        <div className="container bg-light mb-5">
            <div className="row">
                <Card className="border-top-0 border-right-0 border-left-0 col-sm">
                    <CardTitle className="h5">GAMES</CardTitle>
                    <CardBody>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Geisha</li>
                            <li className="list-group-item">Nuwa</li>
                            <li className="list-group-item">12 Zodiacs</li>
                        </ul>
                    </CardBody>
                </Card>
                <Card className="border-top-0 border-right-0 border-left-0 border-primaryMedium col-sm">
                    <CardTitle className="h5">SPORTS</CardTitle>
                    <CardBody>
                        Thousands of in-play and pre-match events with generous sport bonuses that ensure a great time!
                        <NavLink className="btn btn-outline-info mt-3" exact tag={RRNavLink} to="/sports">BET NOW</NavLink>
                    </CardBody>
                </Card>
                <Card className="border-top-0 border-right-0 border-left-0 border-primaryDark col-sm">
                    <CardTitle className="h5">AFFILIATE PROGRAM</CardTitle>
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
                <div className="mt-5">
                    <h3><strong>PROMOTIONS</strong></h3>
                    <div className="row mt-3">
                        <Card className="bg-transparent border-0 shadow-none col-sm">
                            <CardTitle className="mb-0 bg-light text-black">NBA PROMOTION WITH 100% UP TO 50€ FOR YOU!</CardTitle>
                            <CardBody>
                                NBA sports betting awaits you, and so does your 100% up to 50€ deposit bonus!
                            </CardBody>
                        </Card>
                        <Card className="bg-transparent border-0 shadow-none col-sm">
                            <CardTitle className="mb-0 bg-light text-black">500 € CASINO WELCOME BONUS!</CardTitle>
                            <CardBody>
                                Start your 18bet casino trip with a whopping 500 € bonus! If you are making your first steps with 18bet casino now,
                                we would like to give you a perfect start with a huge bonus your first deposit!
                            </CardBody>
                        </Card>
                        <Card className="bg-transparent border-0 shadow-none col-sm">
                            <CardTitle className="mb-0 bg-light text-black">GRAB A SHARE OF 200€ IN THIS SPOOKTACULAR TOURNAMENT!</CardTitle>
                            <CardBody>
                                The Halloween spirit hovers around and you also feel it, right? It only leaves cold chills behind him. Well, not only that actually...
                            </CardBody>
                        </Card>
                        <Card className="bg-transparent border-0 shadow-none col-sm">
                            <CardTitle className="mb-0 bg-light text-black">REQUEST YOUR PRIVATE SPORTS BONUS</CardTitle>
                            <CardBody>
                                You want a sports bonus? Do not hesitate to contact us and request your own personal one!
                            </CardBody>
                        </Card>
                    </div>
                </div>
        </div>
       <div className="page-footer bg-medium text-white mt-5">
           <div className="container text-md-right">
               <div className="row">
                   <div className="col-sm-2 mt-5">
                       <Logo width="166px"/>
                   </div>
                       <div className="col-sm-3 mt-5">
                           <h5 className="text-uppercase mb-3">SERVICES</h5>
                           <ul className="list-unstyled">
                               <li>
                                   <a href="#!">Promotions</a>
                               </li>
                               <li>
                                   <a href="#!">Results</a>
                               </li>
                           </ul>
                       </div>
                       <div className="col-sm-3 mt-5">
                           <h5 className="text-uppercase mb-3">INFORMATION</h5>
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
                       </div>
                   <div className="col-sm-3 mt-5">
                       <h5 className="text-uppercase mb-3">PLAY NOW</h5>
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
                   </div>
               </div>
           </div>
           <div className="footer-copyright text-center py-3 mt-3">© 2019 Copyright:
               <a href="#!"> someone</a>
           </div>
       </div>
   </div>
};

// couldn't set the headlines
// how to update font awesome version