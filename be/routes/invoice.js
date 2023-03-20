const invoiceControllers = require("../controllers/invoiceControllers");
const { isAuthenticated } = require("../middlewares/checkCurrentUser");

const express = require("express");
const router = express.Router();

router.get("/getInvoiceByID/:id", invoiceControllers.getInvoiceById);
router.get("/getInvoiceByUser", isAuthenticated, invoiceControllers.getInvoiceByUser);
router.get("/getInvoices", invoiceControllers.getInvoices);

router.post("/newInvoice", invoiceControllers.addInvoice);
router.put("/updateInvoice/:id", isAuthenticated, invoiceControllers.updateInvoice);


module.exports = router;
