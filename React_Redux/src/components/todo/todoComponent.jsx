'use strict';

import './style';
import { autobind } from 'core-decorators';

@autobind()
export default class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

  done() {
    this.props.done(this.props.id)
  }

  render() {
    return (
      <li class = {`${this.props.complete ? "done" : null} ${!this.props.visiable ? "hide" : "show"}` }
        onClick={this.done}>

        Дело № {this.props.id} - {this.props.text}

      </li>
    );
  }
};