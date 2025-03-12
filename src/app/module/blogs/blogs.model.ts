import { model, Schema } from "mongoose";
import { IBlog } from "./blogs.interface";

const BlogSchema: Schema = new Schema<IBlog>(
    {
        image: { type: String, required: true },
        title: { type: String, required: true },
        content: { type: String, required: true },
        publishDate: { type: Date, required: true, default: new Date() },
        like: { type: Number, default: 0 },
    },
    { timestamps: true }
);

export const Blog = model<IBlog>("Blog", BlogSchema);