const productControllers = require("../controllers/productControllers");
const express = require("express");
const router = express.Router();

router.post("/newProduct", productControllers.addProduct);
router.get("/getAll", productControllers.getAllProduct);
router.get("/getAProduct/:id", productControllers.getAProduct);
router.get("getProductByValue/:value", productControllers.getProductByValue)
router.put("/updateAProduct/:id", productControllers.updateAProduct);
module.exports = router;
