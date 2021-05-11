const express = require("express")
const connectDB = require("./database/mongodb.js")
connectDB()

const server = express()

server.post("/send", (req, res) => {

})

server.put("/update", (req, res) => {

})

server.get("/data", (req, res) => {

})

server.delete("/delete", (req, res) => {

})

const PORT = process.env.PORT || 3000
server.listen(PORT)
