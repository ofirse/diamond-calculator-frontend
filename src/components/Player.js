import React from 'react';
import axios from "axios";
import constants from "../constants";
import {setPlayerData} from "../redux/actions";
import {connect} from "react-redux";
import {Card, CardBody, CardTitle} from "reactstrap";
import FavoritesContainer from "../container/FavoritesContainer";
import FavoriteTeamsContainer from "../container/FavoriteTeamsContainer";
import CountriesList from "./common/CountriesList";
import PropTypes from 'prop-types';
import GameList from "./common/GameList";


class Player extends React.Component {
    componentDidMount = () => {
        this.getPlayerStats();
    };

    getPlayerStats = async () => {
        try {
            const response = await axios.get('https://apiv2.apifootball.com/', {
                params: {
                    action: 'get_players',
                    player_name: this.props.playerName ? this.props.playerName : this.props.match.params.player_name,
                    APIkey: constants.apiKey
                }
            });

            console.log(response);
            this.props.setPlayerData(response.data[0]);

        } catch (error) {
            console.error(error);
        }
    };

    getPlayerData = () => {
        const playerData = this.props.playerData;
        return (
            <div>
                <p> Player Name: {playerData.playerName} </p>
                <p> Player Number: {playerData.playerNumber} </p>
                <p> Player Age: {playerData.playerAge} </p>
                <p> Player Country: {playerData.playerCountry} </p>
            </div>
        );
    };

    render = () =>
        <div className="container mt-5">
            <Card>
                <CardTitle>Player Information {this.props.playerName}</CardTitle>
                <CardBody>
                    {this.getPlayerData()}
                </CardBody>
            </Card>
        </div>
}

Player.propTypes = {
    playerName: PropTypes.string
};

const mapStateToProps = state => {
    return {
        playerData: state.playerData,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setPlayerData: value => dispatch(setPlayerData(value)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);