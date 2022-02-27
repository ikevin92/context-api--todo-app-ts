import { ITodoState, ITodo } from '../interfaces/interfaces';

type TTodoAction =
  | { type: 'ADD_TODO'; payload: ITodo }
  | { type: 'toggleTodo'; payload: { id: string } };

export const todoReducer = (
  state: ITodoState,
  action: TTodoAction,
): ITodoState => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case 'toggleTodo':
      return {
        ...state,
        todos: state.todos.map(({ ...todo }) => {
          if (todo.id === action.payload.id) {
            todo.completed = !todo.completed;
          }
          return todo;
        }),
      };

    default:
      return state;
  }
};
