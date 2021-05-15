import {configureStore} from "@reduxjs/toolkit";
import chatSlice from "./store";
  
  const reducer = ({
    chat: chatSlice
  });
  
  const store = configureStore({
    reducer //reducer: reducer
  });
  
  export default store;