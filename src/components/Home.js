import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';
import AlertMessage from "./common/AlertMessage";
import EventsList from "./common/EventsList";
import HomeList from "./common/HomeList";

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
    }
    componentDidMount = () => {
        console.log('Home page did mount');
        this.setState({
            cardTitle: 'New Events'
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

    render = () =>
    <div className="container mt-5">
        <div className="row">
            <div className="col-sm-4">
                <Card>
                    <CardTitle>{this.state.cardTitle}</CardTitle>
                    <CardBody>

                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <div className="d-flex justify-content-between align-items-center">
                            <Button color="success" onClick={this.incrementCount}>+</Button>
                            <span className="badge badge-pill badge-success">{this.state.count}</span>
                            <Button color="danger" onClick={this.decrementCount}>-</Button>
                        </div>
                        {this.getAlertMessage()}

                        <EventsList events={this.state.events}/>
                    </CardBody>
                </Card>
            </div>
            <div className="col-sm-8 mt-3 mt-md-0">
                <Card>
                    <CardTitle>Card title</CardTitle>
                    <CardBody>
                        <HomeList/>
                    </CardBody>
                </Card>

            </div>
        </div>
    </div>


}