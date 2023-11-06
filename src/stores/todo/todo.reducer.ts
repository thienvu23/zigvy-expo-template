import { createReducer } from '@reduxjs/toolkit';

import * as actions from './todo.action';
import { TodoState } from './todo.type';

const initState: TodoState = {
  todos: [],
};

export const todoReducer = createReducer(initState, (builder) => {
  builder
    .addCase(actions.addTodo, (state, action) => {
      const todo = action.payload;
      return {
        todos: [...state.todos, todo],
      };
    })
    .addCase(actions.toggleTodo, (state, action) => {
      const index = action.payload;
      const todo = state.todos[index];
      state.todos.splice(index, 1, { ...todo, completed: !todo.completed });

      return {
        todos: [...state.todos],
      };
    });
});
