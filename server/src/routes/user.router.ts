import { Router } from "express";
import { signupController } from "../controllers/users/signup.controller";
import { logoutController } from "../controllers/users/logout.controller";
import { getUserController } from "../controllers/users/getUser.controller";
import { loginUserController } from "../controllers/users/login.controller";

const userRouter = Router();

userRouter
  .route("/user")
  .post(signupController)
  .delete(logoutController)
  .get(getUserController);
userRouter.post("/login", loginUserController);
export default userRouter;
