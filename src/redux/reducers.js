import types from './types';

const FavoritePlayers = (state = [], action) => {
    switch (action.type) {
        case types.ADD_FAVORITE_PLAYER: {
            console.log(action)
            debugger
            return state.push(action.payload);
        };
        case types.REMOVE_FAVORITE_PLAYER: {
           // return state - action.payload;
        };
        default: return state
    }
};

export default FavoritePlayers;