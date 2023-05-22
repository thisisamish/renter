const Joi = require("joi");
const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    email: {
      type: String,
      required: true,
      minLength: 5,
      maxLength: 255,
      unique: true,
    },
    name: { type: String, required: true, minLength: 5, maxLength: 50 },
    password: { type: String, required: true, minLength: 5, maxLength: 1024 },
  })
);

function validateUser(user) {
  const schema = Joi.object({
    email: Joi.string().min(5).max(255).required().email(),
    name: Joi.string().min(5).max(50).required(),
    password: Joi.string().min(5).max(255).required(),
  });

  return schema.validate(user);
}

exports.User = User;
exports.validate = validateUser;
