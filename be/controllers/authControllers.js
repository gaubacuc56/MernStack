const User = require("../model/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

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

const maxAge = 0.25 * 24 * 60 * 60; // 6 hours
const createToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN, {
    expiresIn: maxAge,
  });
};

const authControllers = {
  Register: async (req, res) => {
    try {
      const newUser = new User(req.body);
      await newUser.save();
      const token = createToken(newUser._id);
      return res.cookie("token", token).json({
        success: true,
        message: "User registered successfully",
        data: newUser,
      });
    } catch (error) {
      let errors = handleError(error);
      res.status(400).json(errors);
    }
  },
  Login: async (req, res) => {
    try {
      const { user_info, user_password } = req.body;
      if (!user_info || !user_password) {
        return res
          .status(400)
          .json({ message: "Please enter all the details" });
      }

      /* Check if user is existed */
      const userExist = await User.findOne({
        $or: [{ user_email: user_info }, { user_phone: user_info }],
      });

      if (!userExist) {
        return res
          .status(400)
          .json({ message: "Invalid email/phone or password" });
      }

      /* Check if the password is matched*/
      const isPasswordMatched = await bcrypt.compare(
        user_password,
        userExist.user_password
      );
      if (!isPasswordMatched) {
        return res
          .status(400)
          .json({ message: "Invalid email/phone or password" });
      }

      const token = createToken(userExist._id);
      return res.cookie("token", token).json({
        success: true,
        message: "Login Successfully",
        userToken: token,
      });
    } catch (error) {
      let errors = handleError(error);
      res.status(400).json(errors);
    }
  },

  getAllUser: async (req, res) => {
    try {
      const page = parseInt(req.query.page) - 1 || 0;
      const limit = parseInt(req.query.limit) || 5;

      const name = req.query.name || "";
      const email = req.query.email || "";
      const phone = req.query.phone || "";
      const address = req.query.address || "";

      /*     const roleOptions = ["client", "admin"];

      user_role === "All"
        ? (user_role = [...roleOptions])
        : (user_role = req.query.user_role.split(","));
      req.query.sort ? (sort = req.query.sort.split(",")) : (sort = [sort]); */

      const users = await User.find({
        user_name: { $regex: name, $options: "i" },
        user_email: { $regex: email, $options: "i" },
        user_phone: { $regex: phone, $options: "i" },
        user_address: { $regex: address, $options: "i" },
      })
        /*    .where("user_role")
        .in([...user_role]) */
        .skip(page * limit)
        .limit(limit);

      const total = await User.countDocuments({
        user_name: { $regex: name, $options: "i" },
        user_email: { $regex: email, $options: "i" },
        user_phone: { $regex: phone, $options: "i" },
        user_address: { $regex: address, $options: "i" },
      });

      const response = {
        error: false,
        total,
        page: page + 1,
        limit,
        users,
      };

      res.status(200).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getUser: async (req, res, next) => {
    try {
      res.status(200).json(req.user);
    } catch (error) {
      res.json(error);
    }
  },
};
module.exports = authControllers;
