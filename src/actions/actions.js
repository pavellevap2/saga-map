import {
  INPUT_ADRESS,
  LOAD_ADRESSES,
  SELECT_ADRESS,
  LOAD_COORDINATES,
  ADD_NEW_COORDINATES,
} from './actionTypes'

export const inputNewAdress = adress => ({
  type: INPUT_ADRESS,
  payload: adress,
})

export const loadAdresses = adresses => ({
  type: LOAD_ADRESSES,
  payload: adresses,
})

export const selectAdress = adress => ({
  type: SELECT_ADRESS,
  payload: adress,
})

export const loadFetchCoordinates = adress => ({
  type: LOAD_COORDINATES,
  payload: adress,
})

export const addCoordinates = coordinates => ({
  type: ADD_NEW_COORDINATES,
  payload: coordinates,
})
