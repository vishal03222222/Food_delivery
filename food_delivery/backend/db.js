const mongoose=require('mongoose');
const mongooseurl='mongodb+srv://vishal_foodapp:vishalfood@fooddelivery.ir7d6.mongodb.net/?retryWrites=true&w=majority&appName=fooddelivery';
const mongoDB=async()=>{
   await  mongoose.connect(mongooseurl,{useNewurlparser :true },(err,reusult)=>{
    if(err) console.log("---",err)
        else{
    console.log("connected")}
        console.log("conect")
    })
}
module.exports=mongoDB