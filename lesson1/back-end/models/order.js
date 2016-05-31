 'use strict';
 
 var mongoose = require('mongoose');  
 var Product = require('product.js');
 
 var Order = mongoose.model('Order', {
        date    : { type: Date, default: Date.now },
        owner   : ObjectId,
        products: [Product]
    });
    
module.exports = Order;