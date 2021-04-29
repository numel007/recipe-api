require('dotenv/config')
const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use((req, res, next) => {
    const now = new Date().toString()
    console.log(`Requested ${req.url} at ${now}`)
    next()
})

// Set up database
require('./config/db-setup.js')

// Routes
const router = require('./routes/index.js')
app.use(router)

app.listen(process.env.PORT, () => {
    console.log(`Recipe api listening on port ${process.env.PORT}`)
})

module.exports = app