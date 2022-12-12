const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");
//Connexion  à la base de donné
const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});
//  MySQL est bien connecté
connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});
module.exports = connection;
