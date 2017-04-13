'use strict';

import * as UserActions from '../actions/user';
import * as ArticleActions from '../actions/article';
import UserInfo from '../components/userInfo/userInfoComponent'
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { autobind } from 'core-decorators';

@connect(
  store => {
    return {
      articles: store.article.articles,
      articles_is_loading: store.article.articles_is_loading,
      user: store.user.users,
      user_is_loading: store.user.users_is_loading,
      error: store.user.error
    }
  }
)
@autobind()
export default class UserPage extends React.Component {
  constructor(props) {
    super(props); 
  
    this.props.dispatch(
      UserActions.fetchUser(this.props.params['userId'])
    )

    this.props.dispatch(
      ArticleActions.fetchArticles()
    )
  }

  render() {
    return (
      < UserInfo
        articles = {this.props.articles}
        user = {this.props.user}
        articles_is_loading = {this.props.articles_is_loading}
        user_is_loading = {this.props.user_is_loading}
      />
    );
  }
};

UserPage.propTypes = {
  articles: React.PropTypes.array,
  user: React.PropTypes.object,
  is_loading: React.PropTypes.bool
};