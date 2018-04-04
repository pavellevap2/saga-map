import React from 'react'
import InputAdressContainer from '../containers/InputAdressContainer'
import MapContainer from '../containers/MapContainer'
const Root = () => {
  return (
    <div>
      <InputAdressContainer />
      <MapContainer
        isMarkerShown={true}
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `600px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  )
}
export default Root
