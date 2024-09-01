import { IUserInitial } from "@/types/user.types";
import { createSlice } from "@reduxjs/toolkit";
const initialState: IUserInitial = {
  loading: false,
  err: false,
  verificationCheck: null,
  isVerified: false,
  user: null,
};

const userReducer = createSlice({
  initialState,
  reducers: {
    setConfirmationResult: (state, { payload }) => {
      state.verificationCheck = payload;
    },
    setUserLocally: (state, { payload }) => {
      state.user = payload;
    },
  },
  name: "userReducer",
  //   extraReducers: {},
});

export default userReducer.reducer;
export const { setConfirmationResult,setUserLocally } = userReducer.actions;
