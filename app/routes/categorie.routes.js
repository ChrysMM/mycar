module.exports = app => {

    const categories = require("../controllers/categorie.controller.js");
    var router = require("express").Router();

    // creer une nouvelle categorie
    router.post("/", categories.create);
    // toutes les categories
    router.get("/", categories.findAll);
    // récupérer une categorie par id
    router.get("/:id", categories.findOne);
    // mettre à jour une categorie par id
    router.put("/:id", categories.update);
    // supprimer une categorie
    router.delete("/:id", categories.delete);
    app.use('/api/categorie', router);
}