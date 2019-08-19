import React from 'react';
import PropTypes from 'prop-types';

export default class Team extends React.Component {
    getPlayers = () => {
        const playersList = this.props.players.map((player, index) =>
            <tr key={index}>
                <th/>
                <td>{player.player_name}</td>
                <td>{player.player_goals}</td>
                <td>{player.player_red_cards}</td>
            </tr>
        );
        return playersList;
    }

    render = () =>
        <>
            <table className="table table-striped table-dark">
                <thead>
                <tr>
                    <th>
                        <img src={this.props.teamBadge} alt="team Badge"/>
                        {this.props.teamName}
                    </th>
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
}

Team.propTypes = {
    teamName: PropTypes.string,
    teamKey: PropTypes.string,
    teamBadge: PropTypes.string,
    players: PropTypes.array
};