export const INPUT_ADRESS = '@@INPUT_ADRESS/NEW_ADRESS'
export const LOAD_ADRESSES = '@@INPUT_ADRESS/LOAD_ADRESSES'
export const SELECT_ADRESS = `@@INPUT_ADRESS/SELECT_ADRESS`
export const ADD_NEW_COORDINATES = `@@INPUT_ADRESS/ADD_NEW_COORDINATES`
export const LOAD_COORDINATES = `@@INPUT/LOAD_COORDINATES`

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
