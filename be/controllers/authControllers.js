const User = require("../model/user");
const jwt = require("jsonwebtoken");
const handleError = (err) => {
  let errors = {};
  console.log(String(err));

  /* For register */
  if (err.code === 11000) {
    if (err.keyValue.user_email)
      errors.user_email = "This email is already existed";
    else if (err.keyValue.user_phone)
      errors.user_phone = "This phone number is already existed";
  }

  if (err._message === "User validation failed") {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  /* For login */

  if (String(err) === "Error: Invalid email/phone or password")
    errors = "Invalid email/phone or password";
  return errors;
};

const maxAge = 3 * 24 * 60 * 60; // 3 days
const createToken = (id) => {
  return jwt.sign({ id }, "User secret token", {
    expiresIn: maxAge,
  });
};

const authControllers = {
  Register: async (req, res) => {
    try {
      const newUser = await User.create(req.body);
      res.status(201).json(newUser);
    } catch (error) {
      let errors = handleError(error);
      res.status(400).json(errors);
    }
  },
  Login: async (req, res) => {
    const { user_info, user_password } = req.body;
    try {
      const user = await User.login(user_info, user_password);
      const token = createToken(user._id);
      res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
      res.status(200).json({ user_id: user._id, user_token: token });
    } catch (error) {
      let errors = handleError(error);
      res.status(400).json(errors);
    }
  },
};
module.exports = authControllers;
