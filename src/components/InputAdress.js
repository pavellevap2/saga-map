import React from 'react'
import AdressTip from './AdressTip'
import * as R from 'ramda'
import styled from 'styled-components'

const InputAdressContainer = styled.div`
  margin: 2em 1em;
`
const AdressForm = styled.div`
  display: flex;
`

const InputAdressName = styled.input`
  width: 85vh;
  color: blue;
  font-size: 1.3em;
  font-weight: 700;
  padding: 0.2em 0;
`
const SearchBtn = styled.button`
  border: 2px solid blue;
  background-color: white;
  color: blue;
  font-size: 1.2em;
  font-weight: bold;
  margin-left: 2.4em;
  padding: 0.5em 2em;
  background-color: lightgray;
  &:hover {
    transition: 2s;
    background-color: antiquewhite;
  }
`

class InputAdress extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isTipChoosen: false,
      currTip: -1,
    }
  }
  inputAdress(e) {
    this.props.inputAdress(e.target.value)
    this.setState({ isTipChoosen: false, currTip: -1 })
  }

  closeTips() {
    this.setState({
      isTipChoosen: !this.state.isTipChoosen,
    })
  }

  goDown(adress) {
    this.props.selectAdress(adress)
    this.setState({
      currTip: this.state.currTip + 1,
    })
  }

  goUp() {
    this.setState({ currTip: this.state.currTip - 1 })
  }

  toTopOfList() {
    this.setState({ currTip: 0 })
  }

  selectCurrAdress(adress) {
    this.props.selectAdress(adress)
    this.closeTips()
  }

  render() {
    const { adress, adresses, selectAdress, addCoordinates } = this.props
    const { isTipChoosen, currTip } = this.state
    const currAdress = n =>
      R.path(
        ['GeoObject', 'metaDataProperty', 'GeocoderMetaData', 'text'],
        adresses[currTip + n],
      )

    return (
      <InputAdressContainer>
        <AdressForm>
          <InputAdressName
            placeholder={'Введите адресс'}
            value={adress}
            onChange={e => this.inputAdress(e)}
            onKeyDown={e => {
              if (e.keyCode === 40) {
                currTip === adresses.length - 1
                  ? this.toTopOfList()
                  : this.goDown(currAdress(1))
              } else if (e.keyCode === 38) {
                this.goUp()
              } else if (e.keyCode === 13) {
                this.selectCurrAdress(currAdress(0))
              }
            }}
          />
          <SearchBtn onClick={() => addCoordinates(adress)}>ПОИСК</SearchBtn>
        </AdressForm>
        {!isTipChoosen ? (
          <ul>
            {adresses.map((adress, i) => (
              <AdressTip
                key={i}
                i={i}
                currTip={this.state.currTip}
                selectAdress={selectAdress}
                adress={adress}
                closeTips={() => this.closeTips()}
              />
            ))}
          </ul>
        ) : null}
      </InputAdressContainer>
    )
  }
}

export default InputAdress
