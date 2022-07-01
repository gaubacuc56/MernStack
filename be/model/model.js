const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  product_name: { type: String, require: true },
  product_price: { type: Number, require: true },
  product_categories: { type: String, require: true },
  product_sizes: [{ type: Number, require: true }],
  product_avatar: { type: String, require: true },
  detailsImages: [{ type: String, require: true }],
});

const userSchema = new mongoose.Schema({
  user_name: { type: String, require: true },
  user_email: { type: String, require: true },
  user_phone: { type: String, require: true },
  user_address: { type: String, require: true },
  user_role: { type: String, require: true },
  user_invoices: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Invoice",
    },
  ],
});

const invoiceSchema = new mongoose.Schema({
  invoice_userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
  invoice_productId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      require: true,
    },
  ],
  invoice_date: { type: String, require: true },
  invoice_total: { type: Number, require: true },
});

let Product = mongoose.model("Product", productSchema);
let User = mongoose.model("User", userSchema);
let Invoice = mongoose.model("Invoice", invoiceSchema);
module.exports = { Product, User, Invoice };
