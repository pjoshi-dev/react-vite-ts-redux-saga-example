export const actionTypes = {
  USER_FETCH_REQUESTED: 'USER_FETCH_REQUESTED',
  USER_FETCH_SUCCESS: 'USER_FETCH_SUCCESS',
  USER_FETCH_FAILURE: 'USER_FETCH_FAILURE',
};

export const fetchUsersAction = (url: string) => {
  return { type: actionTypes.USER_FETCH_REQUESTED, payload: { url } };
};
export const fetchUsersSuccessAction = (users: any[]) => {
  return { type: actionTypes.USER_FETCH_SUCCESS, payload: { users } };
};
export const fetchUsersFailureAction = () => {
  return { type: actionTypes.USER_FETCH_FAILURE };
};
