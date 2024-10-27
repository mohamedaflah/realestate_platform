"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const addproperty_controller_1 = require("../controllers/property/addproperty.controller");
const deleteproperty_1 = require("../controllers/property/deleteproperty");
const updateProperty_1 = require("../controllers/property/updateProperty");
const getAllproperties_1 = require("../controllers/property/getAllproperties");
const getpropertywithuser_1 = require("../controllers/property/getpropertywithuser");
const getpropertywithId_1 = require("../controllers/property/getpropertywithId");
const propertyRoute = (0, express_1.Router)();
propertyRoute
    .route("/property")
    .post(addproperty_controller_1.addPropertyController)
    .delete(deleteproperty_1.deletePropertyController)
    .put(updateProperty_1.updatePropertyController)
    .get(getAllproperties_1.getAllProperties);
propertyRoute.get(`/withuser/:userId`, getpropertywithuser_1.getPropertiesWithUser);
propertyRoute.get(`/:propertyId`, getpropertywithId_1.getPropertyWithId);
exports.default = propertyRoute;
