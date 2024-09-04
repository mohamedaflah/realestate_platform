import { ChatReducerInitial } from "@/types/chat.types";
import { createSlice } from "@reduxjs/toolkit";
import { createChatAction, getAllChat } from "../actions/chat.action";
import toast from "react-hot-toast";

const initialState: ChatReducerInitial = {
  chatLoading: false,
  messageLoading: false,
  chats: null,
  messages: null,
  error: false,
  selectedChatId: null,
};
const chatReducer = createSlice({
  name: "chat-reducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createChatAction.pending, (state) => {
        state.chatLoading = true;
      })
      .addCase(createChatAction.fulfilled, (state) => {
        state.chatLoading = false;
      })
      .addCase(createChatAction.rejected, (state, { payload }) => {
        state.chatLoading = false;
        state.error = String(payload);
        toast.error(state.error);
      })
      .addCase(getAllChat.pending, (state) => {
        state.chatLoading = true;
      })
      .addCase(getAllChat.fulfilled, (state, { payload }) => {
        state.chatLoading = false;
        state.chats = payload.chats;
        state.selectedChatId = state?.chats?.[0]._id as string;
      })
      .addCase(getAllChat.rejected, (state, { payload }) => {
        state.chatLoading = false;
        state.error = String(payload);
        toast.error(state.error);
      });
  },
});

export default chatReducer.reducer;
