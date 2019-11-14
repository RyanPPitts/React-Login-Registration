const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// setting up the dependencies for the project.  In this case its the 
// MERN stack backend essentials which are express and mongoose.  

const app = express();

// Body Parser dependency middleware -- middleware runs between the application and backend system
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);

app.use(bodyParser.json());

// Datbase Configuration
const db = require("./config/keys").mongoURI;

// Connect to the MongoDB we setup
mongoose.connect (
    db, { useNewUrlParser: true}
)
.then(() => console.log("MongoDB connected woot woot"))
.catch(err => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on the port : ${port}`));