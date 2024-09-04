import { ChatReducerInitial } from "@/types/chat.types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: ChatReducerInitial = {
  chatLoading: false,
  messageLoading: false,
  chats: null,
  messages: null,
};
const chatReducer = createSlice({
  name: "chat-reducer",
  initialState,
  reducers: {
    
  },
});

export default chatReducer.reducer;
