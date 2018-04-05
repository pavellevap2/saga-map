import { fetchAdresses } from '../managers/adressesManager'

import { put, call, select, takeEvery } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { getAdress } from '../selectors/inputSelectors'
import { loadAdresses } from '../actions/actions'
import { INPUT_ADRESS } from '../actions/actionTypes'

const loadFetchAdresses = function*() {
  yield delay(1200)
  const inputData = yield select(getAdress)
  const adressesList = yield call(fetchAdresses, inputData)
  yield put(loadAdresses(adressesList))
}

const watchLoadFetchAdresses = function*() {
  yield takeEvery(INPUT_ADRESS, loadFetchAdresses)
}
export default watchLoadFetchAdresses
