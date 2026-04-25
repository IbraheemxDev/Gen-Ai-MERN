import mongoose ,{Schema} from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
        unique: [ true, "username already taken" ],
        required: true,
    },
    email: {
        type: String,
        unique: [ true, "Account already exists with this email a" ],
        required: true,
    },

    password: {
        type: String,
        required: true,
    },
})

export const User=mongoose.model("User",userSchema)