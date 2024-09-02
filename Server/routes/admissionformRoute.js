const router = require("express").Router();
const admission = require("../controllers/admissionformController");

router.post("/admissionform", admission);

module.exports = router;
