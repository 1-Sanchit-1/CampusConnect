const router = require("express").Router();
const admission = require("../controllers/admissionformController");
const { requireAuth } = require("../middleware/requireAuth");

router.post("/admissionform", requireAuth, admission);

module.exports = router;
