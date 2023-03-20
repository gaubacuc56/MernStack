/* Import library */
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

/* Import route */
const productRoute = require("./routes/product");
const authRoute = require("./routes/auth");
const invoiceRoute = require("./routes/invoice");

/* Define Port */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

dotenv.config();
/* connect database */
const URL = process.env.MONGODB_URL;

mongoose.connect(URL, (err) => {
  if (err) throw err;
  console.log("Connected to MongoDB");
});

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(morgan("common"));
app.use(cookieParser());

/* Routes: */
app.use("/api/product", productRoute);
app.use("/api/auth", authRoute);
app.use("/api/invoice", invoiceRoute);
