'use strict';

import {connect} from 'react-redux';
import Todo from '../todo/todoComponent';
import * as Action from '../../actions';

import { autobind } from 'core-decorators';

@autobind()
class TodoList extends React.Component {

  addNewTodo() {
    let newTodo = this.refs.newTodo.value;
    this.refs.newTodo.value = '';
    this.props.dispatch( Action.addTodo(newTodo) );
  }

  done(todoId) {
    this.props.dispatch( Action.done(todoId) );
  }

  hideDoneTodo() {
    this.props.dispatch( Action.hideDoneTodo() );
  }

  render() {
    return (
      <div>
        <h2> Список дел </h2>
        <ul>
          { this.props.state.map( (item, index) => <Todo key={index} done={this.done} {...item} /> ) }
        </ul>
        <textarea ref="newTodo"></textarea>
        <br/>
        <button type="button" onClick={this.addNewTodo}> Добавить </button>
        <br/>
        <button type="button" onClick={this.hideDoneTodo}> Скрыть сделанные </button>
      </div>
    );
  }
};

export default connect(
    state => ({ state: state})
  )(TodoList);