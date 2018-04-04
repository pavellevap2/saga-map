import React from 'react'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps'

const Map = withScriptjs(
  withGoogleMap(props => (
    <div>
      <GoogleMap
        defaultZoom={12}
        defaultCenter={props.position}
        center={
          !props.position.lat && !props.position.lng
            ? props.userCoordinates
            : props.position
        }
      >
        {props.isMarkerShown && (
          <Marker
            position={
              !props.position.lat && !props.position.lng
                ? props.userCoordinates
                : props.position
            }
          />
        )}
      </GoogleMap>
    </div>
  )),
)

class MyMapComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lng: 0,
      lat: 0,
    }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.showMap)
  }

  showMap = position => {
    this.setState({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    })
  }

  render() {
    const { coordinates } = this.props
    let lng = coordinates.slice(0, coordinates.indexOf(' '))
    let lat = coordinates.slice(coordinates.indexOf(' ')).slice(1)
    const position = { lat: Number(lat), lng: Number(lng) }

    return (
      <Map
        position={position}
        isMarkerShown={true}
        userCoordinates={{ lat: this.state.lat, lng: this.state.lng }}
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    )
  }
}

export default MyMapComponent
