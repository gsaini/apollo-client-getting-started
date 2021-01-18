import { gql } from "@apollo/client";

export const TODO = gql`
  fragment todo on ToDo {
    id
    title
    completed
  }
`;
