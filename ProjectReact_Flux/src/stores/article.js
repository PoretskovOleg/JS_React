import Dispatcher from '../dispatcher';
import { EventEmitter } from 'events';

import * as ActionTypes from '../constants/article';
import axios from 'axios';
import { autobind } from 'core-decorators';

@autobind()
class ArticleStore extends EventEmitter {
  constructor() {
    super();
    this.articles = [];
  }

  init() {
    this.emit(ActionTypes.DATA_LOADING);

    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then( ( response ) => { 
        this.articles = response.data;
        this.emit(ActionTypes.DATA_LOADED);
        this.emit('change');
      });
  }

  getArticles() {
    return this.articles.slice(0);
  }

  addArticle(article) {
    let articles = this.articles.slice(0);
    let lastId = articles[articles.length-1].id;
    article.id = ++lastId;
    articles.push(article);
    this.articles = articles;
    this.emit('change');
  }

  removeArticle(articleId) {
    let articles = this.articles.slice(0);
    articles = articles.filter( item => item.id != articleId);
    this.articles = articles;
    this.emit('change');
  }

  handleActions(action) {
    switch (action.type) {
      case ActionTypes.FETCH_DATA:
        this.init();
        break;
      case ActionTypes.ADD_ARTICLE:
        this.addArticle(action.payload);
        break;
      case ActionTypes.REMOVE_ARTICLE:
        this.removeArticle(action.payload);
        break;
      default:
        break;
    }
  }
};

const store = new ArticleStore();

Dispatcher.register(store.handleActions);

export default store;