const express = require("express")
const connectDB = require("./models/mongodb.js")

const server = express()

// helping express work with json and cookies
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// route to interact with the user model
server.use("/user", require("./routes/user_route.js"))

const PORT = process.env.PORT || 3000
server.listen(PORT)
