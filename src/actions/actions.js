export const INPUT_ADRESS = '@@INPUT_ADRESS/NEW_ADRESS'
export const LOAD_ADRESSES = '@@INPUT_ADRESS/LOAD_ADRESSES'
export const SELECT_ADRESS = `@@INPU_ADRESS/SELECT_ADRESS`

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
