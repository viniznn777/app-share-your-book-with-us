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
      return res.status(200).json(response);
    }
  } catch (err) {
    return res.status(500).json({ error: "There was an internal error" });
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
    return res.status(200).redirect("http://localhost:3000/");
  } catch (err) {
    return res
      .status(400)
      .json({ error: "There was an error registering your post " + err });
  }
});

// Rota para Verificar se existe uma publicação com o id passado e verifica se o id de usuário passado na URL é o id do dono da publicação
router.get("/edit/:id/:user", async (req, res) => {
  try {
    const { id, user } = req.params;

    const post = await Post.findOne({ _id: id })
      .lean()
      .populate("category")
      .populate({
        path: "idUser",
        select: "username",
      });
    if (post) {
      if (post.idUser._id == user) {
        return res.status(200).json(post);
      } else {
        return res.status(403).json({
          message: "You are not the author of this publication!",
          received_id: user,
        });
      }
    } else {
      return res.status(404).json({ message: "Post not found!" });
    }
  } catch (err) {
    return res.status(500).json({ error: "There was an internal error" });
  }
});

// Rota POST para edição de publicação
router.post("/edit/:id/:user", async (req, res) => {
  const { id, user } = req.params;
  const { title, description, img, synopsis, category, author, slug } =
    req.body;

  try {
    await Post.findOneAndUpdate(
      { _id: id },
      {
        title,
        description,
        img,
        synopsis,
        category,
        author,
        slug,
        idUser: user, // Id recebido da rota, sendo passado para a chave idUser que contém no model de Post
      },
      { new: true }
    );
    return res
      .status(200)
      .json({ message: "Recommendation edited successfully!" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Internal error saving Post edit" });
  }
});

router.get("/delete-one/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Post.deleteOne({ _id: id });
    return res.status(200).json({ message: "Success to delete Post" });
  } catch (err) {
    return res.json({ error: "Failed to delete category " + err });
  }
});

module.exports = router;
