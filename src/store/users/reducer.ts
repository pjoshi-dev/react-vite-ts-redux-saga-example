import { actionTypes } from './action';

export const initState = {
  users: [],
};

function reducer(state = initState, action: any) {
  switch (action.type) {
    case actionTypes.USER_FETCH_SUCCESS:
      console.log('Reducer: User Fetch Success!');
      return {
        ...state,
        users: action.payload.users,
      };
    case actionTypes.USER_FETCH_FAILURE:
      return {
        ...state,
        users: [],
      };
    default:
      return state;
  }
}

export default reducer;
