const express = require("express")
const authController = require("../controllers/auth.controller.js")
const authMiddleware = require("../middlewares/auth.middleware.js")
const router = express.Router()
const cors = require("cors")
const app = express()

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
}))

router.post("/register", authController.registerUser)

router.post("/login", authController.loginUser)

router.get("/me", authMiddleware, authController.getMe)

module.exports = router