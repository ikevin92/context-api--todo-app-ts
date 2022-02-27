// import { useContext } from 'react';
// import { TodoContext } from '../context/TodoContext';
import { useTodos } from '../hooks/useTodos';
import { ITodo } from '../interfaces/interfaces';

interface TodoItemProps {
  todo: ITodo;
}

export const TodoItem = ({ todo }: TodoItemProps) => {
  // const { toggleTodo } = useContext(TodoContext);
  const { toggleTodo } = useTodos();

  return (
    <li
      style={{
        cursor: 'pointer',
        textDecoration: todo.completed ? 'line-through' : 'none',
      }}
      onDoubleClick={() => toggleTodo(todo.id)}>
      <p>{todo.desc}</p>
    </li>
  );
};
