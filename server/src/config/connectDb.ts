import mongoose from "mongoose";
import userModel from "../model/userModel";
const mongoURI = "mongodb://localhost:27017/olx-clone-ts";

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error(" MongoDB Connection Error:", error);
    process.exit(1); 
  }
};

export default connectDB;
