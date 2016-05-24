 'use strict';
 
 var mongoose = require('mongoose');  
 var Bookmark = mongoose.model('Bookmark', {
        url     : String,
        title   : String,
        tags    : String
    });
    
module.exports = Bookmark;