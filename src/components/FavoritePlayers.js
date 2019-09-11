import React from 'react';
import FavoritesContainer from "../container/FavoritesContainer";
export default class FavoritePlayers extends React.Component {

    render = () =>
        <div className="container">
            <div className="row">
                <div className="col mt-3">
                    <FavoritesContainer/>
                </div>
            </div>
        </div>

}