const express = require('express')
const router = express.Router()

const Recipe = require('../models/recipe')

// Get all recipes
router.get('/', (req, res) => {
    Recipe.find().then( recipe => {
        return res.json({recipe})
    })
    .catch( err => {
        throw err.message
    })
})