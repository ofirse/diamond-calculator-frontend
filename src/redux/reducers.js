import types from './types';
import { combineReducers } from "redux";

const favoritePlayers = (state = [], action) => {
    switch (action.type) {
        case types.ADD_FAVORITE_PLAYER: {
            return [...state, action.payload];
        }
        case types.REMOVE_FAVORITE_PLAYER: {
           // return state - action.payload;
        }

        default: return state
    }
};

export default combineReducers({
    favoritePlayers
});