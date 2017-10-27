import React from 'react';
import { combineReducers } from 'redux';
import authenticationReducer from './authentication';

// state object
const rootReducer = combineReducers({
  authenticated: authenticationReducer
});

export default rootReducer;
