const express = require('express')
const app = express.Router()
const router = express.Router()
const Project = require('../models/project')

router.post('/', async (req, res) => {
    const menuPost = new Menu ({
        makanan: req.body.nama,
        minuman: req.body.minuman
    })

    try {
        const menu = await menuPost.save()
        res.json(menu)
    } catch (err) {
        res.json({message: console.error})
    }
    })
 