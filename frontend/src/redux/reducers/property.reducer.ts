import { PropertyInitial } from "@/types/property.types";
import { createSlice } from "@reduxjs/toolkit";
import {
  getAllProperties,
  getPropertyWithId,
  propertyAdd,
  updateProperty,
} from "../actions/propertyAction";
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
      })
      .addCase(getAllProperties.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllProperties.fulfilled, (state, { payload }) => {
        state.properties = payload.properties;
        state.loading = false;
      })
      .addCase(getAllProperties.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = String(payload);
      })
      .addCase(getPropertyWithId.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPropertyWithId.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.property = payload.property;
        state.error = false;
      })
      .addCase(getPropertyWithId.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = String(payload);
      });
  },
});

export default propertyReducer.reducer;
