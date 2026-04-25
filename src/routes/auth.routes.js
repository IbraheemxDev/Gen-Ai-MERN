import { Router } from "express";
import { loginUserController, registerUserController } from "../controllers/auth.controller";

const authRouter= Router()

authRouter.route("/register").post(registerUserController)
authRouter.route("/api/login").post(loginUserController)








export default authRouter;