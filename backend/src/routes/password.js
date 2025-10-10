const express = require("express");
const router = express.Router();
const { checkPassword } = require("../controllers/passwordController");

router.post("/", checkPassword);

module.exports = router;
