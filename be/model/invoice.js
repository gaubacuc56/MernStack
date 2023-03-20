const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema({
  invoice_createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  invoice_products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
  ],
  invoice_status: { type: String, required: true },
  invoice_deliveryAddress: { type: String, required: true },
  invoice_createDate: { type: Date, required: true },
  invoice_total: { type: Number, required: true },
});

let Invoice = mongoose.model("Invoice", invoiceSchema);
module.exports = Invoice;
