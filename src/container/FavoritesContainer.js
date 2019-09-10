import { connect } from 'react-redux';
import {addFavoritePlayer, removeFavoritePlayer } from '../redux/actions';

import React from 'react';

class FavoritesContainer extends React.Component {
    getPlayers = () => {
        const playersList = this.props.favoritePlayers.map((player, index) =>
            <div key={index} className="d-flex justify-content-between">
                <div className="d-flex align-items-center">
                    {player.player_name}
                </div>
                <div>{player.player_goals}</div>
                <div>{player.player_red_cards}</div>
            </div>
        );
        return playersList;
    };

    render = () =>
        <>
            {this.getPlayers()}
        </>
};

const mapStateToProps = (state) => {
    return {
        favoritePlayers: state.favoritePlayers
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        addFavoritePlayer: (value) => dispatch(addFavoritePlayer(value)),
        removeFavoritePlayer: (value) => dispatch(removeFavoritePlayer(value)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(FavoritesContainer);