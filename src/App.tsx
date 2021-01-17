import React from 'react';
import logo from './logo.svg';
import {
  Link
} from "react-router-dom";
import { Can } from './rules/Can';
import { Article } from "./rules/entities";
import './App.css';
import { ExchangeRates } from './pages';

function App() {
  const article = new Article({ published: true });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p><a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Link to="/todos">Todos</Link>
        <Can I="read" a={article}>
          {() => <ExchangeRates />}
        </Can>
      </header>

    </div>
  );
}

export default App;
