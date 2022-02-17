
const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "kickassjr",
    database: "Employee_Management_db"

});

module.exports = connection;