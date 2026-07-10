const mongoose = require("mongoose")
require("dotenv").config()

async function connectDb(){
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("database connected successfully")
    } catch (error) {
        console.log("database not connected", error)
        process.exit(1)
    }
}

module.exports = connectDb