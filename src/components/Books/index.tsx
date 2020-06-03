import React, { useRef } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_BOOKS, ADD_BOOK } from './gql';
import { Can } from '@casl/react';
import ability from './ability';
import { Author } from '../../rules/entities';

export default function Books() {
  const bookTitle = useRef(null);
  const bookAuthor = useRef(null);

  const { loading, error, data } = useQuery(GET_BOOKS);
  const [addBook] = useMutation(ADD_BOOK, {
    update(cache, { data: { addBook } }) {
      const { books }: any = cache.readQuery({ query: GET_BOOKS });

      cache.writeQuery({
        query: GET_BOOKS,
        data: {
          books: [...books, addBook]
        }
      });
    }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const handleSubmit = (event) => {
    event.preventDefault();
    const target = event.target;

    addBook({ variables: { title: target.title.value, author: target.author.value } });

    target.title.value = '';
    target.author.value = '';
  }

  const author = new Author({ isShowAuthor: data.books.length === 2 });

  return (
    <section>
      <ul>
        {
          data.books.map(({ title, author }) => (
            <li key={title}>
              {title}: {author}
            </li>
          ))
        }
      </ul>
      <form onSubmit={(e) => handleSubmit(e)} style={{ display: 'flex', flexDirection: 'row' }}>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" ref={bookTitle} />

          <label htmlFor="author">Book:</label>
          <input type="text" id="author" name="author" ref={bookAuthor} />

        <Can I="update" a={author} ability={ability}>
          {() => <button type="submit">Submit</button>}
        </Can>

      </form>
    </section>
  );
}