import { connect } from 'react-redux';
import {addFavoriteTeam, removeFavoriteTeam } from '../redux/actions';

import React from 'react';

class FavoriteTeamsContainer extends React.Component {
    getTeams = () => {
        const teamsList = this.props.favoriteTeams.map((team, index) =>
            <div key={index} className="d-flex justify-content-between border rounded py-1 px-3 mb-1 bg-white">
                <div className="d-flex align-items-center">
                    <i className="fa fa-users mr-3"/>
                    {team.team_name}
                </div>
                <div className="d-flex">
                    <div>
                        <i className="fa fa-ban remove-favorite-player ml-3" onClick={()=> this.props.removeFavoriteTeam(index)}/>
                    </div>
                </div>
            </div>
        );

        return teamsList;
    };

    render = () =>
        <>
            {this.getTeams()}
        </>
};

const mapStateToProps = (state) => {
    return {
        favoriteTeams: state.favoriteTeams
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        addFavoriteTeam: (value) => dispatch(addFavoriteTeam(value)),
        removeFavoriteTeam: (value) => dispatch(removeFavoriteTeam(value)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(FavoriteTeamsContainer);