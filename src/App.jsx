import { useState } from 'react'

import logo from './logo.svg';
import './App.css';

var SIZE = 10;

function DropButton() {
  return <div className="c4-header"></div>
}

function DropButtons() {
  return <div className="c4-board">
    {Array(SIZE).fill(null).map((_, jj) =>
      <DropButton key={jj} />
    )}
  </div>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>connect four</h1>
        <DropButtons />
        <div className="c4-board">
          {Array(SIZE).fill(null).map((_, ii) =>
            <div className="c4-row" key={ii}>
              {Array(SIZE).fill(null).map((_, jj) =>
                <div className="c4-cell" key={jj}></div>
              )}
            </div>
          )}
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <section>
        </section>
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
//
//  .c4-board {
//    /*height: 10px; width: 10px; background-color: white;*/
//    /*position: relative;*/
//    display: inline-flex;
//    flex-direction: row;
//    margin-bottom: 20px;
//  }
//
//  .c4-row {
//    /*height: 10px; width: 10px; background-color: white;*/
//    /*position: absolute;*/
//  }
//
//  .c4-cell {
//    top: 10px;
//    height: 30px;
//    width: 30px;
//    background-color: white;
//    border-radius: 10px;
//  }
//
//  .c4-header {
//    background-color: #aef;
//    height: 30px;
//    width: 30px;
//    background-color: white;
//    border-radius: 10px;
//    color:  red;
//  }
//