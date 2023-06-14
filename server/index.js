const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const authRoutes =  require('./Routes/authRoutes')
const cors = require('cors') 
const bodyParser = require("body-parser")


const app = express() 
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(process.env.URL).then(()=>{
    console.log("DataBase Connected");
}).catch((error)=>{
    console.log(error);
})

app.use("/auth",authRoutes)

app.listen(process.env.PORT, ()=>console.log(`server running: ${process.env.PORT}`))