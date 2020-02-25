import {useDispatch, useSelector} from 'react-redux';
import {removeFavoriteTeam } from '../redux/actions';
import React from 'react';

const FavoriteTeamsContainer = props => {

    const dispatch = useDispatch();
    const favoriteTeams = useSelector(state => state.favoriteTeams);

    const removeTeam = (index) => {
        dispatch(removeFavoriteTeam(index));
    };

    const getTeams = () => {
        const teamsList = favoriteTeams.map((team, index) =>
            <div key={index} className="d-flex justify-content-between border rounded py-1 px-3 mb-1 bg-white">
                <div className="d-flex align-items-center">
                    <i className="fa fa-users mr-3"/>
                    {team.team_name}
                </div>
                <div className="d-flex">
                    <div>
                        <i className="fa fa-ban remove-favorite-player ml-3" onClick={() => removeTeam(index)}/>
                    </div>
                </div>
            </div>
        );

        return teamsList;
    };

    return <>
            {getTeams()}
        </>
};

export default FavoriteTeamsContainer