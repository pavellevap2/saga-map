import InputAdress from '../components/InputAdress'
import { connect } from 'react-redux'
import { getAdress, getAdresses, getCoordinates } from '../selectors/selectors'
import {
  inputNewAdress,
  selectAdress,
  loadFetchCoordinates,
} from '../actions/actions'

const mapStateToProps = state => ({
  adress: getAdress(state),
  adresses: getAdresses(state),
  coordinates: getCoordinates(state),
})

const mapDispatchToProps = dispatch => ({
  inputAdress: adress => dispatch(inputNewAdress(adress)),
  selectAdress: adress => dispatch(selectAdress(adress)),
  addCoordinates: coordinates => dispatch(loadFetchCoordinates(coordinates)),
})

export default connect(mapStateToProps, mapDispatchToProps)(InputAdress)
