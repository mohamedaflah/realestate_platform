import { IUserInitial } from "@/types/user.types";
import { createSlice } from "@reduxjs/toolkit";
import {
  getUser,
  logoutUser,
  userLogin,
  userSignup,
  validateUser,
} from "../actions/user.action";
import toast from "react-hot-toast";
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
  extraReducers: (builder) => {
    builder
      .addCase(userSignup.pending, (state) => {
        state.loading = true;
      })
      .addCase(userSignup.fulfilled, (state, { payload }) => {
        state.loading = false;
        toast.success("Signup success");
        state.err = false;
        state.isVerified = true;
        state.user = payload.user;
      })
      .addCase(userSignup.rejected, (state, { payload }) => {
        state.loading = false;
        state.err = String(payload);
        toast.error(state.err);
      })
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(userLogin.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload.user;
        state.isVerified = true;
        toast.success("Login success");
      })
      .addCase(userLogin.rejected, (state, { payload }) => {
        state.loading = false;
        state.err = String(payload);
        toast.error(state.err);
      })
      .addCase(getUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload.user;
        state.err = false;
        state.isVerified = true;
      })
      .addCase(getUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.err = String(payload);
      })
      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
        state.isVerified = false;
        toast.success("Logout succesfull");
      })
      .addCase(logoutUser.rejected, (state, { payload }) => {
        state.err = String(payload);
        state.loading = false;
        toast.error(state.err);
      })
      .addCase(validateUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(validateUser.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(validateUser.rejected, (state, { payload }) => {
        state.loading=false
        state.err = String(payload);
        toast.error(state.err);
      });
  },
});

export default userReducer.reducer;
export const { setConfirmationResult, setUserLocally } = userReducer.actions;
