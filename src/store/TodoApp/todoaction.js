import {
    ADD_TODO,
    COMPLETE_TODO,
    DELETE_TODO,
    UPDATED_TODO,
  } from "./todo.action.type";


  export const addTodo = (payload) => ({ type: ADD_TODO, payload });
  export const completeTodo = (id) => ({ type: COMPLETE_TODO, payload: id });
  export const updateTodo = (payload) => ({ type: UPDATED_TODO, payload });
  export const deleteTodo = (id) => ({ type: DELETE_TODO, payload: id });
  