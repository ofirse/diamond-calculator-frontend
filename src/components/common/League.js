import React from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import constants from "../../constants";
import Team from "./Team";
import {Collapse} from "reactstrap";

export default class League extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isLoading: false,
            isLoaded: false,
            teams: [],
            filteredTeams: []
        }
    }

    getTeams = async () => {
        try {
            this.setState({
                isLoading: true
            });
            const response = await axios.get('https://apiv2.apifootball.com/', {
                params: {
                    action: 'get_teams',
                    league_id: this.props.leagueId,
                    APIkey: constants.apiKey
                }
            });
            console.log(response);
            this.setState({
                teams: response.data,
                filteredTeams: response.data,
                isLoading: false,
                isLoaded: true,
                collapse: !this.state.collapse
            })
        } catch (error) {
            console.error(error);
            this.setState({
                isLoading: false
            });
        }
    };

    toggle = () => {
        console.log(this.props.leagueId)
        if(!this.state.isLoaded) {
            this.getTeams();
        }
        else{
            this.setState(state => ({
                collapse: !state.collapse
            }));
        }
    };

    getTeamsList = () => {
        if( this.state.teams.length) {
            if(!this.state.filteredTeams[0].filteredPlayers) {
                this.state.filteredTeams.map((team) => {
                    team.filteredPlayers = team.players;
                });
            }

            const teamsList = this.state.filteredTeams.map((team, index) =>
                <Team key={index}
                      teamName={team.team_name}
                      teamBadge={team.team_badge}
                      players={team.filteredPlayers}
                      teamKey={team.team_key}/>
            );
            return teamsList;
        }
        return null;
    };

    filterPlayers = (team, inputValue) => {
      let filteredPlayers = team.players.filter((player) => {
          return player.player_name.toLocaleLowerCase().indexOf(inputValue) !== -1;
      });
      return filteredPlayers;
    };

    searchInputChange = (e) => {
        const inputValue = e.target.value.toLocaleLowerCase();
        let filteredTeams = this.state.teams.filter((team) => {
            const filteredPlayers = this.filterPlayers(team, inputValue);
            team.filteredPlayers = filteredPlayers;
            return filteredPlayers.length !== 0;
        });

        if(!inputValue){
            filteredTeams = this.state.teams;
        }
        this.setState({
            filteredTeams
        });
    };

    render = () =>
        <>
            <div onClick={this.toggle} className={"league-title " + (this.state.isLoading ? 'loader-circle-box-content loader-white loader-center' : '')}>{this.props.leagueName}</div>
            <Collapse isOpen={this.state.collapse} className="league-content">
                <div className="league-header p-3">
                    <div className="input-group">
                        <input type="text"
                               className="form-control"
                               placeholder="Search"
                               aria-label="Search"
                               onChange={this.searchInputChange}
                               aria-describedby="search-field"/>
                        <div className="input-group-append">
                            <span className="input-group-text" id="search-field">
                                <i className="fa fa-search"></i>
                            </span>
                        </div>
                    </div>
                </div>
                {this.getTeamsList()}
            </Collapse>
        </>
}
League.propTypes = {
    leagueName: PropTypes.string,
    leagueId: PropTypes.string
};