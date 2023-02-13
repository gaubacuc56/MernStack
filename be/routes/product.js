const productControllers = require("../controllers/productControllers");
const express = require("express");
const router = express.Router();

router.get("/getAll", productControllers.getAllProduct);
router.get("/getProductById/:id", productControllers.getProductById);
router.post("/newProduct", productControllers.addProduct);
router.get("/getProductByValue/:value", productControllers.getProductByValue);
router.put("/updateAProduct/:id", productControllers.updateAProduct);
module.exports = router;
