import { combineReducers } from 'redux'
import adress from './adress'
import adresses from './adresses'

const rootReducer = combineReducers({
  adress,
  adresses,
})
export default rootReducer
