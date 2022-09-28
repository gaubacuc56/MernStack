const { User } = require("../model/model");
const handleError = (err) => {
  let errors = {};

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
  return errors;
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
};
module.exports = authControllers;
