import { Request, Response } from "express"
import jwt,{JwtPayload} from "jsonwebtoken"
import ProductModel from "../model/producModel"
import mongoose from "mongoose"
export const addProduct = async (req: Request, res: Response): Promise<void> => {
    const { name, category, price, description, image } = req.body;
    const JS = process.env.JWT_SECRET || "fdlvnfdviurensfivrieu";

    try {
        console.log(req.header)
        const token = req.headers.authorization?.split(" ")[1];

        if (!token) {
            res.status(401).json({ ok: false, msg: "Token is required" });
            return 
        }

        const decoded = jwt.verify(token, JS) as JwtPayload;

        const newProduct = new ProductModel({
            name,
            category,
            price,
            description,
            image,
            userId: new mongoose.Types.ObjectId(decoded?.userId),
        });

        await newProduct.save();
        res.status(201).json({ ok: true, msg: "Product added successfully" });

    } catch (error) {
        res.status(401).json({ ok: false, msg: "Invalid or expired token" });
    }
};
