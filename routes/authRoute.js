// auth routes
const express = require("express");
const authRouter = express.Router();

const passport = require("../middleware/auth_passport");
const authController = require("../controller/auth_controller");

authRouter.get("/register", authController.register);
authRouter.get("/login", authController.login);

// Terry
authRouter.get("/facebook", authController.facebookAuthorize);
authRouter.get("/facebook/callback", authController.facebookCallback);

// Terry
// Github
authRouter.get('/github', passport.authenticate('github'));

// Terry
// Github
authRouter.get('/github/callback', 
  passport.authenticate('github', { failureRedirect: '/auth/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/reminder/dashboard');
});


authRouter.post("/register", authController.registerSubmit);
authRouter.post("/login", authController.loginSubmit);

module.exports = authRouter;