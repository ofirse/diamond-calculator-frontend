import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';
import AlertMessage from "./common/AlertMessage";
import EventsList from "./common/EventsList";
import CountriesList from "./common/CountriesList";
import FavoritesContainer from "../container/FavoritesContainer";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cardTitle: "Events",
            count: 0,
            maxCount: 5,
            events: [
                {
                    title: "Test Event 1",
                    description: "Description 1"
                },
                {
                    title: "Test Event 2",
                    description: "Description 2"
                },
                {
                    title: "Test Event 3",
                    description: "Description 3"
                }
            ]
        }
    };

    componentDidMount = () => {
        console.log('Home page did mount');
        this.setState({
            cardTitle: 'Favorite Players'
        })
    };

    incrementCount = () => {
        const count = this.state.count + 1;
        this.setState({
            count
        })
        this.createNewEvent();
    };

    createNewEvent = () => {
        const newEvent = {
            title: "New event",
            description: "Test description"
        };

        const events = this.state.events;
        events.push(newEvent);
        this.setState({
            events
        })
    };

    removeLastEvent = () => {
        const events = this.state.events.slice(0, this.state.events.length - 1);
        this.setState({
            events
        })
    };

    decrementCount = () => {
        const count = this.state.count - 1;
        this.setState({
            count
        });

        this.removeLastEvent();
    };

    getAlertMessage = () => {
        if(this.state.count > this.state.maxCount){
            return <AlertMessage maxCount={this.state.maxCount} currentCount={this.state.count}/>
        }
        return null;
    };

    createNewFavoritePlayer = () => {
        const newFavoritePlayer = {
            title: "New event", // player's name
            //description: "Test description"
        };

        const FavoritePlayers = this.state.FavoritePlayers;
        FavoritePlayers.push(newFavoritePlayer);
        this.setState({
            FavoritePlayers
        })
    };

    render = () =>
    <div className="container mt-5">
        <div className="row">
            <div className="col-sm-4">
                {/*<Card>*/}
                {/*    <CardTitle>{this.state.cardTitle}</CardTitle>*/}
                {/*    <CardBody>*/}
                {/*        <CardSubtitle>Card subtitle</CardSubtitle>*/}
                {/*        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>*/}
                {/*        <div className="d-flex justify-content-between align-items-center">*/}
                {/*            <Button color="success" onClick={this.incrementCount}>+</Button>*/}
                {/*            <span className="badge badge-pill badge-success">{this.state.count}</span>*/}
                {/*            <Button color="danger" onClick={this.decrementCount}>-</Button>*/}
                {/*        </div>*/}
                {/*        {this.getAlertMessage()}*/}

                {/*        <EventsList events={this.state.events}/>*/}
                {/*    </CardBody>*/}
                {/*</Card>*/}
                <Card>
                    <CardTitle>{this.state.cardTitle}</CardTitle>
                    <CardBody>
                        <FavoritesContainer/>
                    </CardBody>
                </Card>
            </div>
            <div className="col-sm-8 mt-3 mt-md-0">
                <Card>
                    <CardTitle className="mb-0">Competitions</CardTitle>
                        <CountriesList/>
                </Card>
            </div>
        </div>
    </div>


}