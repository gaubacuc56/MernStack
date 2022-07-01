const { Product } = require("../model/model");
const productControllers = {
  // Add:
  addProduct: async (req, res) => {
    try {
      const newProduct = new Product(req.body);
      const saveProduct = await newProduct.save();
      res.status(200).json(saveProduct);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getAllProduct: async (req, res) => {
    try {
      const products = await Product.find(); /* <=> SELECT * FROM Product */
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getAProduct: async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      /* <=> SELECT * FROM Product where Product.id = <id trả về> */
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  updateAProduct: async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      await product.updateOne({ $set: req.body });
      res.status(200).json("Update Successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
module.exports = productControllers;
