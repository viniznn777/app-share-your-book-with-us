const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
require("../../models/User");
const User = mongoose.model("User");

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

module.exports = router;
