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
            leagues: [],
            filteredLeagues: []
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
                filteredLeagues: response.data,
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
        console.log(this.props.countryId);
        if (!this.state.isLoaded) {
            this.getLeagues();
        } else {
            this.setState(state => ({
                collapse: !state.collapse
            }));
        }

    };

    getLeaguesList() {
        if(this.state.filteredLeagues.length > 0) {
            const leaguesList = this.state.filteredLeagues.map((league, index) =>
                <League key={index} leagueName={league.league_name} leagueId={league.league_id}/>
            );

            return leaguesList;
        }

        return null;
    }

    searchInputChange = (e) => {
        const inputValue = e.target.value.toLocaleLowerCase();
        let filteredLeagues = this.state.leagues.filter((league) => {
            return league.league_name.toLocaleLowerCase().indexOf(inputValue) !== -1
        });
        if(!inputValue){
            filteredLeagues = this.state.leagues
        }
        this.setState({
            filteredLeagues
        })
    };

    render = () =>
        <>
            <div onClick={this.toggle}
                 className={"country-title " + (this.state.isLoading ? 'loader-circle-box-content loader-white loader-center' : '')}>{this.props.countryName}</div>
            <Collapse isOpen={this.state.collapse} className="country-content">
                <div className="country-header p-3">
                    <div className="input-group">
                        <input type="text"
                               className="form-control"
                               placeholder="Search"
                               aria-label="Search"
                               onChange={this.searchInputChange}
                               aria-describedby="search-field"/>
                        <div className="input-group-append">
                            <span className="input-group-text" id="search-field">
                                <i className="fa fa-search"/>
                            </span>
                        </div>
                    </div>
                </div>
                {this.getLeaguesList()}
            </Collapse>
        </>
}
Country.propTypes = {
    countryName: PropTypes.string,
    countryId: PropTypes.string
};