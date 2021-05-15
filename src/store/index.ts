import {configureStore} from "@reduxjs/toolkit";
import counterSlice from "./CounterSlice";
  
  const reducer = ({
    counter: counterSlice
  });
  
  const store = configureStore({
    reducer //reducer: reducer
  });
  
  export default store;