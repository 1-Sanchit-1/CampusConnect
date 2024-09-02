const ContactModel = require("../models/Contact");

const Contact = async (req, res) => {
  try {
    const { fname, lname, email, phone, message } = req.body;
    // console.log(fname, lname, email, phone, message);
    if (!email || !phone || !message || !fname || !lname) {
      return res.status(404).json({
        message: "Fill all the Fields",
        status: false,
      });
    }
    const newContact = new ContactModel({
      fname,
      lname,
      email,
      phone,
      message,
    });
    await newContact.save();
    res.status(201).json({
      fname: newContact.fname,
      status: true,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to save contact" });
  }
};

module.exports = Contact;
