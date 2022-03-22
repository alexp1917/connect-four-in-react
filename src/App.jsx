import { Provider } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux'

import { configureStore } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import logo from './logo.svg';
import './App.css';

var SIZE = 10;

var counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0, },
  reducers: {
    increment: (state) => { state.value += 1 },
    decrement: (state) => { state.value -= 1 },
    incrementByAmount: (state, action) => { state.value += action.payload },
  },
})
var { increment, decrement, incrementByAmount } = counterSlice.actions;

var store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  },
})

function DropButton() {
  var count = useSelector((state) => state.counter.value)
  var dispatch = useDispatch()

  return <div className="c4-header" onClick={() => dispatch(increment())}>{count}</div>
}

function DropButtons() {
  return <div className="c4-board">
    {Array(SIZE).fill(null).map((_, jj) =>
      <DropButton key={jj} />
    )}
  </div>
}

function Header() {
  return (
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
    );
}

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header/>
      </div>
    </Provider>
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