'use strict';

import MainLayout from './layout/mainLayoutComponent';
import IndexPage from './pages/indexPageComponent';
import ArticlesPage from './pages/articlesPageComponent';
import UsersPage from './pages/usersPageComponent';
import NotFoundPage from './pages/notFoundPageComponent';
import UserPage from './pages/userPageComponent';

import {Router, Route, browserHistory, Redirect, IndexRoute} from 'react-router';
import { Provider } from 'react-redux';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import reducer from './reducers/rootReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

let content = document.getElementById('content');
const store = createStore(
  reducer,
  applyMiddleware(promise(), thunk, logger)
  );

ReactDOM.render(
  <Provider store = {store} >
    <Router history={browserHistory}>
      <Route component={MainLayout}>
        <Route path="/" component={IndexPage}/>
        <Route path="/articles" component={ArticlesPage}/>
        <Route path="/users" component={UsersPage}/>
        <Route path="/users/:userId" component={UserPage}/>
        {/* <Redirect from="*" to="/"></Redirect> */}
        <Route path="*" component={NotFoundPage} />
      </Route>
    </Router>
  </Provider>,
  content);