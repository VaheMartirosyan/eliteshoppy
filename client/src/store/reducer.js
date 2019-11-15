import {combineReducers} from  'redux'
import shopCardsReducer from './header/reducer'

export default combineReducers({
    shopCards:shopCardsReducer
})