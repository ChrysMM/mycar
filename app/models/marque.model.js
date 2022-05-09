const { json } = require("express/lib/response");
const { YEAR } = require("mysql/lib/protocol/constants/types");
const sql = require("./db.js");


//Constructeur
const Marque = function(marque){
    this.marque = marque.nomMarque
}


//Création marque
Marque.create = (newMarque, result) => {

    sql.query("INSERT INTO marque SET ?", newMarque, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
}
console.log("created marque: ", { id: res.insertId, ...newMarque });
      result(null, { id: res.insertId, ...newMarque });
    });
  };
 
// recherche par id
Marque.findById = (id, result) => {
    sql.query(`SELECT * FROM marque WHERE id = ${id}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      if (res.length) {
        console.log("found marque: ", res[0]);
        result(null, res[0]);
        return;
      }
  // not found marque with the id
   result({ kind: "not_found" }, null);
  });
};

//Update par id
Marque.updateById = (id, marque, result) => {
  sql.query(
    "UPDATE  marque SET ? WHERE id = ?", [marque, id], (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        // not found Marque with the id
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("updated marque: ", { id: id, ...marque });
      result(null, { id: id, ...marque });
    }
  );
};

// delete par id
Marque.remove = (id, result) => {
    sql.query("DELETE FROM  marque WHERE id = ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        // not found  Marque with the id
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("deleted  marque with id: ", id);
      result(null, res);
    });
  };
  
  module.exports = Marque;