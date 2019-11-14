const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const User = mongoose.model("users");
const keys = require("../config/keys");
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;
module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      User.findById(jwt_payload.id)
        .then(user => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );
};

// this finishes up our backend for the login and registration pages ... woot woot. 
// test with postman using post and login routes/end points

// What is passport-jwt: 
//  This module lets you authenticate endpoints using a JSON web token. 
// It is intended to be used to secure RESTful endpoints without sessions.

// secretOrKey -- is a string or buffer containing the secret (symmetric) 
// or PEM-encoded public key (asymmetric) for verifying the token's signature. 

// jwtFromRequest -- (REQUIRED) Function that accepts a request as the only 
// parameter and returns either the JWT as a string or null.

// jwt_payload -- object literal containing the decoded JWT payload.  This will be sent via our login endpoint.