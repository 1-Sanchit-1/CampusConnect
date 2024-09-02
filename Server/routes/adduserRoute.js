const adduser = require("../controllers/adminadduser");
const router = require("express").Router();

router.post("/adduser", adduser);

module.exports = router;
