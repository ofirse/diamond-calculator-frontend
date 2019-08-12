import React from 'react';

import { Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';


export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render = () =>
    <div className="container mt-5">
        <div className="row">
            <div className="col-4">
                <Card>
                    <CardTitle>Card title</CardTitle>
                    <CardBody>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button color="primary">Button</Button>
                    </CardBody>
                </Card>
            </div>
            <div className="col-8">
                <Card>
                    <CardTitle>Card title</CardTitle>
                    <CardBody>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button color="primary">Button</Button>
                    </CardBody>
                </Card>

            </div>
        </div>
    </div>
}