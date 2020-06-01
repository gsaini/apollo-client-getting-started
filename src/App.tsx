import React from 'react';
import ExchangeRates from './components/ExchangeRates';
import logo from './logo.svg';
import './App.css';
import {
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Link to="/books">Books</Link>
        <Link to="/todos">Todos</Link>

        <ExchangeRates />
      </header>
    </div>
  );
}

export default App;
