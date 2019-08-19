import React from 'react';
import axios from 'axios';
import constants from "../../constants";

import Country from './Country';

export default class CountriesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: []
        }
    }
    componentDidMount = () => {
        this.getCountries();
    };

    getCountries = async () => {
        try {
            const response = await axios.get('https://apiv2.apifootball.com/', {
                params: {
                    action: 'get_countries',
                    APIkey: constants.apiKey
                }
            });
            console.log(response);
            this.setState({
                countries: response.data
            })
        } catch (error) {
            console.error(error);
        }
    };

    getCountriesList()
    {
        const countriesList = this.state.countries.map((country, index) =>
            <Country key={index} countryName={country.country_name} countryId={country.country_id}/>
        );
        return countriesList;
    }

    render = () =>
        <>
            {this.getCountriesList()}
        </>

}