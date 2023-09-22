const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
require("../../models/Post");
const Post = mongoose.model("posts");

router.get("/", async (req, res) => {
  try {
    const response = await Post.find()
      .lean()
      .populate("category")
      // Mostrar o nome de usuário do criador da publicação. Retornando na chave idUser
      .populate({
        path: "idUser",
        select: "username",
      })
      .sort({ date: "desc" });

    if (response) {
      res.status(200).json(response);
    }
  } catch (err) {
    res.status(500).json({ error: "There was an internal error" });
  }
});

router.post("/new", async (req, res) => {
  try {
    const { title, description, img, synopsis, category, author, slug, id } =
      req.body;
    const newPost = {
      title,
      description,
      img,
      synopsis,
      category,
      author,
      slug,
      idUser: id, // Id recebido de um input hidden do front-end, sendo passado para a chave idUser que contém no model de Post
    };
    await new Post(newPost).save();
    res.status(200).redirect("http://localhost:3000/");
  } catch (err) {
    res
      .status(400)
      .json({ error: "There was an error registering your post " + err });
  }
});

module.exports = router;
