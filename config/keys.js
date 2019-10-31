require('dotenv').config();
let secret = process.env.SECRET || "SECRET";
let Mongodb_key = process.env.MONGODBKEY;

module.exports = {
    database: Mongodb_key,
    secret: secret,   
}