const { json } = require("express/lib/response");
const { YEAR } = require("mysql/lib/protocol/constants/types");
const sql = require("./db.js");


//Constructeur
const Modele = function(modele){
    this.modele = modele.nomModele
}


//Création modele
Modele.create = (newModele, result) => {

    sql.query("INSERT INTO modele SET ?", newModele, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
}
console.log("created modele: ", { id: res.insertId, ...newModele });
      result(null, { id: res.insertId, ...newModele });
    });
  };
 
// recherche par id
Modele.findById = (id, result) => {
    sql.query(`SELECT * FROM modele WHERE id = ${id}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      if (res.length) {
        console.log("found modele: ", res[0]);
        result(null, res[0]);
        return;
      }
  // not found modele with the id
   result({ kind: "not_found" }, null);
  });
};

//Update par id
Modele.updateById = (id, modele, result) => {
  sql.query(
    "UPDATE  modele SET ? WHERE id = ?", [modele, id], (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        // not found Modele with the id
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("updated modele: ", { id: id, ...modele });
      result(null, { id: id, ...modele });
    }
  );
};

// delete par id
Modele.remove = (id, result) => {
    sql.query("DELETE FROM  modele WHERE id = ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        // not found  Modele with the id
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("deleted  modele with id: ", id);
      result(null, res);
    });
  };
  
  module.exports = Modele;