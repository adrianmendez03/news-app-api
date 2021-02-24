const express = require('express')
const router = express.Router()
const Source = require('../model/source')

router.get('/', async (req, res) => {
    const data = await Source.find({})
    res.json({ sources: data })
})

router.post('/', async (req, res) => {
    res.json(await Source.create(req.body))
})

module.exports = router