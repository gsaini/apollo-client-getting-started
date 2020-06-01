import { gql } from "@apollo/client";

const GET_TODOS = gql`
  query GetTodos {
    todos {
      id
      type
    }
  }
`;

const UPDATE_TODO = gql`
  mutation UpdateTodo($id: String!, $type: String!) {
    updateTodo(id: $id, type: $type) {
      id
      type
    }
  }
`;

export { GET_TODOS, UPDATE_TODO };
