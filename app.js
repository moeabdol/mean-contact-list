// Importing modules
const express    = require("express");
const mongoose   = require("mongoose");
const bodyParser = require("body-parser");
const cors       = require("cors");
const path       = require("path");

const app = express();

const routes = require("./routes/routes");

const port = 3000;

// Add middleware
app.use(cors());
app.use(bodyParser.json());

// Static files
app.use(express.static(path.join(__dirname, "public")));

app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("working");
});

app.listen(port, () => {
  console.log("Server started at port: " + port);
});
