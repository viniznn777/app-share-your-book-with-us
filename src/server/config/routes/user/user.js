const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
require("../../models/User");
const User = mongoose.model("User");
const bcrypt = require("bcrypt");

// Rota para buscar o nome de usuário de um usuário cadastrado
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findOne({ _id: id });
    if (!user) {
      return res.status(400).json({ message: "Not found user." });
    }

    res.status(200).json({ username: user.username });
  } catch (err) {
    console.log(err);
  }
});

// Rota para retornar o email do usuário
router.get("/:id/em", async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findOne({ _id: id });
    if (!user) {
      return res.status(400).json({ message: "Not found user." });
    }

    res.status(200).json({ email: user.email });
  } catch (err) {
    console.log(err);
  }
});

// Rota para a redefinição de senha
router.post("/redefine-password", async (req, res) => {
  try {
    const { oldPassword, newPassword, id } = req.body;
    console.log(oldPassword, newPassword, id);
    const user = await User.findOne({ _id: id });

    if (!user) {
      return res
        .status(404)
        .json({ message: "Unable to find your account in the database!" });
    }
    const validPassword = await bcrypt.compare(oldPassword, user.password);

    if (!validPassword) {
      return res.status(400).json({ message: "Incorrect password" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    await User.findOneAndUpdate(
      { _id: id },
      { password: hashedPassword },
      { new: true }
    );
    res.status(200).json({ message: "Senha alterada com sucesso!" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal error" });
  }
});

// Rota para redefinir o email
router.post("/redefine-email", async (req, res) => {
  try {
    const { newEmail, id } = req.body;
    const user = await User.findOne({ _id: id });

    if (!user) {
      return res
        .status(404)
        .json({ message: "Unable to find your account in the database!" });
    }

    await User.findOneAndUpdate(
      { _id: id },
      { email: newEmail },
      { new: true }
    );
    res.status(200).json({ message: "Email alterado com sucesso!" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal error" });
  }
});

// Rota para deletar uma conta
router.post("/del", async (req, res) => {
  try {
    const { id, password } = req.body;

    const user = await User.findOne({ _id: id });

    if (!user) {
      return res
        .status(404)
        .json({ message: "Unable to find your account in the database!" });
    }
    // Comparando as senhas para deletar a conta
    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(400).json({ message: "Incorrect password" });
    }

    await User.deleteOne({ _id: id });

    res.status(200).json({ message: "User deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal error saving category edit" });
  }
});

module.exports = router;
