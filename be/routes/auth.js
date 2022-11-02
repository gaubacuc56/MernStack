const {
  Register,
  Login,
  getAllUser,
  getUser,
} = require("../controllers/authControllers");
const { checkCurrentUser } = require("../middlewares/checkCurrentUser");
const express = require("express");
const router = express.Router();

router.post("/register", Register);
router.post("/login", Login);
router.get("/getAllUser", getAllUser);
router.get("/", checkCurrentUser, getUser);
// router.route("/").get(checkCurrentUser, getUser);

module.exports = router;
