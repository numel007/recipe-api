const express = require('express')
const recipeRoutes = require('./recipe.js')
// const userRoutes = require('./user.js)

const router = express.Router()

// Set default recipe routes to /recipe
router.use('./recipe', recipeRoutes)
router.use('./user', userRoutes)

module.exports = router