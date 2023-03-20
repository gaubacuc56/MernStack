const Invoice = require("../model/invoice");


const validStatus = ['New', 'Delivering', 'Done', 'Deleted']
const InvoiceControllers = {
  // Add:
  addInvoice: async (req, res) => {
    try {
      if (validStatus.includes(req.body.invoice_status) === false) {
        return res
          .status(400)
          .json({ message: "Invalid status" });
      }
      const newInvoice = new Invoice(req.body);
      const saveInvoice = await newInvoice.save();
      res.status(200).json(saveInvoice);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // Get By ID
  getInvoiceById: async (req, res) => {
    try {
      const invoice = await Invoice.findById(req.params.id)
        .populate("invoice_createdBy")
        .populate("invoice_products");
      /* <=> SELECT * FROM Invoice where Invoice.id = <id trả về> */
      res.status(200).json(invoice);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  //Get All

  getInvoices: async (req, res) => {
    try {
      const page = parseInt(req.query.page) - 1 || 0;
      const limit = parseInt(req.query.limit) || 5;
      const fromDate = req.query.fromDate || "";
      const toDate = req.query.toDate || "2023-01-01";

      const invoices = await Invoice.find(/* {
        invoice_createDate: {
          $gt: Date("2023-01-01"),
          $lt: new Date("2023-01-01"),
        },
      } */)
        .skip(page * limit)
        .limit(limit)
        .populate("invoice_createdBy")
        .populate("invoice_products");

      const response = {
        page: page + 1,
        limit,
        invoices,
      };

      res.status(200).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // Get by user ID
  getInvoiceByUser: async (req, res) => {
    try {
      const invoice = await Invoice.find({
        invoice_createdBy: req.user.id,
      })
        .populate("invoice_createdBy")
        .populate("invoice_products");
      res.status(200).json(invoice);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // Update status
  updateInvoice: async (req, res) => {
    try {
      if (req.body.hasOwnProperty('invoice_status')) {
        if (validStatus.includes(req.body.invoice_status) === false) {
          return res
            .status(400)
            .json({ message: "Invalid status" });
        }
      }
      const invoice = await Invoice.findById(req.params.id);
      await invoice.updateOne({ $set: req.body });
      res.status(200).json("Update Successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
module.exports = InvoiceControllers;
