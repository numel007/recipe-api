const express = require('express')
const recipeRoutes = require('./recipe.js')
const userRoutes = require('./user.js')

const router = express.Router()

router.use('./recipe', recipeRoutes)
router.use('./user', userRoutes)

module.exports = router