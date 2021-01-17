import { gql } from "@apollo/client";

export const GET_BOOKS = gql`
  {
    books {
      title
      author
    }
  }
`;
