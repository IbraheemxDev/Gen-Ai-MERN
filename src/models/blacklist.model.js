import mongoose,{Schema} from "mongoose";

const blacklistSchema = new Schema({
    token:{
        type:String, 
        required:[true,"token is required to be added in blacklist"] 
     }},
    {timestamps:true}
)

export const tokenBlacklistModel= mongoose.model("blacklistToken",blacklistSchema)