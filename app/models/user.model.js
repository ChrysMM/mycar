 




module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
      username: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
 
      //  nomUser: {
      //    type: Sequelize.STRING
      //  },
       prenomUser: {
         type: Sequelize.STRING
 
      }
    });
    return User;
  };

  
//export default User;