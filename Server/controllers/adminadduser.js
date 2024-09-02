const User = require("../models/User");
const validator = require("validator");
const bcrypt = require("bcrypt");
const add = async (req, res) => {
  try {
    const { fname, lname, email, phone, course, password } = req.body;
    // Validate required fields
    if (!fname || !lname || !email || !password || !phone || !course) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }

    // Validate email and password
    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    if (!validator.isLength(password, { min: 8 })) {
      return res
        .status(400)
        .json({ message: "Password must be at least 8 characters long" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        message: "User already exists, please login",
        success: false,
      });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const user = new User({
      fname,
      lname,
      email,
      course,
      phone,
      password: hashedPassword,
    });

    // Save user to database
    await user.save();

    res.status(201).json({
      message: "Added user successfully",
      status: true,
      fname: user.fname,
      course: user.course,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = add;
