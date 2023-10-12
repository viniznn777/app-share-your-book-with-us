const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../../models/User");
const passport = require("passport");

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
    return res.status(201).json({ user: user._id, token });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Error in registration" });
  }
});

// Rota para processar o formulário de login usando Passport
router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return res.status(500).json({ message: "An error occurred" });
    }
    if (!user) {
      return res.status(400).json({ message: info.message });
    }
    const token = jwt.sign(
      { _id: user._id },
      "e9f6ffeceb68d556ecba3ec3b828d560db40ca10c2eb74e74d7f6c64d12a54c5"
    );

    // Se o login for bem-sucedido, retornamos um status 200 e os dados do usuário, se necessário.
    res.status(200).json({ user: user._id, token });
  })(req, res, next);
});

// Rota para realizar o logout do usuário através do passport
router.get("/logout", (req, res, next) => {
  req.logout((err) => {
    res.status(200).json({ message: "Logout successful" });
  });
});

module.exports = router;
