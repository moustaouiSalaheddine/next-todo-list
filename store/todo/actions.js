import {
  CREATE_TODO,
  CREATE_TODO_FIALD,
  CREATE_TODO_SUCCESS,
} from "./action-definitions";

export const createTodo = (data) => ({
  type: CREATE_TODO,
  payload: data,
});
export const createTodoSuccess = (data) => ({
  type: CREATE_TODO_SUCCESS,
  payload: data,
});
export const createTodoFaild = (data) => ({
  type: CREATE_TODO_FIALD,
  payload: data,
});
