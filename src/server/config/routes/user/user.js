const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
require("../../models/User");
const User = mongoose.model("User");

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findOne({ _id: id });
    if (!user) {
      return res.status(400).json({ message: "Not found user." });
    }

    res.status(200).json(user.username);
  } catch (err) {
    console.log();
  }
});

module.exports = router;
