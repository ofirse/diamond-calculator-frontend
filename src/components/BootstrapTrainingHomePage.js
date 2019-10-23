import React from 'react';
import { Card, CardBody, CardTitle} from 'reactstrap';
import FavoritesContainer from "../container/FavoritesContainer";
import FavoriteTeamsContainer from "../container/FavoriteTeamsContainer";

export default class BootstrapTrainingHomePage extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         cardTitle: "Favorite Players",
    //     }
    // };

    render = () =>
       <diV>
            <div>
                <img src="https://www.babibet.com/mymedia/images/carousels/127/21955/en_EN/image.jpg" className="img-fluid" alt="Responsive image"/>
            </div>
            <div className="container">
                <div className="row">
                        <Card className="col-sm">
                            <CardTitle>GAMES</CardTitle>
                            <CardBody>
                                {/*<ul className="list-group list-group-flush">*/}
                                {/*    <li className="list-group-item">Cras justo odio</li>*/}
                                {/*    <li className="list-group-item">Dapibus ac facilisis in</li>*/}
                                {/*    <li className="list-group-item">Morbi leo risus</li>*/}
                                {/*    <li className="list-group-item">Porta ac consectetur ac</li>*/}
                                {/*    <li className="list-group-item">Vestibulum at eros</li>*/}
                                {/*</ul>*/}
                            </CardBody>
                        </Card>
                        <Card className="col-sm">
                            <CardTitle>TOP BETS</CardTitle>
                            <CardBody>
                                <FavoriteTeamsContainer/>
                            </CardBody>
                        </Card>
                        <Card className="col-sm">
                            <CardTitle>LAST MINUTE</CardTitle>
                            <CardBody>
                                <FavoriteTeamsContainer/>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-sm-8 mt-3 mt-md-0">
                        {/*<Card>*/}
                        {/*    <CardTitle className="mb-0">Competitions</CardTitle>*/}
                        {/*    <CountriesList/>*/}
                        {/*</Card>*/}
                    </div>
                </div>
       </diV>
}