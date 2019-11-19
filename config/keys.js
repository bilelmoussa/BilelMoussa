require('dotenv').config();
let secret = process.env.SECRET || 'SECRET';
let Mongodb_key = process.env.MONGODBKEY || 'mongodb://localhost:27017/mywebsite';

module.exports = {
    database: Mongodb_key,
    secret: secret,   
}