const express = require("express");
const {
  add_user,
  update_user,
  retrieve_user,
  delete_user,
} = require("../controllers/user_controller.js");

const router = express.Router();

router.post("/send", add_user);

router.put("/update", update_user);

router.get("/data", retrieve_user);

router.delete("/delete", delete_user);

module.exports = router;
