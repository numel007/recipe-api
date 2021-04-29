const express = require('express')
const router = express.Router()

const Recipe = require('../models/recipe')

// Get all recipes
router.get('/', (req, res) => {
    Recipe.find().then( allRecipes => {
        return res.json({allRecipes})
    })
    .catch( err => {
        throw err.message
    })
})

// POST new recipe
router.post('/', (req, res) => {
    let newRecipe = new Recipe(req.body);

    newRecipe.save()
    .then()
})