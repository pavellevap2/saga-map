import React from 'react'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps'

import styled from 'styled-components'

const MapContainer = styled.div`
  position: relative;
  z-index: -1;
`
const GoogleMapComponent = withScriptjs(
  withGoogleMap(props => (
    <MapContainer>
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
    </MapContainer>
  )),
)
export default GoogleMapComponent
