require('dotenv').config()
const app = require("./src/app.js")
const connectDb = require("./src/db/db.js")
const dns = require("dns");

dns.setServers([
  "8.8.8.8", // Google DNS
  "8.8.4.4",
  "1.1.1.1", // Cloudflare DNS
  "1.0.0.1"
]);

const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
}) 

connectDb();