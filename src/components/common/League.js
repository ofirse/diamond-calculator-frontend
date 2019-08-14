import React from 'react';
import PropTypes from 'prop-types';
import {
    Button,
    Card,
    CardBody,
    Collapse,
} from "reactstrap";

export default class League extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isOpen: false
        }
    }

    toggle = ev => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };
    componentDidMount() {
        this.setState({
            isOpen: this.props.isOpen
        })
    }

    render = () =>
        <li className="list-group-item">
            <div>
                <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>{this.props.title}</Button>
                <Collapse isOpen={this.state.isOpen}>
                    <Card>
                        <CardBody>
                            starts: {this.props.time}
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
        </li>
}

League.propTypes = {
    time: PropTypes.string
};