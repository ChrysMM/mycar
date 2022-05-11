module.exports = app => {

    const statuts = require("../controllers/statut.controller.js");
    var router = require("express").Router();

    // creer un nouveau statut
    router.post("/", statuts.create);
    // toutes les statuts
    router.get("/", statuts.findAll);
    // recup un statut par id
    router.get("/:id", statuts.findOne);
    // update un statut par id
    router.put("/:id", statuts.update);
    // delete un statut
    router.delete("/:id", statuts.delete);
    app.use('/api/statut', router);
}