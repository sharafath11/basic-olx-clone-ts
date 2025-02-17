import { Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import ProductModel from "../model/producModel";
import mongoose from "mongoose";
import cloudinary from "../utils/cloudinary";

export const addProduct = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, category, price, description } = req.body;
        const token = req.headers.authorization?.split(" ")[1];
        const secretKey = process.env.JWT_SECRET;

        if (!token || !secretKey) {
            res.status(401).json({ ok: false, msg: "Unauthorized request" });
            return;
        }

        if (!req.file) {
            res.status(400).json({ ok: false, msg: "Image is required" });
            return;
        }

        const decoded = jwt.verify(token, secretKey) as JwtPayload;

        cloudinary.uploader.upload_stream(
            { resource_type: 'auto' },
            async (error, result) => {
                if (error) {
                    console.error("Error uploading to Cloudinary:", error);
                    res.status(500).json({ ok: false, msg: "Failed to upload image" });
                    return;
                }

                if (!result) {
                    res.status(500).json({ ok: false, msg: "Cloudinary upload failed" });
                    return;
                }

                const newProduct = new ProductModel({
                    name,
                    category,
                    price,
                    description,
                    image: result.secure_url,
                    userId: new mongoose.Types.ObjectId(decoded.userId),
                });

                await newProduct.save();
                res.status(201).json({ ok: true, msg: "Product added successfully" });
            }
        ).end(req.file.buffer);
    } catch (error) {
        console.error("Error in addProduct:", error);
        res.status(500).json({ ok: false, msg: "Internal server error" });
    }
};
export const getProducts = async (req: Request, res: Response) => {
    try {
      const products = await ProductModel.find().populate("userId", "name email phoneNumber address");
      res.json({ ok: true, msg: "Products retrieved", products });
    } catch (error) {
      console.error(error);
      res.status(500).json({ ok: false, msg: "Server error" });
    }
  };