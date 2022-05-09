module.exports = app => {

    const marques = require("../controllers/marque.controller.js");
    var router = require("express").Router();

    // creer une nouvelle marque
    router.post("/", marques.create);
    // toutes les marques
    router.get("/", marques.findAll);
    // recup une marque par id
    router.get("/:id", marques.findOne);
    // update une marque par id
    router.put("/:id", marques.update);
    // delete une marque
    router.delete("/:id", marques.delete);
    app.use('/api/marque', router);
}