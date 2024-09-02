export interface IProperty {
  _id?: string;
  title: string;
  propertyType: "residential" | "commercial" | "land" | "luxury";
  listingType: "rent" | "lease" | "buy";
  price?: number;
  address?: {
    city?: string;
    state?: string;
    zipcode?: string;
    country?: string;
  };
  description?: string;
  areaSize?: number;
  numberofBedrooms?: number;
  numberofParkingSpace?: number;
  founded?: number;
  totalFloor?: number;
  userId: string;
  images?: string[];
  status?: "publish" | "unpublish";
  featuresAndAminity: string[];
  otherProperty: string[];
  createdAt?: Date;
  updatedAt?: Date;
}
