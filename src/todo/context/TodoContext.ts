import { createContext } from 'react';
import { ITodoState } from '../interfaces/interfaces';

export type TTodoContextProps = {
  todoState: ITodoState;
  toggleTodo: (id: string) => void;
};

export const TodoContext = createContext<TTodoContextProps>(
  {} as TTodoContextProps,
);
