const {
  Register,
  Login,
  getAllUser,
  getUser,
} = require("../controllers/authControllers");
const { isAuthenticated } = require("../middlewares/checkCurrentUser");

const express = require("express");
const router = express.Router();

router.post("/register", Register);
router.post("/login", Login);
router.get("/getAllUser", isAuthenticated, getAllUser);
router.get("/getUser", isAuthenticated, getUser);

module.exports = router;
