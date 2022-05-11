module.exports = app => {

    const categories = require("../controllers/categorie.controller.js");
    var router = require("express").Router();

    // creer un nouveau categorie
    router.post("/", categories.create);
    // toutes les categories
    router.get("/", categories.findAll);
    // recup un categorie par id
    router.get("/:id", categories.findOne);
    // update un categorie par id
    router.put("/:id", categories.update);
    // delete un categorie
    router.delete("/:id", categories.delete);
    app.use('/api/categorie', router);
}