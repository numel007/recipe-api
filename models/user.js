const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    username: {type: String, required: true},
    password: {type: String, required: true, select: false},
    recipes: [{type: Schema.Types.ObjectId, ref:'Recipes'}] // 'Recipes' points at connected Recipes model
})

// Populate recipes list when findOne is called
UserSchema.pre('findOne', function(next) {
    this.populate('recipes')
    next()
})

const User = mongoose.model('User', UserSchema)

module.exports = User