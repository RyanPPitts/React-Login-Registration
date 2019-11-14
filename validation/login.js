// just like the register file we are going to call in the validator and isEmpty dependencies
// Without lines 3 and 4 we would be unable to use the dependency functions
const Validator = require("validator");
const isEmpty = require("is-empty");

// module exports allows us to use the ValidateLoginInput outside of the login.js file
module.exports = function validateLoginInput(data) {
  let errors = {};

// Convert empty fields to an empty string so we can use validator functions
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

// Checks email information provided

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

// Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

//   return errors if something is out of alignment.  Just like the register.js file.
return {
    errors,
    isValid: isEmpty(errors)
  };
};