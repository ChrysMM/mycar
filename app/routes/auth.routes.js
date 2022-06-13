const { verifySignUp } = require("../middleware");
const controller = require("../controllers/auth.controller");

const cors = require("cors");



module.exports = function(app) {
  // app.use(function(req, res, next) {
  //  res.header("Access-Control-Allow-Origin", "*");
  //  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  //  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  //  //res.header(
  //    // "Access-Control-Allow-Headers",
  //    // "x-access-token, Origin, Content-Type, Accept"
  //  //);
  //   next();
  // });
  app.use(cors({
    origin: "*",
    methods: "*"
  }))
  app.post(
    "/api/auth/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted
    ],
    controller.signup
  );
  app.post("/api/auth/signin", controller.signin);
};