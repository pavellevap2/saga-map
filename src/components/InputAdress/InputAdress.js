import React from 'react'
import AdressTip from '../AdressTip'
import * as R from 'ramda'
import styled from 'styled-components'
import search from './search.png'
import geo from './geo.svg'

const InputAdressContainer = styled.div`
  z-index: 99999;
  position: absolute;
  top: 4em;
  left: 1em;
`

const InputForm = styled.div`
  display: flex;
  border: 1px solid gray;
  width: 45vh;
`
const GeoBtn = styled.button`
  border: none;
  background-color: white;
  padding-right: 1em;
`

const InputIcon = styled.img`
  background-color: white;
  width: 2em;
  height: 2em;
`
const InputAdressName = styled.input`
  width: 100%;
  color: black;
  font-size: 1.1em;
  height: 1.7em;
  vertical-align: middle;
  font-weight: 200;
  padding: 0.4em 0;
  background-color: white !important;
  border: none;
`
const SearchBtn = styled.button`
  border: none;
  background-color: white;
`
const TipsList = styled.ul`
  background-color: white;
  padding: 0;
  margin: 0;
  width: 45vh;
  border: 1px solid gray;
`
const ClearInputBtn = styled.button`
  background-color: white;
  color: gray;
  font-size: 1.3em;
  border: none;
  margin-left: 0.3;
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

  goDown() {
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

  clearInput() {
    this.props.selectAdress('')
    this.closeTips()
  }
  onHoverTip(tipIndex) {
    this.setState({
      currTip: tipIndex,
    })
  }

  render() {
    const { adress, adresses, selectAdress, addCoordinates } = this.props
    const { isTipChoosen, currTip } = this.state
    const currAdress = R.path(
      ['GeoObject', 'metaDataProperty', 'GeocoderMetaData', 'text'],
      adresses[currTip],
    )

    return (
      <InputAdressContainer>
        <InputForm>
          <GeoBtn>
            <InputIcon src={geo} />
          </GeoBtn>
          <InputAdressName
            placeholder={'Введите адресс или место'}
            value={adress}
            onChange={e => this.inputAdress(e)}
            onKeyDown={e => {
              if (e.keyCode === 40) {
                currTip === adresses.length - 1
                  ? this.toTopOfList()
                  : this.goDown()
              } else if (e.keyCode === 38) {
                this.goUp()
              } else if (e.keyCode === 13) {
                this.selectCurrAdress(currAdress)
              }
            }}
          />
          {adress.length ? (
            <ClearInputBtn onClick={() => this.clearInput()}>x</ClearInputBtn>
          ) : null}
          <SearchBtn onClick={() => addCoordinates(adress)}>
            <InputIcon src={search} alt={'search'} />
          </SearchBtn>
        </InputForm>

        {!isTipChoosen ? (
          <TipsList>
            {adresses.map((adress, i) => (
              <AdressTip
                key={i}
                i={i}
                currTip={this.state.currTip}
                selectAdress={selectAdress}
                adress={adress}
                closeTips={() => this.closeTips()}
                onHoverTip={i => this.onHoverTip(i)}
              />
            ))}
          </TipsList>
        ) : null}
      </InputAdressContainer>
    )
  }
}

export default InputAdress
