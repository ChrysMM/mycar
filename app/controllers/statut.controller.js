const Statut = require("../models/statut.model.js")

exports.create = (req, res) => {

    // Valide request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }

//fonction create Statut

const statut = new Statut({
    nomStatut : req.body.nomStatut
})

 // Save  Statut  database
 Statut.create(statut, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Statut."
      });
    else res.send(data);
  });
};


 // Recup tous les statuts
 exports.findAll = (req, res) => {
    const nomStatut = req.query.nomStatut;
    Statut.getAll(nomStatut, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving  statut."
        });
      else res.send(data);
    });
  };

   //recup un statut par id
   exports.findOne = (req, res) => {
    Statut.findById(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Statut with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error reccup Statut with id " + req.params.id
          });
        }
      } else res.send(data);
    });
  };

  
  //mettre a jour une Statut

  exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
    console.log(req.body);
    Statut.updateById(
      req.params.id,
      new  Statut(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Statut with id ${req.params.id}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating  Statut with id " + req.params.id
            });
          }
        } else res.send(data);
      }
    );
  };

  //supprimer un objet

exports.delete = (req, res) => {
    Statut.remove(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Statut with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete  Statut with id " + req.params.id
          });
        }
      } else res.send({ message: `Statut was deleted successfully!` });
    });
  };
  