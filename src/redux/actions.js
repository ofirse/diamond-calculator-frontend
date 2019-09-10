import types from './types';

export function addFavoritePlayer(payload) {
    return {
        type: types.ADD_FAVORITE_PLAYER,
        payload
    }
};

export function removeFavoritePlayer(payload) {
    return {
        type: types.REMOVE_FAVORITE_PLAYER,
        payload
    }
};