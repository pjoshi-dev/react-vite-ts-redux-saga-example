import { all } from 'redux-saga/effects';

// Domain sagas
import AuthSaga from './auth/saga';
import UsersSaga from './users/sagas';

export default function* rootSaga() {
  yield all([
    AuthSaga(),
    UsersSaga(),
    // other domain sagas
  ]);
}
