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
      .min(2, { message: "City must be at least 2 characters long." })
      .max(50, { message: "City must be less than 50 characters." }),
    state: z
      .string()
      .min(2, { message: "State must be at least 2 characters long." })
      .max(50, { message: "State must be less than 50 characters." }),
    zipcode: z
      .string()
      .length(6, { message: "Zipcode must be exactly 6 characters." })
      .refine((val) => !isNaN(Number(val)), {
        message: "Enter zipcode in number format.",
      }),
    country: z
      .string()
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
  images: z.array(z.instanceof(File), {
    message: "Images must be an array of File objects.",
  }),
});
