import {configureStore} from "@reduxjs/toolkit";
import counterSlice from "./store";
  
  const reducer = ({
    counter: counterSlice
  });
  
  const store = configureStore({
    reducer //reducer: reducer
  });
  
  export default store;