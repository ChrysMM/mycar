const mongoose = require('mongoose');
//const { schema } = require('./marque');
const Schema = mongoose.Schema;

const marque = new schema (
    {

        nomMarque : {
            type : String
        

    },

    },
    {
        collection : 
        'marque'
    },
);
module.exports = mongoose.model('marque', marque);
