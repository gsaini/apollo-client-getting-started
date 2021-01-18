import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_TODOS, UPDATE_TODO } from "./queries";
import { TodoItem } from '../../components/TodoItem';
import { ToDo } from '../../types';
import './_todo.scss';

export const Todos = () => {
  const { loading, error, data } = useQuery(GET_TODOS);
  const [updateTodo] = useMutation(UPDATE_TODO);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  /**
   * Toggle Todo item.
   * @param todo todo item
   */
  const onToggleTaskItem = ({ id, completed }): void => {
    updateTodo({ variables: { id, completed } });
  }

  return (
    <form className="Todo">
      <div className="Todo__list">
        {
          data.todos.map((todo: ToDo) => {
            return (
              <TodoItem key={`item-${todo.id}`} todo={todo} onChange={onToggleTaskItem} />
            );
          })
        }
      </div>
    </form>);
}