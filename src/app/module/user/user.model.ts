import { model, Schema } from "mongoose";

const UserSchema = new Schema<{ name: string; }>({
    name: {
        type: String
    }
})



export const UserModel = model<{ name: string }>('user', UserSchema)