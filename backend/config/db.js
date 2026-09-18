import mongoose from "mongoose";

export const connectDB = async () => {
   try{
    const url = "mongodb+srv://yaseenmd3056_db_user:cZ9ZUBqtC00pzHmk@cluster0.1ttbvn9.mongodb.net/?appName=Cluster0"
    console.log("db connecting...");
    const res = await mongoose.connect(url);
    console.log(`mongodb connected with server ${res.connection.host}`);
  } catch (error) {
    console.log("mongodb connection failed!");
    console.log(error);
  }
};
