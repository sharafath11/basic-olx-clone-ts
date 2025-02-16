import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/connectDb";
import  userRoute from "../src/routes/userRoutes"
import userModel from "./model/userModel";
dotenv.config();
connectDB()
const app = express();
const PORT = process.env.PORT|| 4000;
app.use(cors());
app.use(express.json());

app.use(userRoute)

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
