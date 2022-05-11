const Marque = require("../models/marque.model.js")

exports.create = (req, res) => {

    // Valide request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }

//fonction create Marque

const marque = new Marque({
    nomMarque : req.body.nomMarque
})

 // Save  Marque  database
 Marque.create(marque, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Marque."
      });
    else res.send(data);
  });
};


 // Recup toutes les marques
 exports.findAll = (req, res) => {
    const nomMarque = req.query.nomMarque;
    Marque.getAll(nomMarque, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving  marque."
        });
      else res.send(data);
    });
  };

   //recup une marque par id
   exports.findOne = (req, res) => {
    Marque.findById(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Marque with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error reccup Marque with id " + req.params.id
          });
        }
      } else res.send(data);
    });
  };

  
  //mettre a jour une Marque

  exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
    console.log(req.body);
    Marque.updateById(
      req.params.id,
      new  Marque(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Marque with id ${req.params.id}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating  Marque with id " + req.params.id
            });
          }
        } else res.send(data);
      }
    );
  };

  //supprimer un objet

exports.delete = (req, res) => {
    Marque.remove(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Marque with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete  Marque with id " + req.params.id
          });
        }
      } else res.send({ message: `Marque was deleted successfully!` });
    });
  };
  