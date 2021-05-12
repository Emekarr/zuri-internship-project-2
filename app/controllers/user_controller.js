const User = require("../models/user.js");

const add_user = async (req, res) => {
  try {
    const user_data = req.body;
    const new_user = new User(user_data);
    const user = await new_user.save();
    if (!user)
      throw new Error("Something went wrong while creating this user.");
    res.send({ message: "success", data: user });
  } catch (e) {
    res.send(e.message);
  }
};

module.exports = {
  add_user,
};
