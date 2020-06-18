import { combineReducers } from 'redux'
import resultReducers from './resultReducers'
import levelReducers from './levelStageReducers'
const rootReducers = combineReducers({
    result: resultReducers,
    level: levelReducers
})

export default rootReducers