'use strict';

import * as ActionTypes from '../constants/user';
import axios from 'axios';

function fetchUser(userId) {
  let url = 'http://jsonplaceholder.typicode.com/users/';
  if (userId) { url += userId };
  return {
    type: ActionTypes.FETCH_USER,
    payload: axios.get(url)
  }
};

export { fetchUser }