import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {addFavoritePlayer, removeFavoritePlayer } from '../../redux/actions';

class Team extends React.Component {
    getPlayers = () => {
        if(!this.props.players){
            return null;
        }
        const playersList = this.props.players.map((player, index) =>
            <tr key={index}>
                <td>
                    <div className="d-flex align-items-center">
                        <i className="fa fa-signal mr-3" onClick={ () => this.navigateToPlayerDetails(player)}/>
                        <i className={"fa fa-star mr-3 toggle-favorite-player " + (this.props.favoritePlayers.indexOf(player) !== -1 ? 'active' : '')}
                           onClick={(e) => this.toggleFavoritePlayer(player, e)}/>
                        {player.player_name}
                    </div>
                </td>
                <td>{player.player_goals}</td>
                <td>{player.player_red_cards}</td>
            </tr>
        );
        return playersList;
    };

    toggleFavoritePlayer = (player, e) => {
        // Add a check if the player is already within the this.props.favoritePlayers
        // add or remove from favoritePlayers

        // Player not added to favorites so we add..
        if(this.props.favoritePlayers.indexOf(player) == -1) {
            this.props.addFavoritePlayer(player);
        } else {
            // Player was already added so we remove
            const index = this.props.favoritePlayers.indexOf(player);
            this.props.removeFavoritePlayer(index);
        }
    };


    navigateToPlayerDetails = (player) => {
        console.log(player, this.props.history);
        const playerName = player.player_name;
        this.props.history.push(`/player/${playerName}`);
    };

    render = () =>
        <>
            <div className="team-header p-3">
                <img src={this.props.teamBadge} alt="team Badge" className="team-logo mr-3"/>
                {this.props.teamName}
            </div>
            <table className="table table-striped table-dark">
                <thead>
                <tr>
                    <th>Player</th>
                    <th>Goals</th>
                    <th>Red Cards</th>
                </tr>
                </thead>
                <tbody>
                {this.getPlayers()}
                </tbody>
            </table>
        </>
};

Team.propTypes = {
    teamName: PropTypes.string,
    teamKey: PropTypes.string,
    teamBadge: PropTypes.string,
    players: PropTypes.array,
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

export default connect(mapStateToProps, mapDispatchToProps)(Team);


/*
* 1. Create proper actions and reducers for Favorite Teams -- V
* 2. Import and map redux state and actions to props -- V
* 3. You have to add star next to the team name and add onClick handler and check for the active class of that icon
* 4. You have to create a component like FavoritesContainer.js but for FavoritesTeams
* */