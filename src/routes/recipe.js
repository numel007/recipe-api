const express = require('express')
const router = express.Router()

const User = require('../models/user')
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
    let recipe = new Recipe(req.body);

    recipe.save()
    .then( recipe => {
        return User.findById(recipe.author)
    })
    .then( author => {
        author.recipes.unshift(recipe)
        return author.save()
    })
    .then( (author) => {
        return res.json({
            'message': `${recipe.title} added.`,
            'author': author.username
        })
    })
    .catch( err => {
        throw err.message
    })
})

module.exports = router;