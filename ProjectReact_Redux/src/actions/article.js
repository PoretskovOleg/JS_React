'use strict';

import * as ActionTypes from '../constants/article';
import axios from 'axios';

function fetchArticles() {
  let url = 'https://jsonplaceholder.typicode.com/posts/';
  return {
        type: ActionTypes.FETCH_DATA,
        payload: axios.get(url)
    };
  /*return function(dispatch) {
    dispatch( { type: ActionTypes.FETCH_DATA} );

    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then( response => {
        dispatch ( { type: ActionTypes.DATA_LOADED, payload: response.data } );
      })
      .catch( error => {
        dispatch ( { type: ActionTypes.DATA_ERROR, payload: error } );
      });
  }*/
};

function addArticle({ body, title, id }) {
  let article = { body, title, id};

  return { 
    type: ActionTypes.ADD_ARTICLE, 
    payload: article
  };
};

function removeArticle(articleId) {
  return {
      type: ActionTypes.REMOVE_ARTICLE,
      payload: articleId
  };
}

function addLike(articleId) {
  return {
      type: ActionTypes.ADD_LIKE,
      payload: articleId
  };
}

export {fetchArticles, addArticle, removeArticle, addLike};