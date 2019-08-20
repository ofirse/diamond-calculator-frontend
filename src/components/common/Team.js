import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';

class Team extends React.Component {
    getPlayers = () => {
        const playersList = this.props.players.map((player, index) =>
            <tr key={index}>
                <td>
                    <i className="fa fa-signal mr-3" onClick={ () => this.navigateToPlayerDetails(player)}/>
                    {player.player_name}
                </td>
                <td>{player.player_goals}</td>
                <td>{player.player_red_cards}</td>
            </tr>
        );
        return playersList;
    }

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
export default withRouter(Team);