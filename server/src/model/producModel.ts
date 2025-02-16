import mongoose, { Schema, Document, model } from 'mongoose';

// interface IProduct extends Document {
//     name: string;
//     category: string;
//     price: number;
//     description: string;
// }

const ProductSchema: Schema = new Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    image:{type:String,require:true}
}, {
    timestamps: true
});

const ProductModel = mongoose.model("Products", ProductSchema);
export default ProductModel
