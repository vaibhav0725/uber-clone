const mongoose=require("mongoose");
const blackListTokenSchema=new mongoose.Schema({
    token:{
        type:String,
        uniqure:true,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now,
        expires:86400
    }
})
module.exports=mongoose.model("BlackListToken",blackListTokenSchema);