import { all } from 'redux-saga/effects';

// Domain sagas
import AuthSaga from './auth/saga';

export default function* rootSaga() {
  yield all([
    AuthSaga(),
    // other domain sagas
  ]);
}
