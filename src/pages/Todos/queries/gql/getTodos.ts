import { gql } from "@apollo/client";
import { TODO } from "../fragments";

export const GET_TODOS = gql`
  query GetTodos {
    todos {
      ...todo
    }
  }
  ${TODO}
`;
