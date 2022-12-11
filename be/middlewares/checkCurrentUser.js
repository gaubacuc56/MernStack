const jwt = require("jsonwebtoken");
const User = require("../model/user");

const isAuthenticated = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      return next("Please login to access the data");
    }
    const verify = await jwt.verify(token, process.env.TOKEN);
    req.user = await User.findById(verify.id);
    next();
  } catch (error) {
    return next(error);
  }
};
module.exports = { isAuthenticated };
