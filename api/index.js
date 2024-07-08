import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config()

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("database connected successfully")
}).catch(()=>{
    console.log("Error while connect database")
})
const app = express();



app.listen(3000,()=>{
    console.log("server is running to 3000");
})