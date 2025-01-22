const express=require("express");
require("dotenv").config();
const cors=require("cors");
const app=express();
const dbConnect=require("./db/db");
dbConnect();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const userRouter=require("./routes/user.routes");
app.use('/user',userRouter)
app.get('/',(req,res)=>{
    res.send('hello world')
})
module.exports=app;