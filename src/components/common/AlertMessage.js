import React from 'react';
import PropTypes from 'prop-types';

export default class AlertMessage extends React.Component {
    render = () =>
    <div className={"alert mt-3 " + (this.props.currentCount > 10 ? 'alert-danger' : 'alert-info')} role="alert">
        Counter is greater than {this.props.maxCount}
    </div>
}

AlertMessage.propTypes = {
    maxCount: PropTypes.number,
    currentCount: PropTypes.number
};