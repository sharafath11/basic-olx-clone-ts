import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/connectDb";
import userRoute from "../src/routes/userRoutes";

dotenv.config(); 

connectDB();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json({ limit: "10mb" })); 
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use("/uploads", express.static("uploads")); 
app.use(userRoute);
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
