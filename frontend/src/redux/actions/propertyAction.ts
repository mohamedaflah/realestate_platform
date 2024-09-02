/* eslint-disable @typescript-eslint/no-explicit-any */
import { axiosInstance } from "@/constants/axiosInstance";
import { IProperty } from "@/types/property.types";
import { handleErrors } from "@/utils/handleError";
import { uploadImages } from "@/utils/uploadArrayImages";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const propertyAdd = createAsyncThunk(
  "property/add-property",
  async (property: IProperty, { rejectWithValue }) => {
    try {
      const urls = await uploadImages(property.images as unknown as File[]);
      property.images = urls as unknown as string | File[] | undefined;
      const { data } = await axiosInstance.post("/property/property", property);
      return data;
    } catch (error) {
      return rejectWithValue(handleErrors(error));
    }
  }
);

export const updateProperty = createAsyncThunk(
  "proprty/update-property",
  async (
    { sendPayload, propertyId }: { propertyId: string; sendPayload: IProperty },
    { rejectWithValue }
  ) => {
    try {
      const fileObjects = (sendPayload.images as any[])?.filter(
        (val) => typeof val !== "string"
      );
      sendPayload.images = (sendPayload.images as any[])?.filter(
          (val) => typeof val == "string"
      ) as unknown as string | File[] | undefined
      const urls = await uploadImages(fileObjects);
      sendPayload.images = [...sendPayload.images as Array<any>, ...urls] as
        | string
        | File[]
        | undefined;
      const { data } = await axiosInstance.put("/property/property", {
        data: sendPayload,
        propertyId,
      });
      return data;
    } catch (error) {
      return rejectWithValue(handleErrors(error));
    }
  }
);
export const deleteProperty = createAsyncThunk(
  "proprty/delete-property",
  async (propertyId: string, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.delete(
        `/property/property?propertyId=${propertyId}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(handleErrors(error));
    }
  }
);
