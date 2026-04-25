import { User } from "../models/user.model";
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs";

// REGister controller
async function registerUserController(req, res) {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).json({ message: "Please provide username,email,password " })
    }

    const isUserAlreadyExist = await User.findOne({
        $or: [{ email }, { username }]
    })
    if (isUserAlreadyExist) {
        return res.status(400).json({
            message: "Accoount already exist with this username or email"
        })
    }

    const hash = await bcrypt.hash(password, 10)
    const user = await User.create({
        username,
        email,
        password: hash
    })
    const token = jwt.sign({
        id: user._id, username: user.username
    }, process.env.JWT_SECRET, {
        expiresIn: "1d"
    }
    )


    res.cookie("token",token)
    res.status(201).json({
        message:"User registered Successfully",
        user:{
            id:user._id,
            username:user.username,
            email:user.email

        }
    })
}


// Login Controller 

async function loginUserController(req,res) {
    const {email,password}=req.body;
    const user=await User.findOne({email})
    if(!user){
         return res.status(400).json({ message: "invalid email and password " })
    }
    const isPasswordValid=await bcrypt.compare(password,user.password)
    if(!isPasswordValid){
                 return res.status(400).json({ message: "Invalid email or PAssword " })
    }
    const token = jwt.sign({
        id: user._id, username: user.username
    }, process.env.JWT_SECRET, {
        expiresIn: "1d"
    }
    )
    res.cookie("token",token)
    res.status(200).json({
        message:"User login Successfully",
        user:{
            id:user._id,
            username:user.username,
            email:user.email
        }
    })
}


export{
    registerUserController,
    loginUserController
}