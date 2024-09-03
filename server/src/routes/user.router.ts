import { Router } from "express";
import { signupController } from "../controllers/users/signup.controller";
import { logoutController } from "../controllers/users/logout.controller";
import { getUserController } from "../controllers/users/getUser.controller";
import { loginUserController } from "../controllers/users/login.controller";
import { validateUserDetails } from "../controllers/users/validateDetails";
import { userAccessCheck } from "../middleware/accesscheck";

const userRouter = Router();

userRouter
  .route("/user")
  .post(signupController)
  .delete(logoutController)
  .get(getUserController);
userRouter.post("/login", userAccessCheck, loginUserController);
userRouter.post("/validate", validateUserDetails);
export default userRouter;
