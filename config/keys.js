require('dotenv').config();
let secret = process.env.SECRET || "SECRET";
let Mongodb_key = "mongodb+srv://bilel123:Azertyub1_@3dwave-xwprz.mongodb.net/test?retryWrites=true";

module.exports = {
    database: Mongodb_key,
    secret: secret,   
}