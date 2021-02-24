// import dependencies
require('dotenv').config()
const express = require('express')
const mongoose = require('./db/connection')
const cors = require('cors')
const logger = require('morgan')

// create App
const app = express()
const PORT = process.env.PORT || PORT

// middleware 
app.use(cors())
app.use(logger('dev'))
app.use(express.json())

// default route
app.get('/', (req, res) => {
    res.json({
        message: 'You have hit the default route.. nothing to see here...'
    })
})

// controllers
const articleController = require('./controllers/article')
app.use('/articles', articleController)

const sourceController = require('./controllers/source')
app.use('/sources', sourceController)

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})