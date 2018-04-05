import watchLoadFetchAdresses from './loadAdressesSaga'
import { all, call } from 'redux-saga/effects'
import watcherLoadCoordinates from './loadCoordinatesSaga'

const rootSaga = function*() {
  yield all([call(watchLoadFetchAdresses), call(watcherLoadCoordinates)])
}

export default rootSaga
