import {
  INPUT_ADRESS,
  LOAD_ADRESSES,
  SELECT_ADRESS,
  LOAD_COORDINATES,
  ADD_NEW_COORDINATES,
} from './actionTypes'
import { createAction } from 'redux-actions'

export const inputNewAdress = createAction(INPUT_ADRESS)

export const loadAdresses = createAction(LOAD_ADRESSES)

export const selectAdress = createAction(SELECT_ADRESS)

export const loadFetchCoordinates = createAction(LOAD_COORDINATES)

export const addCoordinates = createAction(ADD_NEW_COORDINATES)
