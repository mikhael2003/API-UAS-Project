// (4) Buat Schema Mahasiswa
const mongoose = require('mongoose')

const RestoSchema = mongoose.Schema({
    // Buat Schema data
    nama: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Resto', RestoSchema)