import mongoose from "mongoose";
import express from "express";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv"; 
import { app } from "./app.js";


dotenv.config({
    path : './.env'
})


connectDB()
.then(() => {

    app.on("error",(error) => {
        console.log("EXPRESS not able to talk with the MONGO DB",error);
        throw error 

    })

    app.listen(process.env.PORT || 8000 , () => {
        console.log(`Server is running at port : ${process.env.PORT}`)
    })
})
.catch((error) => {
    console.log("MOGO DB connection failed !!!" , error);
})







/*

const app = express();
;( async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        app.on("error" , (error) => {
            console.log("DB connected BUT express cannot talk")
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port : ${process.env.PORT}`)
        })

    } catch(error){
        console.error("ERROR : ", error)
        throw error
    }
})()

*/