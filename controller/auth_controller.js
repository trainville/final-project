const passport = require("../middleware/auth_passport");
const userModel = require("../models/user_model");

const authController = {
  login: (req, res) => {
    res.render("auth/login", {error: req.flash('error')});
  },

  logout: (req, res) => {
    req.logout();
    res.redirect("/");
  },

  register: (req, res) => {
    res.render("auth/register", {error: req.flash('error'), email:req.query.email});
  },

  // Terry
  // facebook
  facebookAuthorize: (req,res) => {
    passport.authenticate('facebook');
  },

  // Terry  
  // facebook callback
  facebookCallback: (req,res) => {
    passport.authenticate('facebook', { failureRedirect: '/auth/login' }),
    function(req, res) {
      // Successful authentication, redirect home.
      res.redirect('/reminder');
    }
  },

  loginSubmit: (req, res) => {
    (passport.authenticate("local", {
      failureFlash:true,
      failureRedirect: "/auth/login",
      successRedirect:"/reminder",
    }))(req,res)
  },

  registerSubmit: (req, res) => {
    console.log("submit")
    console.log(req.body);
    err=userModel.addLocaluser(req.body.email, req.body.password);
    if (err) {
      req.flash('error', err);
      res.redirect("/auth/register")
    } else {
      authController.loginSubmit(req,res)
    }
  },
  
};

module.exports = authController;
