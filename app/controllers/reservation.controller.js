const Reservation = require("../models/reservation.model.js");

exports.create = (req, res) => {

    // Valide request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }



    // fonction  Create Reservation
      const reservation = new Reservation({
      dateDepart : req.body.dateDepart,
      dateArrivee : req.body.dateArrivee,
      imgVArrivee1_id : req.body.imgVArrivee1_id,
      imgVArrivee2_id : req.body.imgVArrivee2_id,
      imgVArrivee3_id : req.body.imgVArrivee3_id,
      imgVArrivee4_id : req.body.imgVArrivee4_id,
      imgVDepart1_id : req.body.imgVDepart1_id,
      imgVDepart2_id : req.body.imgVDepart2_id,
      imgVDepart3_id : req.body.imgVDepart3_id,
      imgVDepart4_id : req.body.imgVDepart4_id,
      voiture_id : req.body.voiture_id,
      user_id : req.body.user_id,
       
    });

    // Save Reservation  database
    Reservation.create(reservation, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Reservation."
        });
      else res.send(data);
    });
  };

 // Recup toutes les reservations
 exports.findAll = (req, res) => {
    const voiture_id = req.query.voiture_id;
    Reservation.getAll(voiture_id, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving reservation."
        });
      else res.send(data);
    });
  };

  //recup une reservation par id
  exports.findOne = (req, res) => {
    Reservation.findById(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Reservation with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error reccup Reservation with id " + req.params.id
          });
        }
      } else res.send(data);
    });
  };

  //mettre a jour une reservation

  exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
    console.log(req.body);
    Reservation.updateById(
      req.params.id,
      new Reservation(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Reservation with id ${req.params.id}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating Reservation with id " + req.params.id
            });
          }
        } else res.send(data);
      }
    );
  };
   
//supprimer un objet

exports.delete = (req, res) => {
    Reservation.remove(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Reservation with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete Reservation with id " + req.params.id
          });
        }
      } else res.send({ message: `Reservation was deleted successfully!` });
    });
  };