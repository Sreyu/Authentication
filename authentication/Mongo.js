const mongoose=require("mongoose")
mongoose.connect("mongodb://0.0.0.0:27017/sreyesh")
.then(()=>{
    console.log("mongo connected");
})
.catch(()=>{
    console.log('failed');
})

const newSchema= new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
const table = mongoose.model("collection",newSchema)
module.exports=table