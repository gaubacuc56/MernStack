const invoiceControllers = require("../controllers/invoiceControllers");
const express = require("express");
const router = express.Router();

router.get("/getInvoiceByID/:id", invoiceControllers.getInvoiceById);
router.get("/getInvoiceByUser/:userId", invoiceControllers.getInvoiceByUser);
router.get("/getInvoices", invoiceControllers.getInvoices);

router.post("/newInvoice", invoiceControllers.addInvoice);

module.exports = router;
