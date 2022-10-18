const mongoose = require("mongoose");

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

let Invoice = mongoose.model("Invoice", invoiceSchema);
module.exports = Invoice;
