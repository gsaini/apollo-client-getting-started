import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { client } from './apollo/client';
import { Todos } from './pages';
import { AbilityContext } from './rules/Can'
import ability from './rules/abilityBuilder'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

ReactDOM.render(
  <ApolloProvider client={client}>
    <AbilityContext.Provider value={ability}>
      <React.StrictMode>
        <Router>
          <Switch>
            <Route path="/todos">
              <Todos />
            </Route>
            <Route path="/">
              <App />
            </Route>
          </Switch>
        </Router>
      </React.StrictMode>
    </AbilityContext.Provider>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
