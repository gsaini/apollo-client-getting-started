import { gql } from "@apollo/client";

export const EXCHANGE_RATES = gql`
  {
    books {
      title
      author
    }
  }
`;
