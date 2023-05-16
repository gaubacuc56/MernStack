const mongoose = require("mongoose");

const CartProductSchema = new mongoose.Schema({
  product_list: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
  ],
  product_quantity: { type: Number, required: true },
});

const invoiceSchema = new mongoose.Schema({
  invoice_createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  invoice_products: [
    {
      type: CartProductSchema,
      required: true,
    },
  ],
  invoice_isDelivered: { type: Boolean, required: true },
  invoice_deliveryAddress: { type: String, required: true },
  invoice_createDate: { type: Date, required: true },
  invoice_total: { type: Number, required: true },
});

let Invoice = mongoose.model("Invoice", invoiceSchema);
module.exports = Invoice;
