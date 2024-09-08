const AdmissionModel = require("../models/admissionform");

const Admission = async (req, res) => {
  try {
    const {
      Name,
      registrationNumber,
      score,
      aadhaar,
      religion,
      category,
      class12Percentage,
      class10Percentage,
    } = req.body;

    if (
      !registrationNumber ||
      !score ||
      !aadhaar ||
      !Name ||
      !religion ||
      !category ||
      !class12Percentage ||
      !class10Percentage
    ) {
      return res.status(400).json({
        message: "Please fill all the required fields",
        status: false,
      });
    }

    const newAdmission = new AdmissionModel({
      Name,
      registrationNumber,
      score,
      aadhaar,
      religion,
      category,
      class12Percentage,
      class10Percentage,
    });

    await newAdmission.save();

    res.status(201).json({
      message: "Admission form saved successfully",
      status: true,
    });
  } catch (error) {
    console.error("Error saving admission form:", error);
    res.status(500).json({
      error: "Failed to save Admission form",
      message: error.message,
    });
  }
};

module.exports = Admission;
