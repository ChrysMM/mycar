const sql = require("./db.js");


const Voiture = function(Voiture){
    this.id = this.id.Voiture;
    this.immatriculation = this.immatriculation.Voiture;
    this.nbrePlace = this.nbrePlace.Voiture;
    this.boite = this.boite.Voiture;
    this.annee = this.annee.Voiture;
    this.carbutant = this.carbutant.Voiture;
    this.marque_id = this.marque_id.Voiture;
    this.modele_id = this.modele_id.Voiture;
    this.statut_id  = this.statut_id.Voiture;
    this.categorie_id = this.categorie_id.Voiture
}




//creation voiture
Voiture.create = (newVoiture, result) => {
    sql.query("INSERT INTO voiture SET ?", newVoiture, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      console.log("created voiture: ", { id: res.insertId, ...newTutorial });
      result(null, { id: res.insertId, ...newTutorial });
    });
  };




  //Get toutes les voitures
  Voiture.getAll = (immatriculation, result) => {
    let query = "SELECT * FROM voitures";
    if (immatriculation) {
      query += ` WHERE immatriculation LIKE '%${immatriculation}%'`;
    }
    sql.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("voiture: ", res);
      result(null, res);
    });
  };



  // recherche par id
  Voiture.findById = (id, result) => {
    sql.query(`SELECT * FROM voiture WHERE id = ${id}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      if (res.length) {
        console.log("found voiture: ", res[0]);
        result(null, res[0]);
        return;
      }
      // not found Voiture with the id
      result({ kind: "not_found" }, null);
    });
  };



//Update par id
Voiture.updateById = (id, voiture, result) => {
  sql.query(
    "UPDATE voitures SET immatriculation = ?, nbrPlace = ?, boite = ?, annee = ?, carburant = ?, marque_id = ?, modele_id = ?, statut_id = ?, categorie_id  = ? WHERE id = ?",
    [voiture.immatriculation, voiture.nbrePlace, voiture.boite, voiture.annee, voiture.carbutant, voiture.marque_id, voiture.modele_id, voiture.statut_id, voiture.categorie_id, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        // not found Voiture with the id
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("updated voiture: ", { id: id, ...voiture });
      result(null, { id: id, ...voiture });
    }
  );
};


// delete par id
Voiture.remove = (id, result) => {
  sql.query("DELETE FROM voitures WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    if (res.affectedRows == 0) {
      // not found Voiture with the id
      result({ kind: "not_found" }, null);
      return;
    }
    console.log("deleted voiture with id: ", id);
    result(null, res);
  });
};

module.exports = Voiture;