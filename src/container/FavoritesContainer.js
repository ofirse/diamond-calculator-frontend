import { connect } from 'react-redux';
import {addFavoritePlayer, removeFavoritePlayer, sortFavoritePlayers, filterFavoritePlayersByGoals, filterFavoritePlayersByRedCards } from '../redux/actions';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import Player from '../components/Player';

import React from 'react';

class FavoritesContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalOpened: false,
            selectedPLayerName: '',
            isSortSelected: false,
            isGoalsSelected: false,
            isRedCardsSelected: false,
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
        const playersList = this.props.favoritePlayers.filteredFavoritePlayers.map((player, index) =>
            <div key={index} className="d-flex justify-content-between border rounded py-1 px-3 mb-1 bg-white">
                <div className="d-flex align-items-center">
                    <i className="fa fa-male mr-2"/>
                    {player.player_name}
                </div>
                <div className="d-flex">
                    <div className="mr-3">
                        <i className="fa fa-signal mr-3" onClick={() => this.setSelectedPlayerName(player.player_name)}/>
                        <i className="fa fa-futbol-o mr-2"/>
                        {player.player_goals}
                    </div>
                    <div>
                        <i className="fa fa-square red-cards mr-2"/>
                        {player.player_red_cards}
                    </div>
                    <div>
                        <i className="fa fa-ban remove-favorite-player ml-3" onClick={()=> this.props.removeFavoritePlayer(index)}/>
                    </div>
                </div>
            </div>
        );
        return playersList;
    };

    onSort = () => {
      this.setState({isSortSelected: !this.state.isSortSelected});
      this.props.sortFavoritePlayers();
    };

    onGoals = () => {
        this.setState({isGoalsSelected: !this.state.isGoalsSelected});
        this.props.filterFavoritePlayersByGoals();
    };

    onRedCard = () => {
        this.setState({isRedCardsSelected: !this.state.isRedCardsSelected});
        this.props.filterFavoritePlayersByRedCards();
    };

    render = () =>
        <>
            <button type="button" className={"btn btn-" + (this.state.isSortSelected ? 'link' : 'primary') + " btn-sm mr-3 mb-3"} disabled={this.props.favoritePlayers.favoritePlayers.length <= 0}
                    onClick={this.onSort}>Sort</button>
            <button type="button" className={"btn btn-" + (this.state.isGoalsSelected ? 'link' : 'primary') + " btn-sm mr-3 mb-3"} disabled={this.props.favoritePlayers.favoritePlayers.length <= 0}
                    onClick={this.onGoals}>Goals</button>
            <button type="button" className={"btn btn-" + (this.state.isRedCardsSelected ? 'link' : 'primary') + " btn-sm mr-3 mb-3"} disabled={this.props.favoritePlayers.favoritePlayers.length <= 0}
                    onClick={this.onRedCard}>Red Cards</button>
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
        sortFavoritePlayers: () => dispatch(sortFavoritePlayers()),
        filterFavoritePlayersByGoals: () => dispatch(filterFavoritePlayersByGoals()),
        filterFavoritePlayersByRedCards: () => dispatch(filterFavoritePlayersByRedCards()),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(FavoritesContainer);