import mongoose from "mongoose";

export const connectDB = async () => {
   try{
    const url = "mongodb://localhost:27017/storeFleet"
    console.log("db connecting...");
    const res = await mongoose.connect(url);
    console.log(`mongodb connected with server ${res.connection.host}`);
  } catch (error) {
    console.log("mongodb connection failed!");
    console.log(error);
  }
};
