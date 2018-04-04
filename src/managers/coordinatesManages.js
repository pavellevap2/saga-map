import { ENDPOINTS } from '../api'

export const fetchCoordinates = inputData => {
  return fetch(ENDPOINTS.getAdresses(inputData))
    .then(response => response.json())
    .then(
      data =>
        data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos,
    )
}
