import {
  CREATE_TODO,
  CREATE_TODO_FIALD,
  CREATE_TODO_SUCCESS,
} from "./action-definitions";

const INIT_STATE = {
  todos: [],
  error: null,
  isLoading: false,
};

const TodoReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CREATE_TODO:
      return { ...state, error: null, isLoading: true };
    case CREATE_TODO_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false,
        todos: [...todos, action.payload],
      };
    case CREATE_TODO_FIALD:
      return { ...state, error: action.payload, isLoading: false };

    default:
      return { ...state };
  }
};
export default TodoReducer;
