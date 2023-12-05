const express = require("express");
const router = express.Router();
const User = require("../models/user");


router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const data = await User.findOne({ email, password });
    if (data) {
      res.status(200).json({ message: "Login Successful" });
    } else {
      res.status(400).json({ message: "Invalid Credentials" });
    }
  } catch (error) {
    res.status(400).json({ message: "Login Unsuccessful" });
  }
});
router.post("/signup", async (req, res) => {
  const { email, password, referalCode, username } = req.body;

  try {
    const data = User({
      email,
      password,
      referalCode,
      username,
    });
    await data.save();
    res.status(201).json({ message: "Signup" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
});
module.exports = router;
