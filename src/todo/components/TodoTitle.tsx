import { useTodos } from '../hooks/useTodos';

export const TodoTitle = () => {
  const { pendingTodos } = useTodos();

  return <h1>Todo: {pendingTodos}</h1>;
};
