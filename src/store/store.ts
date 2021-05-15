import {createSlice} from "@reduxjs/toolkit";

export interface ChatModel {
  user: string;
  context: string;
  createdAt: any;
}

const chatState: ChatModel[] = []

const chatSlice = createSlice({
  name: "chat",
  initialState: chatState,
  reducers: {
    addChat: (state, action) => {
      state.push(action.payload);
      }
    }
  }
);

export const {addChat} = chatSlice.actions;

export default chatSlice.reducer;