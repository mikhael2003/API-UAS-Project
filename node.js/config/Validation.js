// (3) validator input data registrasi dan login
const Joi = require('@hapi/joi')

const registerValidation = (data) => {
    const schema = Joi.object({
        makanan: Joi.string().required(),
        minuman: Joi.string().email().required(),
        jumlah: Joi.string().min(6).required()
    })

    return schema.validate(data)
}

const loginValidation = (data) => {
    const schema = Joi.object({
        makanan: Joi.string().email().required(),
        minuman: Joi.string().min(6).required()
    })

    return schema.validate(data)
}

module.exports.registerValidation = registerValidation
module.exports.loginValidation = loginValidation