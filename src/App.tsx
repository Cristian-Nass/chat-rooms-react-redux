import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addChat, ChatModel} from "./store/store";
import './App.css';

function App() {

  const chatState: ChatModel[] = useSelector((state: any) => state.chat);
  const [state, setState] = useState('');
  const dispatch = useDispatch();

  const submitChat = () => dispatch(addChat({
      user: 'abbas',
      context: state,
      createdAt: Date.now()
    }))
  
  return (
    <div className="App">
      <input type="text" onChange={(e) => setState(e.target.value)}></input>
      <button type="submit" onClick={submitChat}> add chat </button>
          <h1> The message is:</h1>
      {chatState.map((chat, index) => (
        <React.Fragment key={index}>
          <h3>{chat.user}</h3>
          <h3>{chat.context}</h3>
          <h3>{chat.createdAt}</h3>
        </React.Fragment>
      ))}
    </div>
  )
};


export default App;