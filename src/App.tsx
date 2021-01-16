import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="paragraph-cls">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ex perferendis maxime voluptatem molestiae? Qui cupiditate asperiores ipsa nesciunt, iusto minima voluptatem alias sit porro sunt ad veritatis reiciendis? Deserunt.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
