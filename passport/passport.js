const passport = require('passport')

module.exports = {

  serial: passport.serializeUser(function(user_id, done) {
    console.log("Serial user_id", user_id)
    console.log("Serial req.user", req.user)
    done(null, user_id);
    }),
  
  deserial: passport.deserializeUser(function(user_id, done) {
    console.log("DEerial user_id", user_id)
    console.log("DErial req.user", req.user)
    done(null, user_id);
  })
}


