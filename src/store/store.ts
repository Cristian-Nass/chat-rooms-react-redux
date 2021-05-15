import {createSlice} from "@reduxjs/toolkit";

interface ChatModel {
  time: string;
  context: string;
}

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: state =>  state += 1,
    incrementBy: (state, action) => state += action.payload
  }
});

export const {increment, incrementBy} = counterSlice.actions;

export default counterSlice.reducer;