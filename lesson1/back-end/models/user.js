 'use strict';
 
 var mongoose = require('mongoose');  
 var User = mongoose.model('User', {
        fname   : String,
        lname   : String,
        city    : String
    });
    
module.exports = User;