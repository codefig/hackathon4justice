const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Routes = require('./routes');
const cors = require('cors');

// create our Express app
const app = express();


// Takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));



//routes
app.use('/api', Routes);


// done! we export it so we can start the site in start.js
module.exports = app;
