const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
require("../../models/User");
const User = mongoose.model("User");
require("../../models/Post");
const Post = mongoose.model("posts");
const bcrypt = require("bcrypt");

// Rota para buscar o nome de usuário de um usuário cadastrado
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findOne({ _id: id });
    if (!user) {
      return res.status(400).json({ message: "User not found!" });
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
      return res.status(400).json({ message: "User not found!" });
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
    res.status(200).json({ message: "Password changed successfully!" });
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
    res.status(200).json({ message: "Email changed successfully!" });
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

// Rota para mostrar as publicações do usuário logado
router.get("/my-recommendations/:id", async (req, res) => {
  try {
    const { id } = req.params;
    // Buscando no Banco de Dados se existe o usuário com o id passado
    await User.findOne({ _id: id })
      .lean()
      .then((user) => {
        // Se existir, pesquisaremos todos os posts em que na chave 'idUser' contém o id passado
        if (user) {
          Post.find({ idUser: user._id })
            .populate({ path: "idUser", select: "username" })
            .populate("category")
            .lean()
            .then((posts) => res.json(posts))
            .catch((err) => res.json(err));
        } else {
          res.status(404).json({ error: "This user does not exist" });
        }
      })
      .catch((err) => res.json(err));
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal error" });
  }
});

module.exports = router;
