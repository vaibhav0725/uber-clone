const express=require("express");
require("dotenv").config();
const app=express();
app.get('/',(req,res)=>{
    res.send('hello world')
})
module.exports=app;