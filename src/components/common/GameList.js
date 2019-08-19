import React from 'react';
import PropTypes from 'prop-types';
import League from './League';

export default class GameList extends React.Component {
    toggle = ev => {
        const temp = !ev.collapse;
        ev.collapse = temp;
    };

    getGamesList = () => {
        const listItems = this.props.games.map((game, index) =>
            <League key={index} isOpen={game.collapse} time={game.time} title={game.title}/>
        );
        return listItems
    };

    render = () =>
        <ul className="list-group mt-3">
            {/*{this.getGamesList()}*/}
        </ul>
}

GameList.propTypes = {
    events: PropTypes.array
};