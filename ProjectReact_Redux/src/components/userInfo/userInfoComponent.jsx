'use strict';

import User from '../user/userComponent';
import { Link } from 'react-router';

export default class UserInfo extends React.Component {
  render() {
    if (this.props.articles_is_loading) {
      return (
        <h1> ИДЕТ ЗАГРУЗКА... </h1>
      );
    };

    if (this.props.user_is_loading) {
      return (
        <h1> Идет ЗАГРУЗКА... </h1>
      );
    };

    let articles = this.props.articles.filter(
      article => article.userId == this.props.user.id
    )

    let userArticles = articles.map( 
      (article, index) => <li key={index}> {article.title} </li>
    );

    return (
      <div>
        <h1> Статьи блогера {this.props.user.name} </h1>
        <ul>
          {userArticles}
        </ul>
      </div>
    );
  }
};