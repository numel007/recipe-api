const express = require("express");
const router = express.Router();

const User = require("../models/user");
const Recipe = require("../models/recipe");

// Get all recipes
router.get("/", (req, res) => {
  Recipe.find()
    .then((allRecipes) => {
      return res.json({ allRecipes });
    })
    .catch((err) => {
      throw err.message;
    });
});

// POST new recipe
router.post("/", (req, res) => {
  let recipe = new Recipe(req.body);

  recipe
    .save()
    .then((recipe) => {
      return User.findById(recipe.author);
    })
    .then((author) => {
      author.recipes.unshift(recipe);
      return author.save();
    })
    .then((author) => {
      return res.json({
        message: `${recipe.title} added.`,
        author: author.username,
      });
    })
    .catch((err) => {
      throw err.message;
    });
});

// GET specific recipe details
router.get("/:id", (req, res) => {
  Recipe.findById(req.params.id)
    .then((foundRecipe) => {
      return res.json({ foundRecipe });
    })
    .catch((err) => {
      throw err.message;
    });
});

// Update existing recipe details
router.put("/:id", (req, res) => {
  Recipe.findById(req.params.id)
    .then((oldRecipe) => {
      return oldRecipe;
    })
    .then((oldRecipe) => {
      Recipe.findByIdAndUpdate(req.params.id, req.body)
        .then(() => {
          return Recipe.findOne({ title: req.body.title });
        })
        .then((updatedRecipe) => {
          return res.json({
            message: "Recipe updated.",
            title: `${oldRecipe.title} -> ${updatedRecipe.title}`,
            ingredients: `${oldRecipe.ingredients} -> ${updatedRecipe.ingredients}`,
            method: `${oldRecipe.method} -> ${updatedRecipe.method}`,
            author: `${oldRecipe.author} -> ${updatedRecipe.author}`,
          });
        })
        .catch((err) => {
          throw err.message;
        });
    });
});

// Delete existing recipe
router.delete("/:id", (req, res) => {
  Recipe.findByIdAndDelete(req.params.id)
    .then((result) => {
      if (result === null) {
        return res.json({ message: "ID matched no recipe" });
      } else {
        return res.json({ message: "Recipe deleted." });
      }
    })
    .catch((err) => {
      throw err.message;
    });
});
module.exports = router;
