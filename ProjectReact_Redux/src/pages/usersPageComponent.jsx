'use strict';

import UsersList from '../components/usersList/usersListComponent';
import * as UserActions from '../actions/user';
import { connect } from 'react-redux';
import { autobind } from 'core-decorators';

@connect(
  store => {
    return {
      users: store.user.users,
      is_loading: store.user.users_is_loading,
      error: store.user.error
    }
  }
)
@autobind()
export default class UsersPage extends React.Component {
  constructor(props) {
    super(props); 
  
    this.props.dispatch(
      UserActions.fetchUser()
    )
  }

  render() {
    return (
      < UsersList 
        users = {this.props.users}
        is_loading = {this.props.is_loading}
        error = {this.props.error}
      />
    );
  }
};

UsersPage.propTypes = {
  users: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.object
  ]),
  is_loading: React.PropTypes.bool
};