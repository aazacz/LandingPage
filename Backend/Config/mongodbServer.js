const mongoose = require('mongoose')
 require('dotenv').config() 
 const connection = process.env.connection

 const connectToMongoDB = async () => {
    await mongoose.connect(connection,{
    useUnifiedTopology:true,
   }).then(()=>{
    console.log(`Connected to MongoDB Atlas`);
}).catch((error)=>{
    console.log(error.message);
    console.log("Not Connected");
})

};  


module.exports = connectToMongoDB