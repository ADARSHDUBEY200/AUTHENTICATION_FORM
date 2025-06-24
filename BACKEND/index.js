const express = require("express");
const mongoose = require("mongoose");
const cookieParser=require("cookie-parser");
const authRoute= require("./Routes/AuthRoute.js")
const cors = require("cors");
require("dotenv").config();

const app = express();
const MONGO_URL=process.env.MONGO_URL;

mongoose
.connect( MONGO_URL)
.then(()=>{
  console.log("DATABASE IS CONNECTED SUCCESFULLY")
})
.catch((err)=>{
    console.log("SOMETHING WENT WRONG "+err);
})


//MIDDLEWARE USING FOR THE CROSS ORIGIN REQUEST 
app.use(cors({
  origin: ["http://localhost:5173", "https://authentication-frontend-ity1.onrender.com/login"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));

// FOR PARSING THE FORM DATA TO THE JSON DATA 
app.use(express.json());

//USING THE MIDDLEWARE FOR PARSING THE COOKIE WHICH IS SEND 
app.use(cookieParser());


app.use("/",authRoute)


app.listen(3000,()=>{
    console.log(`THE SERVER IS LISTENING AT PORT 3000`)
})