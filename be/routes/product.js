const productControllers = require("../controllers/productControllers");
const { isAuthenticated } = require("../middlewares/checkCurrentUser");
const express = require("express");
const router = express.Router();

router.get("/getProductById/:id", productControllers.getProductById);
router.get("/getProducts", productControllers.getProducts);

router.post("/newProduct", isAuthenticated, productControllers.addProduct);

router.put(
  "/updateProduct/:id",
  isAuthenticated,
  productControllers.updateProduct
);
router.delete(
  "/deleteProduct/:id",
  isAuthenticated,
  productControllers.deleteProduct
);

module.exports = router;
