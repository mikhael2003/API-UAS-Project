// (1) Buat Schema User
const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    // Schema data
    makanan: {
        type: String,
        required: true,
        max: 45
    },
    minuman: {
        type: String,
        required: true,
        max: 45
    },
    jumlah: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('User', UserSchema)