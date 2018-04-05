import React from 'react'
import styled from 'styled-components'
import earth from './earth.svg'
import redEarth from './redEarth.svg'

const TipItem = styled.li`
  list-style: none;
`

const CurrentTip = styled.div`
  font-size: 0.9em;
  background-color: darkgray;
  font-weight: 300;
  padding: 0.9em;
  overflow: hidden;
  white-space: nowrap;
  margin-left: 1em;
  text-overflow: ellipsis;
`
const NotCurrItem = styled.div`
  font-size: 0.9em;
  font-weight: 300;
  padding: 0.9em;
  white-space: nowrap;
  overflow: hidden;
  margin-left: 1em;
  text-overflow: ellipsis;
`
const EarthIcon = styled.img`
  height: 1em;
  width: 1em;
  background-color: white;
`
const RedEarthIcon = styled.img`
  height: 1.3em;
  width: 1.3em;
  background-color: darkgray;
`

class AdressTip extends React.Component {
  render() {
    const {
      selectAdress,
      adress,
      closeTips,
      currTip,
      i,
      onHoverTip,
    } = this.props

    const adressName = adress.GeoObject.metaDataProperty.GeocoderMetaData.text
    return (
      <TipItem
        onClick={() => {
          selectAdress(adressName)
          closeTips()
        }}
        onMouseEnter={() => onHoverTip(i)}
      >
        {currTip === i ? (
          <CurrentTip>
            <RedEarthIcon src={redEarth} /> {adressName}
          </CurrentTip>
        ) : (
          <NotCurrItem>
            {' '}
            <EarthIcon src={earth} /> {adressName}
            {adressName}
          </NotCurrItem>
        )}
      </TipItem>
    )
  }
}
export default AdressTip
