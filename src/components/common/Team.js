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
                        <i className="fa fa-star mr-3" onClick={() => this.OnAddFavoritePlayer(player)}></i>
                        {player.player_name}
                    </div>
                </td>
                <td>{player.player_goals}</td>
                <td>{player.player_red_cards}</td>
            </tr>
        );
        return playersList;
    };

    OnAddFavoritePlayer = (player) => {
        this.props.addFavoritePlayer(player);
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