import { gql } from '@apollo/client';

const EXCHANGE_RATES = gql`
  {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

export default EXCHANGE_RATES;