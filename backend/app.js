const express=require("express");
require("dotenv").config();
const cors=require("cors");
const cookiesParser=require("cookie-parser");
const app=express();
const dbConnect=require("./db/db");
dbConnect();
app.use(cors());
app.use(express.json());
app.use(cookiesParser());
app.use(express.urlencoded({extended:true}));
const userRouter=require("./routes/user.routes");
const captainRouter=require("./routes/captain.routes");
app.use('/user',userRouter)
app.use('/captain',captainRouter);
app.get('/',(req,res)=>{
    res.send('hello world')
})
module.exports=app;