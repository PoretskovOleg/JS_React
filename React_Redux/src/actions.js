'use strict';

let lastId = 4;

export function addTodo(text) {
  return {
    type: 'ADD_TODO', 
    payload: {
        id: lastId++,
        complete: false,
        visiable: true,
        text
    } 
  }
};

export function done(todoId) {
  return {
    type: 'DONE', 
    payload: {
        id: todoId
    } 
  }
};

export function hideDoneTodo() {
  return {
    type: 'HIDE_DONE_TODO'
    }
};