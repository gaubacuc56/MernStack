const mongoose = require("mongoose");
const { isEmail } = require("validator");

const productSchema = new mongoose.Schema({
  product_name: { type: String, required: true },
  product_price: { type: Number, required: true },
  product_categories: { type: String, required: true },
  product_sizes: [{ type: Number, required: true }],
  product_avatar: { type: String, required: true },
  detailsImages: [{ type: String, required: true }],
});

const userSchema = new mongoose.Schema({
  user_name: { type: String, required: [true, "Please enter your name"] },
  user_email: {
    type: String,
    required: [true, "Please enter your email"],
    index: { unique: true },
    lowercase: true,
    validate: [isEmail, "Please enter a valid email"],
  },
  user_phone: {
    type: String,
    index: { unique: true },
    required: [true, "Please enter your phone number"],
  },
  user_address: { type: String, required: [true, "Please enter your address"] },
  user_role: { type: String, required: [true, "Please enter your role"] },
  user_password: {
    type: String,
    required: [true, "Please enter your password"],
    minLength: [8, "Password must contain at least 8 characters"],
  },
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
    required: true,
  },
  invoice_productId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
  ],
  invoice_date: { type: String, required: true },
  invoice_total: { type: Number, required: true },
});

let Product = mongoose.model("Product", productSchema);
let User = mongoose.model("User", userSchema);
let Invoice = mongoose.model("Invoice", invoiceSchema);
module.exports = { Product, User, Invoice };
