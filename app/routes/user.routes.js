const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");

/************************************************************/
/*                                                          */
/*GET /api/test/all                                         */
/*GET pour les utilisateurs connectés                       */
/*(utilisateur/modérateur/administrateur)/api/test/user     */
/*GET pour le modérateur/api/test/mod                       */
/*GET pour admin/api/test/admin                             */        
/*                                                          */
/************************************************************/




module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Accept"
    );
    res.header('Access-Control-Allow-Origin', '*'); 
    next();
  });
  app.get("/api/test/all", controller.allAccess);
  app.get(
    "/api/test/user",
    [authJwt.verifyToken],
    controller.userBoard
  );
  app.get(
    "/api/test/mod",
    [authJwt.verifyToken, authJwt.isModerator],
    controller.moderatorBoard
  );
  app.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );
};

