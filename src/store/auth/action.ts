export const actionTypes = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGOUT: 'LOGOUT',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
};

export const login = () => {
  return { type: actionTypes.LOGIN_REQUEST };
};

export const loginSuccess = () => {
  return { type: actionTypes.LOGIN_SUCCESS };
};

export const logout = () => {
  return { type: actionTypes.LOGOUT };
};

export const logoutSuccess = () => {
  return { type: actionTypes.LOGOUT_SUCCESS };
};
