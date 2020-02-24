import React from 'react';
import {removeFavoritePlayer} from "../redux/actions";
import {useDispatch} from "react-redux";

const FunctionalFavoritePlayer = props => {

    const dispatch = useDispatch();

    const removePlayer = () => {
        dispatch(removeFavoritePlayer(props.index));
    };

    return <div className="d-flex justify-content-between border rounded py-1 px-3 mb-1 bg-white">
        <div className="d-flex align-items-center">
            <i className="fa fa-male mr-2"/>
            {props.player.player_name}
        </div>
        <div className="d-flex">
            <div className="mr-3">
                <i className="fa fa-signal mr-3" onClick={props.showPlayerDetails}/>
                <i className="fa fa-futbol-o mr-2"/>
                {props.player.player_goals}
            </div>
            <div>
                <i className="fa fa-square red-cards mr-2"/>
                {props.player.player_red_cards}
            </div>
            <div>
                <i className="fa fa-ban remove-favorite-player ml-3" onClick={removePlayer}/>
            </div>
        </div>
    </div>

};

export default FunctionalFavoritePlayer