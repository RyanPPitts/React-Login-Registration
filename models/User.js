// Lets call mongoose for the dependencies below.
// const Schema -- will define the information that is added to the MongoDB database.  This way
// the information supplied for the "user" matches the collection within the Mongo database.
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create the User Schema - the Schema is the types of inputs or fields for the user. 
// for example this can be your common form data - first name, last name, gender, birthdate,etc
// For the registration/login pages we only want the users first name, email, password and date.
// Here is a list of types you can use with Mongoose - https://mongoosejs.com/docs/schematypes.html

const UserSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

// module exports allows you to export the information above and use outside of the file
module.exports = User = mongoose.model("users", UserSchema);