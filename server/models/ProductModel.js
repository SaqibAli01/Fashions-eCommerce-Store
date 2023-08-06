import { Schema, model } from "mongoose";

const productSchema = new Schema({
    name: { type: String, required: true },
    category: { type: String, enum: ["clothing", "shoes", "accessories", "other"], required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    color: { type: String, required: true },
    size: { type: String, required: true },
    images: [{ type: String, required: true }],
    ratings: [
        {
            userId: { type: Schema.Types.ObjectId, ref: "User" },
            rating: { type: Number, required: true },
            review: { type: String, required: true },
        }
    ],
    stock: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
    likes: [{ type: Schema.Types.ObjectId, ref: "User" }],
});



export const Product = model("Product", productSchema);



// import { Schema, model } from "mongoose";

// const postSchema = new Schema({
//     // text: { type: String, required: true },
//     text: { type: String },
//     file: { type: String },
//     fileUrl: { type: String },
//     fileName: { type: String },
//     author: { type: Schema.Types.ObjectId, ref: "User", required: true },
//     comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
//     likes: [{ type: Schema.Types.ObjectId, ref: "User" }],
//     createdAt: {
//         type: Date,
//         default: Date.now,
//     },
//     shared: { type: Boolean, default: false },
//     // New field for indicating if the post has been shared

// });

// export const Post = model("Post", postSchema);
