const express = require("express")
const authRoutes = require("./routes/auth.routes.js")
const cookieParser = require("cookie-parser")
const cors = require("cors")

const app = express()
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
}))
app.use(cookieParser())
app.use(express.json())
app.use("/api", authRoutes)


module.exports = app