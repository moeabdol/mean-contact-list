const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const contactSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Contact", contactSchema);
