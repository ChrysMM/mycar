module.exports = app => {

    const reservations =  require("../controllers/reservation.controller.js");
    var router = require("express").Router();
    // creer une nouvel reservation
    router.post("/", reservations.create);
    // toutes les reservations
    router.get("/", reservations.findAll);
    // recup une reservation par id
    router.get("/:id", reservations.findOne);
    // update une reservation par id
    router.put("/:id", reservations.update);
    // delete une reservation
    router.delete("/:id", reservations.delete);
    app.use('/api/reservation', router);
};
