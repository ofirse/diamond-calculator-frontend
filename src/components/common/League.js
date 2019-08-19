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
            teams: []
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
        if(!this.state.isLoaded){
            this.getTeams();
        }else{
            this.setState(state => ({
                collapse: !state.collapse
            }));
        }

    };

    getTeamsList = () => {
        if( this.state.teams.length) {
            const teamsList = this.state.teams.map((team, index) =>
                <Team key={index} teamName={team.team_name} teamBadge={team.team_badge} players={team.players} teamKey={team.team_key}/>
            );
            return teamsList;
        }
        return null;
    }


    render = () =>
        <>
            <div onClick={this.toggle} className={"league-title " + (this.state.isLoading ? 'loader-circle-box-content loader-white loader-center' : '')}>{this.props.leagueName}</div>
            <Collapse isOpen={this.state.collapse} className="league-content">
                {this.getTeamsList()}
            </Collapse>
        </>
}
League.propTypes = {
    leagueName: PropTypes.string,
    leagueId: PropTypes.string
};