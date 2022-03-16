const express = require("express");
const cors = require("cors");
const app = express();


const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost:27017/ecommerce', { useNewUrlParser: true, useUnifiedTopology: true,
useFindAndModify: false }).then(
    () => console.log('db connected'),
    err => console.error(`db error ${err}`)
);
const port = 4000; // port d'écoute pour le serveur
const mongoose = require('mongoose');
const { Router } = require('express');

//var corsOptions = {
 // origin: "http://localhost:8081"
//};

app.use(bodyParser.json());
app.use(cors());
app.use(cors(corsOptions));
const server = app.listen(port, () => { console.log('serveur lancé sur le port ' + port) });



// parse requests of content-type - application/json
//app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
//app.use(express.urlencoded({ extended: true }));
// simple route
//app.get("/", (req, res) => {
//  res.json({ message: "Welcome to My Car App" });
//});
//require("./app/routes/tutorial.routes.js")(app);
// set port, listen for requests
//const PORT = process.env.PORT || 8080;
//app.listen(PORT, () => {
  //console.log(`Server is running on port ${PORT}.`);
//});
