import { INPUT_ADRESS, SELECT_ADRESS } from '../actions/actions'

const adress = (state = '', { type, payload }) => {
  switch (type) {
    case INPUT_ADRESS:
      return payload
    case SELECT_ADRESS:
      return payload
    default:
      return state
  }
}
export default adress
