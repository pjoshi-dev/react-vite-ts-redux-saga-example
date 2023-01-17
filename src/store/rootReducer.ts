import { combineReducers } from 'redux';

// Domain Reducers
import authReducer from './auth/reducer';

const rootReducer = combineReducers({
  authReducer,
});

export default rootReducer;
