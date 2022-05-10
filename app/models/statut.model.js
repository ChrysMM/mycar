const { json } = require("express/lib/response");
const { YEAR } = require("mysql/lib/protocol/constants/types");
const sql = require("./db.js");


//Constructeur
const Statut = function(statut){
    this.nomStatut = statut.nomStatut
}


//Création statut
Statut.create = (newStatut, result) => {

    sql.query("INSERT INTO statut SET ?", newStatut, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
}
console.log("created statut: ", { id: res.insertId, ...newStatut });
      result(null, { id: res.insertId, ...newStatut });
    });
  };
 
// recherche par id
Statut.findById = (id, result) => {
    sql.query(`SELECT * FROM statut WHERE id = ${id}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      if (res.length) {
        console.log("found statut: ", res[0]);
        result(null, res[0]);
        return;
      }
  // not found statut with the id
   result({ kind: "not_found" }, null);
  });
};

//Update par id
Statut.updateById = (id, statut, result) => {
  sql.query(
    "UPDATE  statut SET ? WHERE id = ?", [statut, id], (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        // not found Statut with the id
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("updated statut: ", { id: id, ...statut });
      result(null, { id: id, ...statut });
    }
  );
};

// delete par id
Statut.remove = (id, result) => {
    sql.query("DELETE FROM  statut WHERE id = ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        // not found  Statut with the id
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("deleted  statut with id: ", id);
      result(null, res);
    });
  };
  
  module.exports = Statut;