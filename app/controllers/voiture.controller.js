const Voiture = require("../models/voiture.model.js");

exports.create = (req, res) => {

    // Valide request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }



    // fonction  Create Voiture
    const voiture = new Voiture({
      immatriculation : req.body.immatriculation,
      nbrePlace : req.body.nbrePlace,
      boite : req.body.boite,
      annee : req.body.annee,
      carburant : req.body.carburant,
      marque_id : req.body.marque_id,
      modele_id : req.body.modele_id,
      statut_id : req.body.statut_id,
      categorie_id : req.body.categorie_id,
      ImageVoiture : req.body.ImageVoiture
//id : req.body.id
    
    });

    // Save Voiture  database
    Voiture.create(voiture, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Voiture."
        });
      else res.send(data);
    });
  };

 // Recup toutes les voitures
 exports.findAll = (req, res) => {
    const immatriculation = req.query.immatriculation;
    Voiture.getAll(immatriculation, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving voiture."
        });
      else res.send(data);
    });
  };

  //recup une voiture par id
  exports.findOne = (req, res) => {
    Voiture.findById(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Voiture with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error reccup Voiture with id " + req.params.id
          });
        }
      } else res.send(data);
    });
  };

  //mettre a jour une voiture

  exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
    console.log(req.body);
    Voiture.updateById(
      req.params.id,
      new Voiture(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Voiture with id ${req.params.id}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating Voiture with id " + req.params.id
            });
          }
        } else res.send(data);
      }
    );
  };
   
//supprimer un objet

exports.delete = (req, res) => {
    Voiture.remove(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Voiture with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete Voiture with id " + req.params.id
          });
        }
      } else res.send({ message: `Voiture was deleted successfully!` });
    });
  };