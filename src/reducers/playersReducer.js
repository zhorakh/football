import {
    mainActionTypes,
} from "../actions/actionTypes"
import { initialStates } from "./initialState"

export default function reducer(state = initialStates.players, action) {
    switch (action.type) {
        case mainActionTypes.GET_PLAYERS: {
            const obj = initialStates.players[0]
            let result
            for(let key in obj) {
                if(key === action.payload) {
                    result = obj[key]
                    break
                }
            }
            return {
                ...state,
                players: result,
              }
        }
        default:
            return state
    }
}
