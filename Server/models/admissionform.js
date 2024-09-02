const mongoose = require("mongoose");

const { Schema } = mongoose;

const admissionSchema = new Schema({
  registrationNumber: {
    type: String,
    required: true,
  },
  score: {
    type: String,
    required: true,
  },
  aadhaar: {
    type: String,
    required: true,
  },
  fatherName: {
    type: String,
    required: true,
  },
  religion: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  class12Percentage: {
    type: String,
    required: true,
  },
  class10Percentage: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Admission = mongoose.model("admission", admissionSchema);
module.exports = Admission;
