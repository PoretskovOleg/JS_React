'use strict';

import * as ActionTypes from '../constants/user';

let InitialState = {
  users_is_loading: false,
  users: [] 
};

export default function user (state = InitialState, action) {
  switch (action.type) {
    case ActionTypes.FETCH_USER_PENDING : {
      state = {...state, users_is_loading: true}
      break;
    }
    case ActionTypes.FETCH_USER_FULFILLED : {
      state = {...state, users_is_loading: false, users: action.payload.data};
      break;
    }
    case ActionTypes.FETCH_DATA_REJECTED : {
      state = {...state, users_is_loading: false, error: true, error_message: action.payload.message};
      break;
    }
  }
  return state;
};