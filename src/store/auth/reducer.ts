import { actionTypes } from './action';

export const initState = {
  isLoggedIn: false,
};

function reducer(state = initState, action: any) {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      console.log('Login Success in Reducer!');
      return {
        ...state,
        ...{ isLoggedIn: true },
      };
    case actionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        ...{ isLoggedIn: false },
      };
    default:
      return state;
  }
}

export default reducer;
