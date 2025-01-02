const mongoose=require("mongoose");
const dbConnect=()=>{
    mongoose.connect(process.env.DB_URL)
    .then(()=>{
        console.log("DB CONNECTED");
    })
    .catch((err)=>{
        console.error(err);
        console.log("ERROR");
    })
}
module.exports=dbConnect;