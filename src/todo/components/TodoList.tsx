// import { useContext } from 'react';
// import { TodoContext } from '../context/TodoContext';
import { useTodos } from '../hooks/useTodos';
import { TodoItem } from './TodoItem';

export const TodoList = () => {
  // const { todoState } = useContext(TodoContext);
  // const { todos } = todoState;
  // el context lo tomamos desde el hook personalizado
  const { todos } = useTodos();

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};
