const mongoose = require('mongoose');
const { DATETIME } = require('mysql/lib/protocol/constants/types');
const Schema = mongoose.Schema;

const voiture = new Schema(
    {
        immatriculation : {
            type: String
        },
        nombrePlace : {
            type: Number
        },
        boite : {
            type: String
        },
         annee :{
            type: DATETIME
        },
        carburant :{
            type: String
        },
        marque_id :{
            type: Number
        },
        modele_id :{
            type: Number
        },
        statut_id :{
            type: Number
        },
        categorie_id :{
            type: Number
        }


    },
    {
        collection: 'voiture'
    }


);
module.exports = mongoose.model('voiture', voiture);