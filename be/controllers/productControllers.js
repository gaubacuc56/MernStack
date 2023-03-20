const Product = require("../model/product");
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
  getProductById: async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      /* <=> SELECT * FROM Product where Product.id = <id trả về> */
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getProducts: async (req, res) => {
    try {
      const page = parseInt(req.query.page) - 1 || 0;
      const limit = parseInt(req.query.limit) || 5;
      const search = req.query.search || "";
      let sort = req.query.sort || "product_price";
      let product_categories = req.query.product_categories || "All";

      const categoriesOptions = ["soccer", "tennis", "running", "basketball"];

      product_categories === "All"
        ? (product_categories = [...categoriesOptions])
        : (product_categories = req.query.product_categories.split(","));
      req.query.sort ? (sort = req.query.sort.split(",")) : (sort = [sort]);

      let sortBy = {};
      if (sort[1]) {
        sortBy[sort[0]] = sort[1];
      } else {
        sortBy[sort[0]] = "asc";
      }

      const products = await Product.find({
        product_name: { $regex: search, $options: "i" },
      })
        .where("product_categories")
        .in([...product_categories])
        .sort(sortBy)
        .skip(page * limit)
        .limit(limit);

      const total = await Product.countDocuments({
        product_categories: { $in: [...product_categories] },
        product_name: { $regex: search, $options: "i" },
      });

      const response = {
        error: false,
        total,
        page: page + 1,
        limit,
        categories: categoriesOptions,
        products,
      };

      res.status(200).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  updateProduct: async (req, res) => {
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
