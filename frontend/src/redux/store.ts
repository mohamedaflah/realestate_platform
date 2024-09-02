import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/user.reducer";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import propertyReducer from "./reducers/property.reducer";
export const store = configureStore({
  reducer: {
    user: userReducer,
    property: propertyReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
