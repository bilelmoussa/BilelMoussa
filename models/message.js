const mongoose = require('mongoose');
const Joigoose = require('joigoose')(mongoose);
const Joi = require('joi');

const schema = mongoose.Schema;

let options = Joi.object({
    name: Joi.string().trim().min(1).max(30).required(),
    phone_number: Joi.object({
        country: Joi.string().trim().min(2).max(2).required(),
        countryCallingCode: Joi.string().trim().required(),
        nationalNumber: Joi.string().trim().required(),
        number: Joi.string().required(),
    }),
    email: Joi.string().trim().email().required(),
    message: Joi.string().trim().min(30).required(),
    created_at: Joi.date().default(Date.now()).required(),
    update_at: Joi.date().default(Date.now()).required()
});

//create Schema
const messageSchema = new schema(Joigoose.convert(options));
module.exports = Message = mongoose.model('Message', messageSchema);

