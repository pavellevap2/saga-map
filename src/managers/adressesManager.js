import { ENDPOINTS } from '../api'

export const fetchAdresses = inputData => {
  return fetch(ENDPOINTS.getAdresses(inputData))
    .then(response => response.json())
    .then(data => data.response.GeoObjectCollection.featureMember)
}
