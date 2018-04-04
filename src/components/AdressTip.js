import React from 'react'
import styled from 'styled-components'

const TipItem = styled.li`
  list-style: none;
`

const CurrentTip = styled.div`
  color: darkblue;
  border: 2px solid blue;
  width: 40%;
  padding: 0.35em;
  font-size: 1.3em;
  font-weight: bold;
  background-color: lightgray;
`
const NotCurrTip = styled.div`
  padding: 0.35em;
  font-size: 1.2em;
  font-weight: bold;
`

class AdressTip extends React.Component {
  render() {
    const { selectAdress, adress, closeTips, currTip, i } = this.props

    const adressName = adress.GeoObject.metaDataProperty.GeocoderMetaData.text
    return (
      <TipItem
        onClick={() => {
          selectAdress(adressName)
          closeTips()
        }}
      >
        {currTip === i ? (
          <CurrentTip>{adressName}</CurrentTip>
        ) : (
          <NotCurrTip>{adressName}</NotCurrTip>
        )}
      </TipItem>
    )
  }
}
export default AdressTip
