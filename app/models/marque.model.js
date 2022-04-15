const { json } = require("express/lib/response");
const { YEAR } = require("mysql/lib/protocol/constants/types");
const sql = require("./db.js");


//Constructeur
const Marque = function(marque){
    this.marque = marque.NomMarque;
    this.id = marque.id
}