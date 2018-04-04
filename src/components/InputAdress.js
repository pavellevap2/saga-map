import React from 'react'

const InputAdress = ({
  adress,
  inputAdress,
  adresses,
  selectAdress,
  addCoordinates,
  coordinates,
}) => {
  return (
    <div>
      <input
        value={adress}
        onChange={e => inputAdress(e.target.value)}
        list="cityname"
      />

      <ul>
        {adresses.map((adress, i) => (
          <li
            key={i}
            onClick={() =>
              selectAdress(
                adress.GeoObject.metaDataProperty.GeocoderMetaData.text,
              )
            }
          >
            {adress.GeoObject.metaDataProperty.GeocoderMetaData.text}
          </li>
        ))}
      </ul>
      <button onClick={() => addCoordinates(adress)}>ПОИСК</button>
      <button onClick={() => console.log(coordinates)}>test</button>
    </div>
  )
}
export default InputAdress
