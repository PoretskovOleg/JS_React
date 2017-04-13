import * as ActionTypes from '../constants/article';

import Dispatcher from '../dispatcher';

function fetchArticles() {
  Dispatcher.dispatch({ type: ActionTypes.FETCH_DATA})
};

function addArticle({ body, title }) {
  let article = { body, title};
  Dispatcher.dispatch({ 
    type: ActionTypes.ADD_ARTICLE, 
    payload: article
  });
};

function removeArticle(articleId) {
    Dispatcher.dispatch({
        type: ActionTypes.REMOVE_ARTICLE,
        payload: articleId
    });
}

export {fetchArticles, addArticle, removeArticle};