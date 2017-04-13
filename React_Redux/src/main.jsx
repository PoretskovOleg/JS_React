'use strict';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import TodoList from './components/todoList/todoListComponent';

const store = createStore(reducer);

let content = document.getElementById('content');

ReactDOM.render (
  <Provider store = {store} >
    <TodoList />
  </Provider>, 
  content);