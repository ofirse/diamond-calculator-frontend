import types from './types';
import {combineReducers} from "redux";

const favoritePlayers = (state = {favoritePlayers: [], filteredFavoritePlayers: [], isAToZ: false, isGoalsChecked: false, isRedCardsChecked: false}, action) => {
    switch (action.type) {
        case types.ADD_FAVORITE_PLAYER: {
            return {
                favoritePlayers: [...state.favoritePlayers, action.payload],
                filteredFavoritePlayers: [...state.favoritePlayers, action.payload],
                isGoalsChecked: false,
                isRedCardsChecked: false
            };
        }
        case types.REMOVE_FAVORITE_PLAYER: {
            state.favoritePlayers.splice(action.payload, 1);
            return {
                favoritePlayers: [...state.favoritePlayers],
                filteredFavoritePlayers: [...state.favoritePlayers],
                isGoalsChecked: false,
                isRedCardsChecked: false
            };
        }
        case types.SORT_FAVORITE_PLAYERS: {
            if(state.isAToZ) {
                state.favoritePlayers.reverse();
                state.filteredFavoritePlayers.reverse();
                return {...state, isAToZ: false};
            }
            else {
                state.favoritePlayers.sort(function (playerA, playerB) {
                    const nameA = playerA.player_name.toUpperCase(); // ignore upper and lowercase
                    const nameB = playerB.player_name.toUpperCase(); // ignore upper and lowercase
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                    // names must be equal
                    return 0;
                });
                state.filteredFavoritePlayers.sort(function (playerA, playerB) {
                    const nameA = playerA.player_name.toUpperCase(); // ignore upper and lowercase
                    const nameB = playerB.player_name.toUpperCase(); // ignore upper and lowercase
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                    // names must be equal
                    return 0;
                });
                return {...state, isAToZ: true};
            }
        }
        case types.FILTER_FAVORITE_PLAYERS_BY_GOALS: {
            if(state.isGoalsChecked) {
                if(state.isRedCardsChecked) {
                    let filteredPlayers = state.favoritePlayers.filter(player =>
                        player.player_red_cards > 0
                    );
                    return {
                        ...state,
                        filteredFavoritePlayers: filteredPlayers,
                        isRedCardsChecked: true,
                        isGoalsChecked: false
                    };
                }
                return {...state,
                    filteredFavoritePlayers: [...state.favoritePlayers],
                    isGoalsChecked: false,
                    isRedCardsChecked: false
                };
            }
            else {
                let filteredPlayers = state.filteredFavoritePlayers.filter(player =>
                    player.player_goals > 0
                );
                return {
                    ...state,
                    filteredFavoritePlayers: filteredPlayers,
                    isGoalsChecked: true};
            }
        }
        case types.FILTER_FAVORITE_PLAYERS_BY_RED_CARDS: {
            if(state.isRedCardsChecked) {
                if (state.isGoalsChecked) {
                    let filteredPlayers = state.favoritePlayers.filter(player =>
                        player.player_goals > 0
                    );
                    return {
                        ...state,
                        filteredFavoritePlayers: filteredPlayers,
                        isGoalsChecked: true,
                        isRedCardsChecked: false
                    };
                }
                return {
                    ...state,
                    filteredFavoritePlayers: [...state.favoritePlayers],
                    isRedCardsChecked: false,
                    isGoalsChecked: false
                };
            }
            else {
                let filteredPlayers = state.filteredFavoritePlayers.filter(player =>
                    player.player_red_cards > 0
                );
                return {
                    ...state,
                    filteredFavoritePlayers: filteredPlayers,
                    isRedCardsChecked: true};
            }
        }

        default:
            return state
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

        default:
            return state
    }
};

const userData = (state = {userLogged: false, email: ''}, action) => {
    switch (action.type) {
        case types.SET_USER_LOGGED: {
            return {...state, userLogged: action.payload};
        }
        case types.SET_USER_EMAIL: {
            return {...state, email: action.payload};
        }
        default:
            return state;
    }
};

const playerData = (state = {
    playerName: '',
    playerNumber: '',
    playerAge: '',
    playerCountry: ''
}, action) => {
    switch (action.type) {
        case types.SET_PLAYER_DATA: {
            if(action.payload) {
                return {
                    ...state,
                    playerName: action.payload.player_name,
                    playerNumber: action.payload.player_number,
                    playerAge: action.payload.player_age,
                    playerCountry: action.payload.player_country
                };
            }
            else {
                return state;
            }
        }
        default:
            return state;
    }
};

export default combineReducers({
    favoritePlayers,
    favoriteTeams,
    userData,
    playerData
});