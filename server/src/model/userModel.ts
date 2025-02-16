import { Schema, model, Document } from "mongoose";

interface IUser extends Document {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
  createdAt: Date;
}

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    phoneNumber: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);
const userModel = model<IUser>("User", userSchema);
export default userModel;
