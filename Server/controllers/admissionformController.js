const AdmissionModel = require("../models/admissionform");

const Admission = async (req, res) => {
  try {
    const {
      registrationNumber,
      score,
      aadhaar,
      fatherName,
      religion,
      category,
      class12Percentage,
      class10Percentage,
    } = req.body;

    if (
      !registrationNumber ||
      !score ||
      !aadhaar ||
      !fatherName ||
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
      registrationNumber,
      score,
      aadhaar,
      fatherName,
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
