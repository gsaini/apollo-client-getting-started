import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_BOOKS } from '../Books/queries';

export const ExchangeRates = () => {
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.books.map(({ title, author }) => (
    <div key={title}>
      <p>
        {title}: {author}
      </p>
    </div>
  ));
}