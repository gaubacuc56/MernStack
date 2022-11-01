const authControllers = require("../controllers/authControllers");
const express = require("express");
const router = express.Router();

router.post("/register", authControllers.Register);
router.post("/login", authControllers.Login);
router.get("/getUser/:id", authControllers.getUser);
router.get("/getAllUser", authControllers.getAllUser);

module.exports = router;
