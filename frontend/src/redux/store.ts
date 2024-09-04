import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/user.reducer";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import propertyReducer from "./reducers/property.reducer";
import socketReducer from "./reducers/socket.reducer";
export const store = configureStore({
  reducer: {
    user: userReducer,
    property: propertyReducer,
    socket: socketReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
