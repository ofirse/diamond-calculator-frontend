import React from 'react';
import PropTypes from 'prop-types';

export default class EventsList extends React.Component {
    getEventsList = () => {

        const listItems = this.props.events.map((event, index) =>
            <li className="list-group-item" key={index}>
                {event.title}
            </li>
        );
        return listItems
    };

    render = () =>
        <ul className="list-group mt-3">
            {this.getEventsList()}
        </ul>
}

EventsList.propTypes = {
    events: PropTypes.array
};

