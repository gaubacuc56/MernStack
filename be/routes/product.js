const productControllers = require("../controllers/productControllers");
const express = require("express");
const router = express.Router();

router.get("/getProductById/:id", productControllers.getProductById);
router.post("/newProduct", productControllers.addProduct);
router.get("/getProducts", productControllers.getProducts);

router.put("/updateAProduct/:id", productControllers.updateAProduct);
module.exports = router;
