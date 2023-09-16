const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../../models/User");

router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
      return res.status(400).json({ message: "Email is already in use!" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username: username,
      email: email,
      password: hashedPassword,
    });

    const user = await newUser.save();

    const token = jwt.sign(
      {
        _id: user._id,
      },
      "e9f6ffeceb68d556ecba3ec3b828d560db40ca10c2eb74e74d7f6c64d12a54c5"
    ); // secretKey
    res.status(201).json({ user: user._id, token });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error in registration" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(400).json({ message: "Email not registered!" });
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(400).json({ message: "Incorrect password" });
    }

    const token = jwt.sign(
      { _id: user._id },
      "e9f6ffeceb68d556ecba3ec3b828d560db40ca10c2eb74e74d7f6c64d12a54c5"
    );
    res.json({ user: user._id, token });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error when trying to login" });
  }
});

module.exports = router;
