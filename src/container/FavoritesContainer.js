import { connect } from 'react-redux';
import {addFavoritePlayer, removeFavoritePlayer } from '../redux/actions';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Player from '../components/Player';

import React from 'react';

class FavoritesContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalOpened: false,
            selectedPLayerName: '',
        };
    }

    toggleModal = () => {
        this.setState( {
            modalOpened: !this.state.modalOpened
        });
    }

    setSelectedPlayerName = selectedPLayerName => {
        this.setState({
            modalOpened: true,
            selectedPLayerName
        })
        console.log('selected', selectedPLayerName)
    }

    getPlayers = () => {
        const playersList = this.props.favoritePlayers.map((player, index) =>
            <div key={index} className="d-flex justify-content-between border rounded py-1 px-3 mb-1 bg-white">
                <div className="d-flex align-items-center">
                    <i className="fa fa-male mr-2"></i>
                    {player.player_name}
                </div>
                <div className="d-flex">
                    <div className="mr-3">
                        <i className="fa fa-signal mr-3" onClick={() => this.setSelectedPlayerName(player.player_name)}/>
                        <i className="fa fa-futbol-o mr-2"></i>
                        {player.player_goals}
                    </div>
                    <div>
                        <i className="fa fa-square red-cards mr-2"></i>
                        {player.player_red_cards}
                    </div>
                    <div>
                        <i className="fa fa-ban remove-favorite-player ml-3" onClick={()=> this.props.removeFavoritePlayer(index)}></i>
                    </div>
                </div>
            </div>
        );
        return playersList;
    };

    render = () =>
        <>
            {this.getPlayers()}
            <Modal isOpen={this.state.modalOpened} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal} charCode="Y">Player Statistics</ModalHeader>
                <ModalBody>
                    <Player playerName={this.state.selectedPLayerName}/>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </>
};

const mapStateToProps = (state) => {
    return {
        favoritePlayers: state.favoritePlayers
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        addFavoritePlayer: (value) => dispatch(addFavoritePlayer(value)),
        removeFavoritePlayer: (value) => dispatch(removeFavoritePlayer(value)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(FavoritesContainer);