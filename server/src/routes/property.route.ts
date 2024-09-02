import { Router } from "express";
import { addPropertyController } from "../controllers/property/addproperty.controller";
import { deletePropertyController } from "../controllers/property/deleteproperty";
import { updatePropertyController } from "../controllers/property/updateProperty";
import { getAllProperties } from "../controllers/property/getAllproperties";

const propertyRoute = Router();

propertyRoute
  .route("/property")
  .post(addPropertyController)
  .delete(deletePropertyController)
  .put(updatePropertyController)
  .get(getAllProperties);

export default propertyRoute;
