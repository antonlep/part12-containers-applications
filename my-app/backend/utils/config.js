require("dotenv").config()

const PORT = process.env.PORT || 3000
const MONGODB_URI =
  process.env.MONGO_URL ||
  "mongodb://the_username:the_password@localhost:3456/the_database"

module.exports = {
  MONGODB_URI,
  PORT,
}
