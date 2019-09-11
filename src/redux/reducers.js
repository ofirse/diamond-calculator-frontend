import types from './types';
import { combineReducers } from "redux";

const favoritePlayers = (state = [], action) => {
    switch (action.type) {
        case types.ADD_FAVORITE_PLAYER: {
            return [...state, action.payload];
        }
        case types.REMOVE_FAVORITE_PLAYER: {
           state.splice(action.payload, 1);
           return [...state];
        }

        default: return state
    }
};

const favoriteTeams = (state = [], action) => {
    switch (action.type) {
        case types.ADD_FAVORITE_TEAM: {
            return [...state, action.payload];
        }
        case types.REMOVE_FAVORITE_TEAM: {
            state.splice(action.payload, 1);
            return [...state];
        }

        default: return state
    }
};

export default combineReducers({
    favoritePlayers,
    favoriteTeams
});