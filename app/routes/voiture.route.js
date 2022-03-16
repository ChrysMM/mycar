const express = require('express');
const router = express.Router();// on lie une url à l'actions avec les routes

let Voiture = require('../models/voiture');
router.route('/').get((req, res) => {// sur / en methode get (url)
    Category.find((err, voiture) => {
        if (err) {
            res.status(500).json({ message: `Error retrieving voitures : ${err}` });
        }
        else {

            res.json(voiture);
        }
    }).populate({path: ' ', select: ' '});
});


