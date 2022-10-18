const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  product_name: { type: String, required: true },
  product_price: { type: Number, required: true },
  product_categories: { type: String, required: true },
  product_sizes: [{ type: Number, required: true }],
  product_avatar: { type: String, required: true },
  detailsImages: [{ type: String, required: true }],
});

let Product = mongoose.model("Product", productSchema);

module.exports = Product;
