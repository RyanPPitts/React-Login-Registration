// The register.js file will pull in the validator dependency and is-empty dependency
// Just like we called express and mongoose for the User.js file we will call in the following : 
const Validator = require("validator");
const isEmpty = require("is-empty");

// function validateRegisterInput takes in data as a parameter
// initialize errors
module.exports = function validateRegisterInput(data) {
    let errors = {};

// Convert fields to strings so we can use the validator functions
data.name = !isEmpty(data.name) ? data.name : "";
data.email = !isEmpty(data.email) ? data.email : "";
data.password = !isEmpty(data.password) ? data.password : "";
data.password2 = !isEmpty(data.password2) ? data.password2 : "";

// Check the name field
if (Validator.isEmpty(data.name)) {
    errors.name = "Your name is required";
}

//  Check the email field 
if (Validator.isEmpty(data.email)) {
    errors.email = "Your email is required";
} else if (!Validator.isEmail(data.email)) {
    errors.email = "Your email is invalid";
}

// Check user password
if (Validator.isEmpty(data.password)) {
    errors.password = "Your password is required";
}
if (Validator.isEmpty(data.password2)) {
    errors.password = "Password must be at least 6 characters long";
}
if (Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match";
}

// return errors information if any of the information above doesn't align properly with the users inputs
return {
    errors, 
    isValid: isEmpty(errors)
    };
};

