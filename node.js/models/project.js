const mongoose = require('mongoose')

const MenuSChema = mongoose.Schema({
    makanan: {
        type: String,
        require: true
    },
    minuman: {
        type: String,
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.models('Menu', MenuSChema)