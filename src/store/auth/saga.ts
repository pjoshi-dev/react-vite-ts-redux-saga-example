import { all, put, takeEvery } from 'redux-saga/effects';

import { notification } from 'antd';

import { actionTypes, loginSuccess, logout, logoutSuccess } from './action';

function* loginSaga() {
  try {
    yield put(loginSuccess());
    notification.success({
      message: 'Welcome back!',
      description: 'You are login successful!',
      placement: 'topRight',
    });
    console.log('Login Successful');
  } catch (error) {
    console.error(error);
  }
}

function* logoutSaga() {
  try {
    yield put(logoutSuccess());
    notification.warning({
      message: 'Good bye!',
      description: 'Your account has been logged out!',
      placement: 'topRight',
    });
    console.log('Logout');
  } catch (error) {
    console.error(error);
  }
}

export default function* rootSaga() {
  yield all([takeEvery(actionTypes.LOGIN_REQUEST, loginSaga)]);
  yield all([takeEvery(actionTypes.LOGOUT, logoutSaga)]);
}
