import React from 'react'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps'

const GoogleMapComponent = withScriptjs(
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
export default GoogleMapComponent
