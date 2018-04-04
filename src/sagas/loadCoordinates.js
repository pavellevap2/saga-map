import { fetchCoordinates } from '../managers/coordinatesManages'

import { put, call, select, takeEvery } from 'redux-saga/effects'
import { getAdress } from '../selectors/selectors'
import { addCoordinates, LOAD_COORDINATES } from '../actions/actions'

const loadCoordinates = function*() {
  const inputData = yield select(getAdress)
  const coordinates = yield call(fetchCoordinates, inputData)
  yield put(addCoordinates(coordinates))
}
const watcherLoadCoordinates = function*() {
  yield takeEvery(LOAD_COORDINATES, loadCoordinates)
}
export default watcherLoadCoordinates
