import { Router } from "express";
import { loginUserController, logoutUserController, registerUserController } from "../controllers/auth.controller.js";

const authRouter= Router()

authRouter.route("/register").post(registerUserController)
authRouter.route("/login").post(loginUserController)
authRouter.route("/logout").get(logoutUserController)



export default authRouter;