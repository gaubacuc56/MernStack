/* Import library */
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
/* Import route */
const productRoute = require("./routes/product");

/* Define Port */
const PORT = 5000;

dotenv.config();
/* connect database */
const URL = process.env.MONGODB_URL;
mongoose.connect(URL, () => {
  console.log("Database connected");
});

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("common"));

/* Routes: */
app.use("/api/product", productRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
