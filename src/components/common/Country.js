import React from 'react';
import {Collapse} from 'reactstrap';
import PropTypes from 'prop-types';

export default class Country extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false
        }
    }

    toggle = () => {
        console.log(this.props.countryId)
        this.setState(state => ({
            collapse: !state.collapse
        }));
    }

    render = () =>
        <>
        <div onClick={this.toggle} className="country-title">{this.props.countryName}</div>
        <Collapse isOpen={this.state.collapse} className="country-content">
            ..
        </Collapse>
        </>
}
Country.propTypes = {
    countryName: PropTypes.string,
    countryId: PropTypes.string
};