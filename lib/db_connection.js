const mysql = require("mysql");
require("dotenv").config();

let con = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB,
    port: process.env.PORT,
    multipleStatements: true,
});


module.exports = con;