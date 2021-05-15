import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {increment, incrementBy} from "./store/store";
import './App.css';

function App() {

  // @ts-ignore
  const count = useSelector(state => state.counter);
  const [context, setContext] = useState('');
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1> The count is: {count}</h1>
      <input type="text" onChange={(e) => setContext(e.target.value)}></input>
      <button onClick={() => dispatch(increment())}> Increment </button>
      <button onClick={() => dispatch(incrementBy(5))}> Increment by 5 </button>
    </div>
  );
}

export default App;