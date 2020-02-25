import React from 'react';
import axios from "axios";
import constants from "../constants";
import {setPlayerData} from "../redux/actions";
import {connect } from "react-redux";
import {Card, CardBody, CardTitle} from "reactstrap";
import PropTypes from 'prop-types';
import PlayerData from "./PlayerData";

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

    render = () =>
        <div className="container mt-5">
            <Card>
                <CardTitle>Player Information</CardTitle>
                <CardBody>
                    <PlayerData playerData={this.props.playerData}/>
                </CardBody>
            </Card>
        </div>
}

Player.propTypes = {
    selectedPlayerName: PropTypes.string
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