import { ADD_NEW_COORDINATES } from '../actions/actions'

const coordinates = (state = '', { type, payload }) => {
  switch (type) {
    case ADD_NEW_COORDINATES:
      return payload
    default:
      return state
  }
}
export default coordinates
