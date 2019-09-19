import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {addFavoritePlayer, addFavoriteTeam, removeFavoritePlayer, removeFavoriteTeam} from '../../redux/actions';
import { withRouter } from "react-router";

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
                           onClick={(e) => this.toggleFavoritePlayer(player)}/>
                        {player.player_name}
                    </div>
                </td>
                <td>{player.player_goals}</td>
                <td>{player.player_red_cards}</td>
            </tr>
        );
        return playersList;
    };

    toggleFavoritePlayer = (player) => {
        // Player not added to favorites so we add..
        if(this.props.favoritePlayers.indexOf(player) === -1) {
            this.props.addFavoritePlayer(player);
        } else {
            // Player was already added so we remove
            const index = this.props.favoritePlayers.indexOf(player);
            this.props.removeFavoritePlayer(index);
        }
    };

    toggleFavoriteTeam = (team) => {
        if(this.props.favoriteTeams.indexOf(team) === -1) {
            this.props.addFavoriteTeam(team);
        } else {
            // Player was already added so we remove
            const index = this.props.favoriteTeams.indexOf(team);
            this.props.removeFavoriteTeam(index);
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
                <i className={"fa fa-star mr-3 toggle-favorite-player " + (this.props.favoriteTeams.indexOf(this.props.team) !== -1 ? 'active' : '')}
                   onClick={(e) => this.toggleFavoriteTeam(this.props.team)}/>
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
    team: PropTypes.object,
    teamName: PropTypes.string,
    teamKey: PropTypes.string,
    teamBadge: PropTypes.string,
    players: PropTypes.array,
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return {
        favoritePlayers: state.favoritePlayers,
        favoriteTeams: state.favoriteTeams
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        addFavoritePlayer: (value) => dispatch(addFavoritePlayer(value)),
        removeFavoritePlayer: (value) => dispatch(removeFavoritePlayer(value)),
        addFavoriteTeam: (value) => dispatch(addFavoriteTeam(value)),
        removeFavoriteTeam: (value) => dispatch(removeFavoriteTeam(value))
    };
};

const TeamWithRouter = withRouter(Team);

export default connect(mapStateToProps, mapDispatchToProps)(TeamWithRouter);