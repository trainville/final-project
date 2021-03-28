const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const userController = require("../controller/userController");

const userModel = require("../models/user_model");

// Terry
const FacebookStrategy = require("passport-facebook").Strategy;
const GitHubStrategy = require("passport-github").Strategy;

const localLogin = new LocalStrategy(
  {
    usernameField: "email",
    passwordField: "password",
  },
  (email, password, done) => {
    const user = userModel.validateLocalUser(email, password);
    return user
      ? done(null, user)
      : done(null, false, {
          message: "You login details are not valid. Please try again",
        });
  }
);

// Terry
// facbook
const facebookLogin = new FacebookStrategy(
  {
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: process.env.FACEBOOK_REDIRECT_URI,
  },
  function (accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ facebookId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
);

// Terry
// Github
const githubLogin = new GitHubStrategy(
  {
    clientID: process.env.GIT_APP_ID,
    clientSecret: process.env.GIT_APP_SECRET,
    callbackURL: process.env.GIT_APP_REDIRECT,
  },
  function (accessToken, refreshToken, profile, cb) {
    const user = userController.getUserByProfile(profile);
    cb(null, user);
  }
);

passport.serializeUser(function (user, done) {
  const id = user.id ? user.id : user[Object.keys(user)[0]].id;
  done(null, id);
});

passport.deserializeUser(function (id, done) {
  let user = userModel.getUserById(id);
  if (user) {
    done(null, user);
  } else {
    done({ message: "User not found" }, null);
  }
});

(module.exports = passport.use(localLogin)),
  passport.use(githubLogin),
  passport.use(facebookLogin);
