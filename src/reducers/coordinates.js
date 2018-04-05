import { ADD_NEW_COORDINATES } from '../actions/actionTypes'
import { handleAction } from 'redux-actions'

const coordinates = handleAction(
  [ADD_NEW_COORDINATES],
  (state, { payload }) => payload,
  '',
)
export default coordinates
