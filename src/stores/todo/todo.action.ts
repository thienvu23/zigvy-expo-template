import { createAction } from '@reduxjs/toolkit';

import { Todo } from './todo.type';

export const addTodo = createAction<Todo>('todos/add');
export const toggleTodo = createAction<number>('todos/toggle');
