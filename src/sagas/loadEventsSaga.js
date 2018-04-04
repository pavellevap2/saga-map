import { fetchAdresses } from '../managers/adressesManager'

import { put, call, select, takeEvery } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { getAdress } from '../selectors/selectors'
import { loadAdresses, INPUT_ADRESS } from '../actions/actions'

const loadFetchEvents = function*() {
  yield delay(1200)
  const inputData = yield select(getAdress)
  const adressesList = yield call(fetchAdresses, inputData)
  yield put(loadAdresses(adressesList))
}

const watchLoadFetchEvents = function*() {
  yield takeEvery(INPUT_ADRESS, loadFetchEvents)
}
export default watchLoadFetchEvents
