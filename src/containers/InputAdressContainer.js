import InputAdress from '../components/InputAdress'
import { connect } from 'react-redux'
import { getAdress, getAdresses } from '../selectors/selectors'
import { inputNewAdress, selectAdress } from '../actions/actions'

const mapStateToProps = state => ({
  adress: getAdress(state),
  adresses: getAdresses(state),
})

const mapDispatchToProps = dispatch => ({
  inputAdress: adress => dispatch(inputNewAdress(adress)),
  selectAdress: adress => dispatch(selectAdress(adress)),
})

export default connect(mapStateToProps, mapDispatchToProps)(InputAdress)
