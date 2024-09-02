import { PropertyInitial } from "@/types/property.types";
import { createSlice } from "@reduxjs/toolkit";
import { propertyAdd, updateProperty } from "../actions/propertyAction";
import toast from "react-hot-toast";

const initialState: PropertyInitial = {
  loading: false,
  error: false,
  properties: null,
  property: null,
};
const propertyReducer = createSlice({
  name: "property",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(propertyAdd.pending, (state) => {
        state.loading = true;
      })
      .addCase(propertyAdd.fulfilled, (state) => {
        state.loading = false;
        state.error = false;
        toast.success("Property added");
      })
      .addCase(propertyAdd.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = String(payload);
      })
      .addCase(updateProperty.pending, (state) => {
        state.loading = true;
      });
  },
});

export default propertyReducer.reducer;
