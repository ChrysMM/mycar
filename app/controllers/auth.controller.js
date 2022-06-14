const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Role = db.role;
const Op = db.Sequelize.Op;

//Génère et vérifie les jetons
var jwt = require("jsonwebtoken");

//Hachage et comparaison des mots de passe des utilisateurs
var bcrypt = require("bcryptjs");

/************************************************************/
/*                                                          */
/* recherche de la requête dans la base de données          */ 
/* si elle existe username                                  */
/* comparer avec dans la base de données en utilisant bcrypt*/
/* si c’est correctpasswordpassword                         */
/* générer un jeton à l’aide de jsonwebtoken                */
/* retourner les informations                               */
/* de l’utilisateur et le jeton d’accès                     */        
/*                                                          */
/************************************************************/



exports.signup = (req, res) => {


  // Save User to Database
  User.create({
    //nomUser: req.body.nomUser,
    prenomUser: req.body.prenomUser,
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8)
  })
    .then(user => {
      if (req.body.roles) {
        Role.findAll({
          where: {
            name: {
              [Op.or]: req.body.roles
            }
          }
        }).then(roles => {
          user.setRoles(roles).then(() => {
            res.send({ message: "User enregistré!" });
          });
        });
      } else {
        // user role = 1
        user.setRoles([1]).then(() => {
          res.send({ message: "User enregistré!" });
        });
      }
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};
exports.signin = (req, res) => {
  User.findOne({
    where: {
      username: req.body.username
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "User Non trouvé." });
      }
      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Mot de passe invalide!"
        });
      }
      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });
      var authorities = [];
      user.getRoles().then(roles => {
        for (let i = 0; i < roles.length; i++) {
          authorities.push("ROLE_" + roles[i].name.toUpperCase());
        }
        res.status(200).send({
          id: user.id,
          //nomUser: user.nomUser,
          prenomUser: user.prenomUser,
          username: user.username,
          email: user.email,
          roles: authorities,
          accessToken: token
        });
      });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};
