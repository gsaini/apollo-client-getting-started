import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_TODOS, UPDATE_TODO } from './gql';

export default function Todos() {
  const { loading, error, data } = useQuery(GET_TODOS);
  const [updateTodo] = useMutation(UPDATE_TODO);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      {
        data.todos.map(({ id, type }) => {
          let input;

          return (
            <div key={id}>
              <p>{type}</p>
              <form
                onSubmit={e => {
                  e.preventDefault();
                  updateTodo({ variables: { id, type: input.value } });

                  input.value = '';
                }}
              >
                <input
                  ref={node => {
                    input = node;
                  }}
                />
                <button type="submit">Update Todo</button>
              </form>
            </div>
          );
        })
      }
    </div>);
}