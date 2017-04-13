'use strict';

import User from '../user/userComponent';
import { Link } from 'react-router';

export default class UsersList extends React.Component {
  render() {
    if (this.props.is_loading) {
      return (
        <h1> ИДЕТ ЗАГРУЗКА... </h1>
      );
    };

    if (!Array.isArray(this.props.users)) {
      return (
        <h1> Идет ЗАГРУЗКА... </h1>
      );
    };

    if (this.props.error) {
      return (
        <h1> ОШИБКА ЗАГРУЗКИ </h1>
      );
    };

    let users = this.props.users.map( 
      (user, index) => <User key={index} {...user} />
    );

    return (
      <div>
        <h1> Список пользователей </h1>
        {users}
      </div>
    );
  }
};