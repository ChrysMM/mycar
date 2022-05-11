const Modele = require("../models/modele.model.js")

exports.create = (req, res) => {

    // Valide request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }

//fonction create Modele

const modele = new Modele({
    nomModele : req.body.nomModele
})

 // Save  Modele  database
 Modele.create(modele, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Modele."
      });
    else res.send(data);
  });
};


 // Recup toutes les modeles
 exports.findAll = (req, res) => {
    const nomModele = req.query.nomModele;
    Modele.getAll(nomModele, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving  modele."
        });
      else res.send(data);
    });
  };

   //recup une modele par id
   exports.findOne = (req, res) => {
    Modele.findById(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Modele with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error reccup Modele with id " + req.params.id
          });
        }
      } else res.send(data);
    });
  };

  
  //mettre a jour une Modele

  exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
    console.log(req.body);
    Modele.updateById(
      req.params.id,
      new  Modele(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Modele with id ${req.params.id}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating  Modele with id " + req.params.id
            });
          }
        } else res.send(data);
      }
    );
  };

  //supprimer un objet

exports.delete = (req, res) => {
    Modele.remove(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Modele with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete  Modele with id " + req.params.id
          });
        }
      } else res.send({ message: `Modele was deleted successfully!` });
    });
  };
  