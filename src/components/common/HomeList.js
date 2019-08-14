import React from 'react';
import axios from 'axios';
import constants from "../../constants";
import League from "./League";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            competitions: []
        }
    }
    componentDidMount = () => {
        this.getCompetitions();
    };

    getCompetitions = async () => {
        try {
            const response = await axios.get('https://apiv2.apifootball.com/', {
                params: {
                    action: 'get_leagues',
                    country_id: 41,
                    APIkey: constants.apiKey
                }
            });
            console.log(response);
            this.setState({
                competitions: response.data
            })
        } catch (error) {
            console.error(error);
        }
    };

    getCompetitionsList()
    {
        const listItems = this.state.competitions.map((game, index) =>
            <li className="list-group-item" key={index}>
                {game.league_name}
            </li>
        );
        return listItems;
    }

    render = () =>
    <div className="container">
        <ul className="list-group ">
        {this.getCompetitionsList()}
        </ul>
    </div>

}