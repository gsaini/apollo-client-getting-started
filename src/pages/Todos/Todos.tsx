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

  return (
    <form className="Todo">
      {
        data.todos.map((todo: ToDo) => {
          return (
            <div className="Todo__list">
              <TodoItem todo={todo} onChange={({ id, completed }) => updateTodo({ variables: { id, completed } })} />
            </div>
          );
        })
      }
    </form>);
}