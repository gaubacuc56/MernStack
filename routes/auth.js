const authControllers = require("../controllers/authControllers");
const express = require("express");
const router = express.Router();

router.post("/register", authControllers.Register);
router.post("/login", authControllers.Login);

module.exports = router;
