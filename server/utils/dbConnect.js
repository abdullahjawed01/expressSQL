import mysql from "mysql2/promise"

const pool = mysql.createPool({
    host:"localhost",
    user:"abdullah",
    password:"abdullah",
    database:"users"
})

export default pool