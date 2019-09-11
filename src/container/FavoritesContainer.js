import { connect } from 'react-redux';
import {addFavoritePlayer, removeFavoritePlayer } from '../redux/actions';

import React from 'react';

class FavoritesContainer extends React.Component {
    getPlayers = () => {
        const playersList = this.props.favoritePlayers.map((player, index) =>
            <div key={index} className="d-flex justify-content-between border rounded py-1 px-3 mb-1 bg-white">
                <div className="d-flex align-items-center">
                    <i className="fa fa-male mr-2"></i>
                    {player.player_name}
                </div>
                <div className="d-flex">
                    <div className="mr-3">
                        <i className="fa fa-futbol-o mr-2"></i>
                        {player.player_goals}
                    </div>
                    <div className="mr-3">
                        <i className="fa fa-square red-cards mr-2"></i>
                        {player.player_red_cards}
                    </div>
                </div>
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