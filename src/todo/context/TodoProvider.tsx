import { TodoContext } from './TodoContext';
import { ITodoState } from '../interfaces/interfaces';
import { useReducer } from 'react';
import { todoReducer } from './TodoReducer';

const INITIAL_STATE: ITodoState = {
  todoCount: 2,
  todos: [
    {
      id: '1',
      desc: 'Dormir',
      completed: false,
    },
    {
      id: '2',
      desc: 'Estudiar react',
      completed: false,
    },
  ],
  completed: 0,
  pending: 2,
};

interface TodoProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const TodoProvider = ({ children }: TodoProviderProps) => {
  const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE);

  const toggleTodo = (id: string) => {
    console.log('toggleTodo', id);
    dispatch({ type: 'toggleTodo', payload: { id } });
  };

  return (
    <TodoContext.Provider value={{ todoState, toggleTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
