import types from './types';

export function addFavoritePlayer(player) {
    return {
        type: types.ADD_FAVORITE_PLAYER,
        payload: player
    }
};

export function removeFavoritePlayer(index) {
    return {
        type: types.REMOVE_FAVORITE_PLAYER,
        payload: index
    }
};