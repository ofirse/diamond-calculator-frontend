import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {addFavoritePlayer, addFavoriteTeam, removeFavoritePlayer, removeFavoriteTeam} from '../../redux/actions';
import { withRouter } from "react-router";

class Team extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currDirOfSort: "",
            isGoalsChecked: false,
            isRedCardsChecked: false,
            filteredPlayers: this.props.players,
        }
    }

    getPlayers = () => {
        if(!this.props.players){
            return null;
        }
        const playersList = this.state.filteredPlayers.map((player, index) =>
            <tr key={index}>
                <td>
                    <div className="d-flex align-items-center">
                        <i className="fa fa-signal mr-3" onClick={ () => this.navigateToPlayerDetails(player)}/>
                        <i className={"fa fa-star mr-3 toggle-favorite-player " + (this.props.favoritePlayers.favoritePlayers.indexOf(player) !== -1 ? 'active' : '')}
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
        if(this.props.favoritePlayers.favoritePlayers.indexOf(player) === -1) {
            this.props.addFavoritePlayer(player);
        } else {
            // Player was already added so we remove
            const index = this.props.favoritePlayers.favoritePlayers.indexOf(player);
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

    onSort = () => {
        const players = this.state.filteredPlayers;
        if(this.state.currDirOfSort === "AToz") {
            players.reverse();
            this.setState({ currDirOfSort: "zToA" });
        }
        else {
            players.sort(function (playerA, playerB) {
                const nameA = playerA.player_name.toUpperCase(); // ignore upper and lowercase
                const nameB = playerB.player_name.toUpperCase(); // ignore upper and lowercase
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                // names must be equal
                return 0;
            });

            this.setState({ currDirOfSort: "AToz" });
        }
    };

    onCheckGoals = () => {
        let filteredPlayers;
        if(this.state.isGoalsChecked) {
            this.setState({ isGoalsChecked: false });
            filteredPlayers = this.props.players;
            if(this.state.isRedCardsChecked) {
                filteredPlayers = this.filterByRedCards(this.props.players);
            }
        }
        else {
            filteredPlayers = this.filterByGoals(this.state.filteredPlayers);
        }

        this.setState({ filteredPlayers });
    };

    filterByGoals = (players) => {
        const filteredPlayers = players.filter(player =>
            player.player_goals > 0
        );
        this.setState({ isGoalsChecked: true });

        return filteredPlayers;
    };

    onCheckRedCards = () => {
        let filteredPlayers;
        if(this.state.isRedCardsChecked) {
            this.setState({ isRedCardsChecked: false });
            filteredPlayers = this.props.players;
            if(this.state.isGoalsChecked) {
                filteredPlayers = this.filterByGoals( this.props.players);
            }
        }
        else {
            filteredPlayers = this.filterByRedCards(this.state.filteredPlayers);
        }

        this.setState({ filteredPlayers });
    };

    filterByRedCards = (players) => {
        const filteredPlayers = players.filter(player =>
            player.player_red_cards > 0
        );
        this.setState({ isRedCardsChecked: true});

        return filteredPlayers;
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
                    <th>Player <button type="button" className="btn btn-primary btn-sm" onClick={this.onSort}>Sort</button></th>
                    <th>Goals  <input type="checkbox" onClick={this.onCheckGoals}/></th>
                    <th>Red Cards  <input type="checkbox" onClick={this.onCheckRedCards}/></th>
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