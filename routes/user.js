const express = require("express");
const router = express.Router();
const User = require("../models/user");
const createToken = require("../utils/token");

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const data = await User.findOne({ email, password });
    const token = await createToken({ email: email });
    console.log(token);
    if (data) {
      res.status(200).json({ message: "Login Successful", token });
    } else {
      res.status(400).json({ message: "Invalid Credentials" });
    }
  } catch (error) {
    console.log(error);
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
    const user = await data.save();
    const token = await createToken({ email: user.email });
    res.status(201).json({ message: "Signup", token });
  } catch (error) {
    res.status(500).json({ message: error });
  }
});
module.exports = router;
