import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './reducers/authSlice';
import errorReducer from './reducers/errorSlice';
import userReducer from './reducers/userSlice';

const rootReducer = combineReducers({
    auth: authReducer,
    error: errorReducer,
    user: userReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>; 