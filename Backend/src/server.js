
import dotenv from "dotenv"  
import connectDB from "./db/index.js";
dotenv.config({
    path:'./.env'
})
import { app } from "./app.js"; 

connectDB()

 
.then(()=>{f
    app.listen(process.env.PORT || 8000 ,()=>{
        console.log(`Server is running at  port : ${process.env.PORT} `);
        
    })
})
.catch((error)=>{
    console.log("Mongo DB connetION FAILED !! ",error);
    
})










/*
ye approch bi sai ha lkn isko hum abi use ni kren ge
import express from "express";
const app=express()
(async()=>{
        try {
            const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
            app.on("Erro",(error)=>{
                console.log("Err:",error)
                throw error
            })
            app.listen(process.env.PORT,()=>{
                console.log(`App is listening on PORT : ${process.env.PORT}`)
            })
            
            console.log(connectionInstance)
        } catch (error) {
            console.error("Mongo DB connection failed ERROR",error)
        }
})()
*/