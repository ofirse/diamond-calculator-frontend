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

export function addFavoriteTeam(team) {
    return {
        type: types.ADD_FAVORITE_TEAM,
        payload: team
    }
};

export function removeFavoriteTeam(index) {
    return {
        type: types.REMOVE_FAVORITE_TEAM,
        payload: index
    }
};

export function setUserLogged(isUserLogged) {
    return {
        type: types.SET_USER_LOGGED,
        payload: isUserLogged
    }
};

export function setUserEmail(email) {
    return {
        type: types.SET_USER_EMAIL,
        payload: email
    }
};

export function setPlayerData(player) {
    return {
        type: types.SET_PLAYER_DATA,
        payload: player
    }
};
