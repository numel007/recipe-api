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

// POST new user
router.post('/', (req, res) => {
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

// Delete existing user
router.delete('/:id', (req, res) => {
    User.findByIdAndDelete(req.params.id)
    .then( result => {
        if (result === null) {
            return res.json({'message': 'ID matched no user.'})
        } else {
            return res.json({
                'message': 'User deleted.'
            })
        }
    })
    .catch( err => {
        throw err.message
    })
})

module.exports = router;