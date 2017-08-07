// Importing modules
const express    = require("express");
const mongoose   = require("mongoose");
const bodyParser = require("body-parser");
const cors       = require("cors");
const path       = require("path");

const app = express();

const routes = require("./routes/routes");

mongoose.Promise = global.Promise;

// Connect to database
mongoose.connect("mongodb://localhost:27017", { useMongoClient: true });
mongoose.connection.on("connected", () => {
  console.log("Connected to database");
});
mongoose.connection.on("error", (err) => {
  if (err) {
    console.log("Error in database connection: " + err);
  }
});

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
