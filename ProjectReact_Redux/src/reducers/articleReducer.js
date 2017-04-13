'use strict';

import * as ActionTypes from '../constants/article';

let initialState = {
  articles_is_loading: false,
  articles: []
}


export default function article (state=initialState, action) {
  switch (action.type) {
    case ActionTypes.FETCH_DATA_PENDING : {
      state = {...state, articles_is_loading: true };
      break;
    }
    case ActionTypes.FETCH_DATA_FULFILLED : {
      state = {...state, articles_is_loading: false, articles: action.payload.data};
      break;
    }
    case ActionTypes.FETCH_DATA_REJECTED : {
      state = {...state, articles_is_loading: false, error: true, error_message: action.payload.message};
      break;
    }
    case ActionTypes.ADD_ARTICLE: {
      let articles = state.articles.slice(0);
      articles.push(action.payload);
      state = {...state, articles};
      break;
    }
    case ActionTypes.REMOVE_ARTICLE: {
      let articles = state.articles.filter( item => item.id != action.payload);
      state = {...state, articles};
      break;
    }
    case ActionTypes.ADD_LIKE : {
      let articles = state.articles.slice(0);
      let article = articles.find( item => item.id == action.payload );
      article.likes = article.likes ? ++article.likes : 1;
      state = {...state, articles};
      break;
    }
    case ActionTypes.GET_INFO : {
      let articles = state.articles.filter( item => item.userId == action.payload );
      state = {...state, articles};
      break;
    }
  }
  return state;
};