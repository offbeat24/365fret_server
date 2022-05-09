require('dotenv').config();
const mysql = require("mysql");

exports.connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    post: process.env.MYSQL_POST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
});
