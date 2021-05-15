import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import {increment, decrement} from "./store/CounterSlice";

import './App.css';

function App() {

  // @ts-ignore
  const count = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1> The count is: {count}</h1>
      <button onClick={() => dispatch(increment())}> Increment </button>
      <button onClick={() => dispatch(decrement())}> Decrement </button>
    </div>
  );
}

export default App;