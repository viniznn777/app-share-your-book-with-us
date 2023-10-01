const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
require("../../models/User");
const User = mongoose.model("User");
require("../../models/Post");
const Post = mongoose.model("posts");

// Rota para retornar todas as informações de todos os usuários

router.get("/return/all_users/adm/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({ _id: id }).lean();

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    if (user.adm === true) {
      const all_users = await User.find().lean().sort({ date: "desc" });
      return res.status(200).json(all_users);
    } else {
      return res.status(403).json({
        message:
          "You do not have access to this page as you do not have administrator permissions",
      });
    }
  } catch (err) {
    return res
      .status(500)
      .json({ message: "There was an internal error loading users" });
  }
});

// Rota para deletar um usuário
router.delete("/users/del/:id", async (req, res) => {
  try {
    const { id } = req.params;

    try {
      // Primeiro, encontre o usuário pelo ID
      const user = await User.findById(id);

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      // exclua todos os posts associados a esse usuário
      await Post.deleteMany({ idUser: user._id });

      // exclua o próprio usuário
      await User.findByIdAndDelete(id);

      return res
        .status(200)
        .json({ message: "User and posts successfully deleted" });
    } catch (error) {
      return res.status(500).json({ message: "Unable to delete user" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

// Rota para tornar um usuário admin
router.put("/admin_position/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findOne({ _id: id });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    await User.findOneAndUpdate({ _id: id }, { adm: true }, { new: true });
    return res
      .status(200)
      .json({ message: "Now the user is an administrator" });
  } catch (err) {
    return res.status(500).json({ message: "Internal server error" });
  }
});
// Rota para tornar um usuário admin
router.put("/admin_position/remove/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findOne({ _id: id });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    await User.findOneAndUpdate({ _id: id }, { adm: false }, { new: true });
    return res
      .status(200)
      .json({ message: "This user is no longer an administrator!" });
  } catch (err) {
    return res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
