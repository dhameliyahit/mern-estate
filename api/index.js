import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRouter from './routes/user.route.js'
dotenv.config()

mongoose.connect("mongodb://localhost:27017/mern-estate").then(()=>{
    console.log("database connected successfully")
}).catch(()=>{
    console.log("Error while connect database")
})

const app = express();

app.get("/",(req,res)=>{
    res.send("Hello World!")
})

app.use("/api/user",userRouter)

app.listen(3000,()=>{
    console.log("server is running to 3000");
})