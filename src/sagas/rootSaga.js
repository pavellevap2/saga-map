import watchLoadFetchEvents from './loadEventsSaga'
import { all, call } from 'redux-saga/effects'
import watcherLoadCoordinates from './loadCoordinates'

const rootSaga = function*() {
  yield all([call(watchLoadFetchEvents), call(watcherLoadCoordinates)])
}

export default rootSaga
