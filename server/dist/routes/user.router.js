"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const signup_controller_1 = require("../controllers/users/signup.controller");
const logout_controller_1 = require("../controllers/users/logout.controller");
const getUser_controller_1 = require("../controllers/users/getUser.controller");
const login_controller_1 = require("../controllers/users/login.controller");
const validateDetails_1 = require("../controllers/users/validateDetails");
const accesscheck_1 = require("../middleware/accesscheck");
const checkAdminAuth_1 = require("../middleware/checkAdminAuth");
const getAllusers_1 = require("../controllers/users/getAllusers");
const blockUser_1 = require("../controllers/users/blockUser");
const userRouter = (0, express_1.Router)();
userRouter
    .route("/user")
    .post(signup_controller_1.signupController)
    .delete(logout_controller_1.logoutController)
    .get(getUser_controller_1.getUserController)
    .patch(blockUser_1.updateUserStatus);
userRouter.post("/login", accesscheck_1.userAccessCheck, login_controller_1.loginUserController);
userRouter.post("/validate", validateDetails_1.validateUserDetails);
userRouter.get("/getalluser", checkAdminAuth_1.checkisAdmin, getAllusers_1.getAllusersController);
exports.default = userRouter;
