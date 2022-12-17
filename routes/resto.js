// (5) Buat router Resto
const express = require('express')
const router = express.Router() 
const Resto = require('../models/Resto')


// Import verifyToken
const verifyToken = require('../config/verifyToken')

// Create 
router.post('/', async(req, res) => {
    // tampung input resto 
    const restoPost = new resto({
        nama: req.body.nama,
        alamat: req.body.alamat
    })

    try {
        // simpan data 
        const resto = await restoPost.save()
        // response
        res.json(resto)
    } catch (error) {
        res.json({message: error})
    }
})

// Read
router.get('/', async(req, res) => {
    try {
        const resto = await Resto.find()
        res.json(resto)
    } catch (error) {
        res.json({message: error})
    }
})


// Update 
router.put('/:restoId', async(req, res) => {
    // tampung input resto 
    const data = {
        makanan: req.body.makanan,
        minuman: req.body.minuman
    }

    try {
        // update data 
        const resto = await Resto.updateOne({_id: req.params.restoId}, data)
        // response
        res.json(resto)
    } catch (error) {
        res.json({message: error})
    }
})

// Delete 
router.delete('/:restoId', async(req, res) => {
    try {
        // delete data 
        const resto = await Resto.deleteOne({_id: req.params.restoId})
        // response
        res.json(resto)
    } catch (error) {
        res.json({message: error})
    }
})



module.exports = router