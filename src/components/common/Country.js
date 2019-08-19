import React from 'react';
import {Collapse} from 'reactstrap';
import PropTypes from 'prop-types';
import axios from "axios";
import constants from "../../constants";
import League from "./League";

export default class Country extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isLoading: false,
            isLoaded: false,
            leagues: []
        }
    }

    getLeagues = async () => {
        try {
            this.setState({
                isLoading: true
            });
            const response = await axios.get('https://apiv2.apifootball.com/', {
                params: {
                    action: 'get_leagues',
                    country_id: this.props.countryId,
                    APIkey: constants.apiKey
                }
            });
            console.log(response);
            this.setState({
                leagues: response.data,
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
        console.log(this.props.countryId)
        if(!this.state.isLoaded){
            this.getLeagues();
        }else{
            this.setState(state => ({
                collapse: !state.collapse
            }));
        }

    };

    getLeaguesList()
    {
        const leaguesList = this.state.leagues.map((league, index) =>
            <League key={index} leagueName={league.league_name} leagueId={league.league_id}/>
        );
        return leaguesList;
    }


    render = () =>
        <>
        <div onClick={this.toggle} className={"country-title " + (this.state.isLoading ? 'loader-circle-box-content loader-white loader-center' : '')}>{this.props.countryName}</div>
        <Collapse isOpen={this.state.collapse} className="country-content">
            {this.getLeaguesList()}
        </Collapse>
        </>
}
Country.propTypes = {
    countryName: PropTypes.string,
    countryId: PropTypes.string
};