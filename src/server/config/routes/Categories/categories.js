const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
require("../../models/Category");
const Category = mongoose.model("categories");
require("../../models/Post");
const Post = mongoose.model("posts");

router.get("/", async (req, res) => {
  try {
    const response = await Category.find().lean().sort({ date: "desc" });

    if (response) {
      res.status(200).json(response);
    }
  } catch (err) {
    res.status(500).json({ error: "There was an internal error" });
  }
});

router.post("/new", async (req, res) => {
  try {
    const { name, slug, restrictModel, description, img } = req.body;
    const newCategory = { name, slug, restrictModel, description, img };
    await new Category(newCategory).save();
    res.status(200);
  } catch (err) {
    res
      .status(400)
      .json({ error: "There was an error registering your category " + err });
  }
});

router.post("/edit", async (req, res) => {
  const { id, name, slug, restrictModel, description, img } = req.body;

  try {
    await Category.findOneAndUpdate(
      { _id: id },
      {
        name: name,
        slug: slug,
        restrictModel: restrictModel,
        description: description,
        img: img,
      },
      { new: true }
    );
    res.status(200);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal error saving category edit" });
  }
});

router.post("/delete-one", async (req, res) => {
  try {
    const { id } = req.body;
    await Category.deleteOne({ _id: id });
    res.status(200);
  } catch (err) {
    res.json({ error: "Failed to delete category " + err });
  }
});

router.get("/:slug", async (req, res) => {
  try {
    const { slug } = req.params;

    await Category.findOne({ slug: slug })
      .lean()
      .then((category) => {
        if (category) {
          Post.find({ category: category._id })
            .populate("category")
            // Mostrar o nome de usuário do criador da publicação. Retornando na chave idUser
            .populate({
              path: "idUser",
              select: "username",
            })
            .lean()
            .then((posts) => {
              res.json(posts);
            })
            .catch((err) => {
              res.json(err);
            });
        } else {
          res.status(404).json({ error: "This category does not exist" });
        }
      })
      .catch((err) => {
        res.json(err);
      });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
