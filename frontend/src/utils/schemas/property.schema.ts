import { z } from "zod";

export const propertySchema = z.object({
  title: z
    .string()
    .min(2, { message: "Title must be at least 2 characters long." })
    .max(50, { message: "Title must be less than 50 characters." }),
  propertyType: z.string().nonempty({ message: "Property type is required." }),
  listingType: z.string().nonempty({ message: "Listing type is required." }),
  price: z
    .number()
    .nonnegative({ message: "Price must be a non-negative number." }),
  address: z.object({
    city: z
      .string()
      // .nonempty()
      .min(2, { message: "City must be at least 2 characters long." })
      .max(50, { message: "City must be less than 50 characters." }),
    state: z
      .string()
      // .nonempty()
      .min(2, { message: "State must be at least 2 characters long." })
      .max(50, { message: "State must be less than 50 characters." }),
    zipcode: z
      .string()
      // .nonempty()
      .length(6, { message: "Zipcode must be exactly 6 characters." })
      .refine((val) => !isNaN(Number(val)), {
        message: "Enter zipcode in number format.",
      }),
    country: z
      .string()
      // .nonempty()
      .min(2, { message: "Country must be at least 2 characters long." })
      .max(50, { message: "Country must be less than 50 characters." }),
  }),
  description: z
    .string()
    .min(10, { message: "Description must be at least 10 characters long." }),
  featuresAndAminity: z.array(z.string(), {
    message: "Features and amenities must be an array of strings.",
  }),
  otherProperty: z.array(z.string(), {
    message: "Other property must be an array of strings.",
  }),
  images: z.array(
    z
      .union([z.instanceof(File), z.string()])
      .refine((val) => val instanceof File || typeof val === "string", {
        message: "Each image must be either a File object or a string (URL).",
      })
  ).min(1, { message: "At least one image is required." }),
});
