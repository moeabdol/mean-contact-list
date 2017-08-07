const express = require("express");

const router = express.Router();

const Contact = require("../models/contact");

router.get("/contacts", (req, res) => {
  Contact.find((err, contacts) => {
    if (err) {
      res.send(500, err);
    } else {
      res.status(200).json(contacts);
    }
  });
});

router.post("/contacts", (req, res) => {
  let contact = new Contact({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phone: req.body.phone
  });

  contact.save((err, contact) => {
    if (err) {
      res.send(500, err);
    } else {
      res.status(201).json(contact);
    }
  });
});

router.delete("/contacts/:id", (req, res) => {
  Contact.remove({ _id: req.params.id }, (err, result) => {
    if (err) {
      res.send(500, err);
    } else {
      res.status(200).json(result);
    }
  });
});

module.exports = router;
