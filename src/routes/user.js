const express = require('express')
const router = express.Router()

const User = require('../models/user')

// Get all users
router.get('/', (req, res) => {
    console.log('Returning all users.')
    User.find().then( allUsers => {
        return res.json({allUsers})
    })
    .catch( err => {
        throw err.message
    })
})

// POST new user
router.post('/', (req, res) => {
    console.log('Creating new user.')
    let newUser = new User(req.body)

    newUser.save()
    .then( () => {
        User.findOne({username: newUser.username})
        .then( user => {
            return res.json({
                'username': user.username,
                'message': 'User was created.'
            })
        })
        .catch( err => {
            throw err.message
        })
    })
    .catch( err => {
        throw err.message
    })
})

// Get specific user details
router.get('/:id', (req, res) => {
    User.findOne({_id: req.params.id})
    .then( foundUser => {
        return res.json({foundUser})
    })
    .catch( err => {
        throw err.message
    })
})

// Update existing user
router.put('/:id', (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body)
    .then( foundUser => {
        return User.findOne({username: req.body.username})
    })
    .then( (updatedUser) => {
        return res.json({updatedUser})
    })
    .catch( err => {
        throw err.message
    })
})

module.exports = router;