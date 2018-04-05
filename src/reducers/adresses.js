import { LOAD_ADRESSES } from '../actions/actionTypes'

export const adresses = (state = [], { type, payload }) => {
  switch (type) {
    case LOAD_ADRESSES:
      return payload
    default:
      return state
  }
}
export default adresses
