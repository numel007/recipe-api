const express = require('express')
const router = express.Router()

const User = require('../models/user')

// Get all users
router.get('/', (req, res) => {
    User.find().then( allUsers => {
        return res.json({allUsers})
    })
    .catch( err => {
        throw err.message
    })
})