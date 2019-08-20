import React from 'react';
import axios from "axios";
import constants from "../constants";

export default class Player extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playerStats: []
            // isLoading: false,
            // isLoaded: false
        }
    }

//TODO
// extract player_name from this.props.match...
// create axios call, get and render data for the player

    componentDidMount = () => {
        this.getPlayerStats();
    };

    getPlayerStats = async () => {
        try {
            // this.setState({
            //     isLoading: true
            // });
            const response = await axios.get('https://apiv2.apifootball.com/', {
                params: {
                    action: 'get_players',
                    player_name: this.props.match.params.player_name,
                    APIkey: constants.apiKey
                }
            });
            console.log(response);
            this.setState({
                playerStats: response.data,
                // isLoading: false,
                // isLoaded: true,
                // collapse: !this.state.collapse
            })
        } catch (error) {
            console.error(error);
            // this.setState({
            //     isLoading: false
            // });
        }
    };

    render = () =>
        <div> test </div>
}