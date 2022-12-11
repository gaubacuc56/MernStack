const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  user_name: { type: String, required: [true, "Please enter your name"] },
  user_email: {
    type: String,
    required: [true, "Please enter your email"],
    index: { unique: true },
    lowercase: true,
    validate: [isEmail, "Please enter a valid email"],
  },
  user_phone: {
    type: String,
    index: { unique: true },
    required: [true, "Please enter your phone number"],
  },
  user_address: { type: String, required: [true, "Please enter your address"] },
  user_role: { type: String, required: [true, "Please enter your role"] },
  user_password: {
    type: String,
    required: [true, "Please enter your password"],
    minLength: [8, "Password must contain at least 8 characters"],
  },
  user_invoices: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Invoice",
    },
  ],
  token: {
    type: String,
  },
});
//Hashing user password
userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.user_password = await bcrypt.hash(this.user_password, salt);
  next();
});

let User = mongoose.model("User", userSchema);
module.exports = User;
