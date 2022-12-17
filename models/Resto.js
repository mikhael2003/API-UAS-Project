// (4) Buat Schema Mahasiswa
const mongoose = require('mongoose')

const RestoSchema = mongoose.Schema({
    // Buat Schema data
    makanan: {
        type: String,
        required: true
    },
    minuman: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Mahasiswa', RestoSchema)