import { combineReducers } from 'redux'
import adress from './adress'
import adresses from './adresses'
import coordinates from './coordinates'

const rootReducer = combineReducers({
  adress,
  adresses,
  coordinates,
})
export default rootReducer
