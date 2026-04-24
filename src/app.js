import express from "express"
const app=express()

app.use(express.json({limit:"16kb"}))  //“Client JSON data bhejega, mujhe usay read karna hai.”
app.use(express.urlencoded({extended :true,limit:"16kb"}))
app.use(express.static("public"))
// app.use(cookieParser())



export {app}