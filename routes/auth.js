const authControllers = require("../controllers/authControllers");
const express = require("express");
const router = express.Router();

router.post("/register", authControllers.Register);

module.exports = router;
