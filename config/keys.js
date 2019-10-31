require('dotenv').config();
let secret = process.env.SECRET || "SECRET";
let Mongodb_key = "mongodb+srv://bilel123:Azertyub1_@cluster0-yr3qy.mongodb.net/test?retryWrites=true&w=majority";

module.exports = {
    database: Mongodb_key,
    secret: secret,   
}