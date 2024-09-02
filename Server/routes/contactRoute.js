const router = require("express").Router();
const contact = require("../controllers/ContactController");

router.post("/contactus", contact);

module.exports = router;
