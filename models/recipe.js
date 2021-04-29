const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RecipeSchema = new Schema({
    title: {type: String, required: true},
    ingredients: {type: String, required: true},
    method: {type: String, required: true},
    author: {type: Schema.Types.ObjectId, ref: 'User', required: true} // 'User' points at connected User model
})

const Recipe = mongoose.model('Recipe', RecipeSchema)

module.exports = Recipe