import { initialStates } from "./initialState"

export default function reducer(state = initialStates.teams, action) {
    switch (action.type) {
        default:
            return state
    }
}
