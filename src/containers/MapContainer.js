import Map from '../components/Map'
import { connect } from 'react-redux'
import { getCoordinates } from '../selectors/mapSelectors'

const mapStateToProps = state => ({
  coordinates: getCoordinates(state),
})

export default connect(mapStateToProps)(Map)
