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
      return res.status(200).json(response);
    }
  } catch (err) {
    return res.status(500).json({ error: "There was an internal error" });
  }
});

// Rota que restorna uma categoria através do seu id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findOne({ _id: id });
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    return res.status(200).json(category);
  } catch (err) {
    return res.status(500).json({ error: "There was an internal error" });
  }
});

router.post("/new", async (req, res) => {
  try {
    const { name, slug, restrictModel, description, img } = req.body;
    const newCategory = { name, slug, restrictModel, description, img };
    await new Category(newCategory).save();
    return res.status(200).json({ message: "Success creating the category" });
  } catch (err) {
    return res
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
    return res.status(200).json({ message: "Success when editing category" });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ error: "Internal error saving category edit" });
  }
});

router.post("/delete-one", async (req, res) => {
  try {
    const { id } = req.body;
    await Category.deleteOne({ _id: id });
    return res.status(200).json({ message: "Successful deleting category" });
  } catch (err) {
    return res.json({ error: "Failed to delete category " + err });
  }
});

router.get("/:slug", async (req, res) => {
  try {
    const { slug } = req.params;
    console.log(slug);
    const category = await Category.findOne({ slug: slug }).lean();

    if (category) {
      const posts = await Post.find({ category: category._id })
        .populate("category")
        .populate({
          path: "idUser",
          select: "username",
        })
        .lean();

      res.json(posts);
    } else {
      return res.status(404).json({ error: "This category does not exist" });
    }
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ error: err.message || "Internal server error" });
  }
});

module.exports = router;
