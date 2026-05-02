import { Router } from "express";
import { authUser } from "../middlewares/auth.middleware";
import { genrateInterviewReportController } from "../controllers/interview.controller.js";
import upload from "../middlewares/file.middleware.js";
const interviewRouter= Router()

interviewRouter.route("/").post(authUser, upload.single("resume"), genrateInterviewReportController)

export default interviewRouter;