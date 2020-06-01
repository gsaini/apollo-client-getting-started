import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import client from './apollo/client';
import Books from './components/Books';
import Todos from './components/Todos';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <Router>
      <Switch>
        
        <Route path="/books">
          <Books />
        </Route>
        <Route path="/todos">
          <Todos />
        </Route>
        <Route path="/">
          <App />
        </Route>
      </Switch>
      </Router>
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
