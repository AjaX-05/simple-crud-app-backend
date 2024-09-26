const express = require("express");
const app = express();
const Product = require("./models/product.model");
const productRoute = require("./routes/product.route");

const mongoose = require("mongoose");

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  console.log(req.body);
  res.status(200).send("Helo Wrld!");
});

mongoose
  .connect(
    "MONGO ATLAS CONNECTION STRING"
  )
  .then(() => {
    console.log("Connected to DB");
    app.listen(5000, () => {
      console.log("Listening on port 5000");
    });
  })
  .catch((err) => {
    console.log("Error connecting:", err);
  });
