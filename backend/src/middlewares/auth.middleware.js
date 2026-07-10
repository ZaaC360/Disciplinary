const jwt = require("jsonwebtoken")

const authMiddleware = (req, res, next) => {
    const token = req.cookies.token
    if (!token) return res.status(401).json({ message: "Not authenticated" })
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.userId = decoded.id
    next()
}
module.exports = authMiddleware
