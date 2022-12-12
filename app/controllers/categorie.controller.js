const Categorie = require("../models/categorie.model.js")

exports.create = (req, res) => {

    // Valide request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }

//fonction de creation de Categorie

const categorie = new Categorie({
    nomCategorie : req.body.nomCategorie
})

 // Sauvegarder Categorie en base de donnée
 Categorie.create(categorie, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Categorie."
      });
    else res.send(data);
  });
};


 // Recuperer toutes les categories
 exports.findAll = (req, res) => {
    const nomCategorie = req.query.nomCategorie;
    Categorie.getAll(nomCategorie, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving  categorie."
        });
      else res.send(data);
    });
  };

   //Recuperer une categorie par id
   exports.findOne = (req, res) => {
    Categorie.findById(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Categorie with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error reccup Categorie with id " + req.params.id
          });
        }
      } else res.send(data);
    });
  };

  
  //mettre a jour une Categorie

  exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
    console.log(req.body);
    Categorie.updateById(
      req.params.id,
      new  Categorie(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Categorie with id ${req.params.id}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating  Categorie with id " + req.params.id
            });
          }
        } else res.send(data);
      }
    );
  };

  //supprimer une categorie

exports.delete = (req, res) => {
    Categorie.remove(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Categorie with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete  Categorie with id " + req.params.id
          });
        }
      } else res.send({ message: `Categorie was deleted successfully!` });
    });
  };