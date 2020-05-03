import { combineReducers } from 'redux'
import main from './playersReducer'
import teams from './teamsReducer'

const rootReducer = combineReducers({
    main,
    teams
})

export default rootReducer
