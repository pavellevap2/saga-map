import React from 'react'

const InputAdress = ({ adress, inputAdress, adresses, selectAdress }) => {
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
    </div>
  )
}
export default InputAdress
