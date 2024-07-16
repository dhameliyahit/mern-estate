import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'

dotenv.config()

mongoose.connect("mongodb+srv://heetdhameliya59:Dhameliyahit31@mern-estate.cctmrgk.mongodb.net/mern-estate").then(()=>{
    console.log("database connected successfully")
}).catch(()=>{
    console.log("Error while connect database")
})

const app = express();
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Hello World!")
})

app.use("/api/user",userRouter);
app.use("/api/auth",authRouter);

app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500 ;
    const message = err.message ||  'Internal Server Error'

    return  res.status(statusCode).json({
        success:false,
        statusCode,
        message
    });
});

app.listen(3000,()=>{
    console.log("server is running to 3000");
})