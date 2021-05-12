const User = require("../models/user.js");

const add_user = async (req, res) => {
  try {
    const user_data = req.body;
    const new_user = new User(user_data);
    const user = await new_user.save();
    if (!user) {
      res.status(400).send({ message: "failure", data: user });
      return;
    }
    res.send({ message: "success", data: user });
  } catch (e) {
    res.send(e.message);
  }
};

const update_user = async (req, res) => {
  try {
    const { email } = req.query;
    const update = req.body;
    const updated_user = await User.findOneAndUpdate({ email }, update, {
      new: true,
    });
    if (!updated_user) {
      res.status(410).send({ message: "failure", data: updated_user });
      return;
    }
    res.send({ message: "success", data: updated_user });
  } catch (e) {
    res.send(e.message);
  }
};

const retrieve_user = async (req, res) => {
  try {
    const { email } = req.query;
    const user = await User.findOne({ email });
    if (!user) {
      res.status(410).send({ message: "failure", data: user });
      return;
    }
    res.send({ message: "success", data: user });
  } catch (e) {
    res.send(e.message);
  }
};

const delete_user = async (req, res) => {
  try {
    const { email } = req.query;
    const user = await User.findOneAndDelete({ email });
    if (!user) {
      res.status(410).send({ message: "failure", data: user });
      return;
    }
    res.send({ message: "success", user });
  } catch (e) {
    res.send(e.message);
  }
};

module.exports = {
  add_user,
  update_user,
  retrieve_user,
  delete_user,
};
