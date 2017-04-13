'use strict';



const initialState = [
  {
    id: 1,
    complete: false,
    visiable: true,
    text: 'Первое Дело'
  },
  {
    id: 2,
    complete: false,
    visiable: true,
    text: 'Второе Дело'
  },
  {
    id: 3,
    complete: false,
    visiable: true,
    text: 'Третье Дело'
  }
]

export default function reducer (state=initialState, action) {
  switch (action.type) {
    case 'ADD_TODO' :
      state = [
        ...state,
        action.payload
      ];
      break;
    case 'DONE' :
      state.map(
        item => { (item.id==action.payload.id) ? 
        (item.complete = !item.complete) : '' } 
      );
      state = [...state];
      break;
    case 'HIDE_DONE_TODO' :
      state.map( 
        item => { (item.complete) ? 
        (item.visiable = !item.visiable) : '' } 
      );
      state = [...state];
      break;
  }
  return state;
};