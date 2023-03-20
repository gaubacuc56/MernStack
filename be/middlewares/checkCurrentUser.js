const jwt = require("jsonwebtoken");
const User = require("../model/user");

const isAuthenticated = async (req, res, next) => {
  try {
    const Authorization = req.header("authorization");
    if (!Authorization) {
      return next("Please login to access the data");
    }
    const token = Authorization.replace("Bearer ", "");

    const verify = await jwt.verify(token, process.env.TOKEN);
    req.user = await User.findById(verify.id);
    next();
  } catch (error) {
    return next(error);
  }
};
module.exports = { isAuthenticated };
