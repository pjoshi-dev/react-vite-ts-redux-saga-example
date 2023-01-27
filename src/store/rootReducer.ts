import { combineReducers } from 'redux';

// Domain Reducers
import authReducer from './auth/reducer';
import usersReducer from './users/reducer';

const rootReducer = combineReducers({
  authReducer,
  usersReducer,
});

export default rootReducer;
