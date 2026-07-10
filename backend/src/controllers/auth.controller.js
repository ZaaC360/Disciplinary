const User = require("../models/user.model.js")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const registerUser = async (req, res) => {
    const {username, email, password} = req.body

    const existingUser = await User.findOne({
        $or: [
            {username},
            {email}
        ]
    })

    if(existingUser){
        return res.status(409).json({
            message: "User already exists"
        })
    }

    const hash = await bcrypt.hash(password, 10)

    const user = await User.create({username, email, password: hash})

    const token = jwt.sign({
        id : user._id
    }, process.env.JWT_SECRET)

    res.cookie("token", token)

    return res.status(201).json({
        message: "User registered successfully",
        user
    })
}

const loginUser = async (req, res) => {
    const {username, email, password} = req.body

    const user = await User.findOne({
        $or: [
            {username},
            {email}
        ]
    })

    if(!user){  
        return res.status(404).json({
            message: "User not found"
        })
    }

    const isPassword = await bcrypt.compare(password, user.password)

    if(!isPassword){
        return res.status(401).json({
            message: "Invalid password"
        })
    }

    const token = jwt.sign({
        id : user._id
    }, process.env.JWT_SECRET)

    res.cookie("token", token)

    return res.status(200).json({
        message: "User logged in successfully",
        user
    })
    
}


const getMe = async (req, res) => {
    const user = await User.findById(req.userId).select("-password")
    return res.status(200).json({ user })
}
module.exports = {registerUser, loginUser, getMe}

