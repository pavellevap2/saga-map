import { LOAD_ADRESSES } from '../actions/actionTypes'
import { handleAction } from 'redux-actions'

export const adresses = handleAction(
  [LOAD_ADRESSES],
  (state, { payload }) => payload,
  [],
)
export default adresses
