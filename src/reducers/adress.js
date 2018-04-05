import { INPUT_ADRESS, SELECT_ADRESS } from '../actions/actionTypes'
import { handleAction, combineActions } from 'redux-actions'

const adress = handleAction(
  combineActions(INPUT_ADRESS, SELECT_ADRESS),
  (state, { payload }) => payload,
  '',
)

export default adress
