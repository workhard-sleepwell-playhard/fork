import { combineReducers } from 'redux'; // allows to crreate the root reducer

import {  userReducer } from './user/user.reducer';
export const rootReducer = combineReducers({
    user: userReducer   
})