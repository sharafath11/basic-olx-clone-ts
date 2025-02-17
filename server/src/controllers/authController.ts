import { Request,Response} from "express"
import userModel from "../model/userModel"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from 'dotenv';
dotenv.config();

export const registerHandler = async (req: Request, res: Response): Promise<void> => {
    const { name, email, password, phoneNumber, address } = req.body;
   console.log("add",address)
    try {
        if (await userModel.findOne({ email })) {
            res.json({ ok: false, msg: "User already exists" });
            return;
        }
        
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new userModel({ name, email, phoneNumber, password: hashedPassword,address });
        await newUser.save();
        res.json({ ok: true, msg: "User registered successfully" });
    } catch (error) {
        console.error("Error in registerHandler:", error);
        res.json({ ok: false, msg: "Server error" });
    }
};
export const loginController = async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;
   console.log("fdhrfb");
   
    try {
        const user = await userModel.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            res.json({ ok: false, msg: "Invalid credentials" });
            return;
        }
        if (!process.env.JWT_SECRET) {
            console.error("JWT_SECRET is not defined");
            res.status(500).json({ ok: false, msg: "Server error: JWT secret missing" });
            return;
        }

        const token = jwt.sign(
            { userId: user._id, email: user.email,name:user.name,number:user.phoneNumber,address:user.address },
            process.env.JWT_SECRET as string,
            { expiresIn: "1h" }
        );

        res.status(200).json({ ok: true, msg: "Login successful", token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ ok: false, msg: "Server error" });
    }
};
