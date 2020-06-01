import { gql } from '@apollo/client';

const GET_BOOKS = gql`
  {
    books {
      title
      author
    }
  }
`;

const ADD_BOOK = gql`
  mutation addBook($title: String!, $author: String!) {
    addBook(title: $title, author: $author) {
      title
      author
    }
  }
`;

export { GET_BOOKS, ADD_BOOK };