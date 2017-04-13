'use strict';

import MainLayout from './layout/mainLayoutComponent';
import IndexPage from './pages/indexPageComponent';
import ArticlesPage from './pages/ArticlesPageComponent';
import NotFoundPage from './pages/NotFoundPageComponent';
import {Router, Route, browserHistory, Redirect, IndexRoute} from 'react-router';

let content = document.getElementById('content');

ReactDOM.render(
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={IndexPage}/>
      <Route path="articles" component={ArticlesPage}/>
      {/* <Redirect from="*" to="/"></Redirect> */}
      <Route path="*" component={NotFoundPage} />
    </Route>
  </Router>,
  content);