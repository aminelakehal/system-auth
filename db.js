import mysql from "mysql2/promise";

const db = await mysql.createConnection({
  host: "localhost",
  user: "root",       
  password: "",       
  database: "auth_system"
});

console.log("Connected to MySQL");

export default db;
