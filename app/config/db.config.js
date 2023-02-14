module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "",
    DB: "mycar",
    dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }

  };
  
//Configurer la base de données MySQL et Sequelize
//Pour Sequelize max: nombre maximum de connexions dans le pool
//min: nombre minimum de connexion dans le pool
//idle: durée maximale, en millisecondes, pendant laquelle une connexion peut être inactive avant d’être libérée
//acquire: durée maximale, en millisecondes, pendant laquelle le pool tentera d’obtenir la connexion avant de lancer l’erreur