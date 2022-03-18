//const express = require('express');

const { getAll } = require("../models/voiture.model");

 
module.exports = app => {

    const voitures =  require("../controllers/voiture.controller.js");
    var router = require("express").Router();
    // creer une nouvel voiture
    router.post("/", voitures.create);
    // toutes les voitures
    router.get("/", voitures.findAll);
    // recup une voiture par id
    router.get("/:id", voitures.findOne);
    // update une voiture par id
    router.put("/:id", voitures.update);
    // delete une voiture
    router.delete("/:id", voitures.delete);
    app.use('/api/voiture', router);
};
