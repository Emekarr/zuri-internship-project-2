const { Schema, model } = require("mongoose");

const user_schema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    minlength: 2,
    maxlength: 10,
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    required: true,
    validate(value) {
      const validateEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!validateEmail.test(value))
        throw new Error("Invalid email used! Check your email and try again.");
    },
  },
  country: {
    type: String,
    required: true,
    trim: true,
  },
});

User = model("User", user_schema);

module.exports = User;
