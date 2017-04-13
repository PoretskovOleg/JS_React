'use strict';

import { autobind } from 'core-decorators';
import { Link } from 'react-router';

export default class User extends React.Component {
  render() {
    return (
        <div class="panel panel-info">
          <div class="panel-heading">
            <h3 class="panel-title"> {this.props.name} </h3>
            <Link to={`users/${this.props.id}`} > Goto USER </Link>
          </div>
          <div class="panel-body">
            <p>
              Контактный телефон: {this.props.phone}
            </p>
            <p>
              Электронная почта: {this.props.email}
            </p>
          </div>
        </div>
    );
  } 
};