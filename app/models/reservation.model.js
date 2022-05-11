const { json } = require("express/lib/response");
const { YEAR } = require("mysql/lib/protocol/constants/types");
const sql = require("./db.js");

//Constructeur
const Reservation = function(reservation){
     
    this.dateDepart      = reservation.dateDepart;
    this.dateArrivee     = reservation.dateArrivee;
    this.imgVArrivee1_id = reservation.imgVArrivee1_id;
    this.imgVArrivee2_id = reservation.imgVArrivee2_id;
    this.imgVArrivee3_id = reservation.imgVArrivee3_id;
    this.imgVArrivee4_id = reservation.imgVArrivee4_id;
    this.imgVDepart1_id  = reservation.imgVDepart1_id;
    this.imgVDepart2_id  = reservation.imgVDepart2_id;
    this.imgVDepart3_id  = reservation.imgVDepart3_id;
    this.imgVDepart4_id  = reservation.imgVDepart4_id;
    this.user_id         = reservation.user_id;
    this.voiture_id      = reservation.voiture_id
}




//creation reservation
Reservation.create = (newReservation, result) => {

    sql.query("INSERT INTO reservation SET ?", newReservation, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      console.log("created reservation: ", { id: res.insertId, ...newReservation });
      result(null, { id: res.insertId, ...newReservation });
    });
  };




  //Get toutes les reservations d'une reservation
  Reservation.getAll = (reservation_id, result) => {
    let query = "SELECT * FROM reservation";
    if (reservation_id) {
      query += ` WHERE reservation_id LIKE '%${reservation_id}%'`;
    }
    sql.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("reservation: ", res);
      result(null, res);
    });
  };

  // recherche par id
  Reservation.findById = (id, result) => {
    sql.query(`SELECT * FROM reservation WHERE id = ${id}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      if (res.length) {
        console.log("found reservation: ", res[0]);
        result(null, res[0]);
        return;
      }
      // not found Reservation with the id
      result({ kind: "not_found" }, null);
    });
  };

  
//Update par id
Reservation.updateById = (id, reservation, result) => {
    sql.query(
      "UPDATE reservation SET ? WHERE id = ?", [reservation, id], (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
        if (res.affectedRows == 0) {
          // not found Reservation with the id
          result({ kind: "not_found" }, null);
          return;
        }
        console.log("updated reservation: ", { id: id, ...reservation });
        result(null, { id: id, ...reservation });
      }
    );
  };
  
  
  // delete par id
  Reservation.remove = (id, result) => {
    sql.query("DELETE FROM reservation WHERE id = ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        // not found Reservation with the id
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("deleted reservation with id: ", id);
      result(null, res);
    });
  };
  
  module.exports = Reservation;

