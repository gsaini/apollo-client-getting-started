import { gql } from '@apollo/client';

const EXCHANGE_RATES = gql`
  {
    books {
      title
      author
    }
  }
`;

export default EXCHANGE_RATES;