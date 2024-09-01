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
  reducers: {},
  name: "userReducer",
  //   extraReducers: {},
});

export default userReducer.reducer;
