import mongoose from 'mongoose'
import dotenv from 'dotenv';
            dotenv.config();

 const connection = process.env.connection

 const connectToMongoDB = async () => {
    await mongoose.connect(connection,{
                 useUnifiedTopology:true,
   }).then(()=>{
    console.log(`Connected to MongoDB`);
}).catch((error)=>{
    console.log(error.message);
    console.log("Not Connected");
})

};  


export default connectToMongoDB