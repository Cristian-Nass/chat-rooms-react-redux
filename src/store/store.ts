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
    decrement: state =>  state -= 1,
  }
});

export const {increment, decrement} = counterSlice.actions;

export default counterSlice.reducer;