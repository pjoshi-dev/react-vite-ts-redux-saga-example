import { all, call, put, takeEvery } from 'redux-saga/effects';

import { notification } from 'antd';

import { actionTypes, fetchUsersSuccessAction, fetchUsersFailureAction } from './action';

const fetchUsersFromAPI = (url: string) => {
  return fetch(url).then((response) => response.json());
  //   return fetch(url);
};

function* fetchUsers(action: any): any {
  try {
    console.log(action);
    const result = yield call(fetchUsersFromAPI, action.payload.url);
    console.log('Notify: User Fetch Successful', result);
    yield put(fetchUsersSuccessAction(result));
    notification.success({
      message: 'Success!',
      description: 'User Fetch Success!',
      placement: 'topRight',
    });
  } catch (error) {
    console.error(error);
    yield put(fetchUsersFailureAction());
    notification.error({
      message: 'Error!',
      description: 'User Fetch Failed!',
      placement: 'topRight',
    });
  }
}

export default function* rootSaga() {
  yield all([takeEvery(actionTypes.USER_FETCH_REQUESTED, fetchUsers)]);
}
