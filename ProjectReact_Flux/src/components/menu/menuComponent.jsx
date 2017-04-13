'use strict';

import './style';
import MenuItem from '../menuItem/menuItemComponent';

export default class Menu extends React.Component {
  render() {
    return (
      <div class="blog-masthead">
        <div class="container bg-info">
          <nav class="blog-nav">
            {this.props.items.map( (item, index) => 
              <MenuItem key={index} href = {item.href}> {item.item} </MenuItem>)}
          </nav>
        </div>
      </div>
    );
  }
};