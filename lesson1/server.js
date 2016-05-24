'use strict';
   
    const express         = require('express');
    const app             = express();                               // create our app w/ express
    const bodyParser      = require('body-parser');    // pull information from HTML POST (express4)
    const methodOverride  = require('method-override'); // simulate DELETE and PUT (express4)
    const mongoose        = require('mongoose');                     // mongoose for mongodb
    const morgan          = require('morgan');             // log requests to the console (express4)
  
    // configuration =================
    mongoose.connect('mongodb://localhost:27017/angularTest');    // connect to mongoDB database on modulus.io

    app.use(express.static(__dirname + '/dist'));                 // set the static files location /public/img will be /img for users
    app.use(express.static(__dirname + "/node_modules"));
    app.use(morgan('dev'));                                         // log every request to the console
    app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
    app.use(bodyParser.json());                                     // parse application/json
    app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
    app.use(methodOverride());

    // routes ======================================================================
    const route = require('./back-end/routes/bookmarks.js');
    app.use('/', route);
    
    // listen (start app with node server.js) ======================================
    app.listen(8080);
    console.log("App listening on port 8080");