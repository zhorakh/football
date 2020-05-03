import { mainActionTypes } from './actionTypes'

export function getPlayers(name) {
    return dispatch => {
        dispatch({
            type: mainActionTypes.GET_PLAYERS,
            payload: name,
        })
    }
}
