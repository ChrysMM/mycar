const sql = require("./db.js");
const Voiture = function(Voiture){

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

  