const express = require('express')
const router = express.Router()
const Article = require('../model/article')

router.get('/', async (req, res) => {
    res.json(await Article.find({}))
})

router.post('/', async (req, res) => {
    res.json(await Article.create(req.body))
})

module.exports = router