'use strict';

import './style';
import { Link } from 'react-router';

export default class MenuItem extends React.Component {
  render() {
    return (
        <Link class="blog-nav-item" to={this.props.href} activeClassName = "active"> {this.props.children} </Link>
    );
  }
};