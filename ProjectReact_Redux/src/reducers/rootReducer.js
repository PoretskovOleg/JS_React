'use strict';

import article from './articleReducer';
import user from './userReducer';
import { combineReducers } from 'redux';

export default combineReducers ({
  article, user
});