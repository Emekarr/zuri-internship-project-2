const express = require("express");
const { add_user } = require("../controllers/user_controller.js");

const router = express.Router();

router.post("/send", add_user);

router.put("/update", (req, res) => {});

router.get("/data", (req, res) => {});

router.delete("/delete", (req, res) => {});

module.exports = router;
