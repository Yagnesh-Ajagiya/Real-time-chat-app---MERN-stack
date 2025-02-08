import mongoose from "mongoose";

export const connectDB = async () =>{
    try {
       const conn = await mongoose.connect(process.env.MOGODB_URI);
        console.log(`Mongo DB connected:  ${conn.connection.host}`);
        
    } catch (error) {
        console.log("MOngoDB connection error", error);
        
    }
}