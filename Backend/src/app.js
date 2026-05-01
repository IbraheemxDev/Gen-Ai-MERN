import express from "express"
import authRouter from "./routes/auth.routes.js"  // ✅ Upar
import cookieParser from "cookie-parser"  // ✅ Upar
import cors from "cors"  // ✅ Upar
const app = express()

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true, limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}))

app.use("/api/auth", authRouter)  // ✅ Route bhi fix kiya

export { app }