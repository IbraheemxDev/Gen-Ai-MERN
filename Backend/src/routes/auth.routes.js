import { Router } from "express";
import { getMeController, loginUserController, logoutUserController, registerUserController } from "../controllers/auth.controller.js";
import { authUser } from "../middlewares/auth.middleware.js";
const authRouter= Router()

authRouter.route("/register").post(registerUserController)
authRouter.route("/login").post(loginUserController)
authRouter.route("/logout").get(logoutUserController)
authRouter.route("/get-me").get(authUser,getMeController)



export default authRouter;