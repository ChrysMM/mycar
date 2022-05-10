const { json } = require("express/lib/response");
const { YEAR } = require("mysql/lib/protocol/constants/types");
const sql = require("./db.js");


//Constructeur
const Categorie = function(categorie){
    this.nomCategorie = categorie.nomCategorie
}


//Création categorie
Categorie.create = (newCategorie, result) => {

    sql.query("INSERT INTO categorie SET ?", newCategorie, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
}
console.log("created categorie: ", { id: res.insertId, ...newCategorie });
      result(null, { id: res.insertId, ...newCategorie });
    });
  };
 
// recherche par id
Categorie.findById = (id, result) => {
    sql.query(`SELECT * FROM categorie WHERE id = ${id}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      if (res.length) {
        console.log("found categorie: ", res[0]);
        result(null, res[0]);
        return;
      }
  // not found categorie with the id
   result({ kind: "not_found" }, null);
  });
};

//Update par id
Categorie.updateById = (id, categorie, result) => {
  sql.query(
    "UPDATE  categorie SET ? WHERE id = ?", [categorie, id], (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        // not found Categorie with the id
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("updated categorie: ", { id: id, ...categorie });
      result(null, { id: id, ...categorie });
    }
  );
};

// delete par id
Categorie.remove = (id, result) => {
    sql.query("DELETE FROM  categorie WHERE id = ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        // not found  Categorie with the id
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("deleted  categorie with id: ", id);
      result(null, res);
    });
  };
  
  module.exports = Categorie;