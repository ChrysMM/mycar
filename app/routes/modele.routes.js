module.exports = app => {

    const modeles = require("../controllers/modele.controller.js");
    var router = require("express").Router();

    // creer un nouveau modele
    router.post("/", modeles.create);
    // toutes les modeles
    router.get("/", modeles.findAll);
    // recup un modele par id
    router.get("/:id", modeles.findOne);
    // update un modele par id
    router.put("/:id", modeles.update);
    // delete un modele
    router.delete("/:id", modeles.delete);
    app.use('/api/modele', router);
}