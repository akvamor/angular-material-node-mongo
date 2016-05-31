 'use strict';
 
 var mongoose = require('mongoose');  
 var Order = mongoose.model('Order', {
        fname   : String,
        lname   : String,
        city    : String
    });
    
module.exports = Order;