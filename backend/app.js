const express=require("express");
require("dotenv").config();
const cors=require("cors");
const app=express();
const dbConnect=require("./db/db");
dbConnect();
app.get('/',(req,res)=>{
    res.send('hello world')
})
module.exports=app;