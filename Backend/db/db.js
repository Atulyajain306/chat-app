import mongoose from "mongoose";

const connecttoMongoDB=async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_DB);
        console.log("connected to mongoDB")  
    }
    catch(error){
        console.log(`Having difficulty connecting`,error.message);
    }
};

export default connecttoMongoDB