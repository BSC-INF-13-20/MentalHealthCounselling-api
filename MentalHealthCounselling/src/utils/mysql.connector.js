const mysql = require('mysql')
const dotenv = require('dotenv')

dotenv.config()

console.log(process.env.DATABASE_PASSWORD)

const config = {
    host: "localhost",
    //database: process.env.DATABASE_NAME,
    user: 'root'
    //password: process.env.DATABASE_PASSWORD,
   // connectionLimit:100,
}

const dbconnection = mysql.createConnection(config)

module.exports = dbconnection
