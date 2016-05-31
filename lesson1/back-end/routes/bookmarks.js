'use strict';

var Bookmark = require('../models/bookmark.js');
var express = require("express");
var router = express.Router();

router.get('/api/bookmarks', function(req, res) {
    Bookmark.find(function(err, bookmarks) {
        if (err)
            res.send(err)
        res.json(bookmarks);
    });
});

router.post('/api/bookmarks', function(req, res) {
    console.log(req.body);
    Bookmark.create(req.body, function(err, bookmark) {
        if (err)
            res.send(err);
        res.json(bookmark);
    });

});

router.delete('/api/bookmarks/:bookmark_id', function(req, res) {
    Bookmark.remove({
        _id : req.params.bookmark_id
    }, function(err, bookmark) {
        if (err)
            res.send(err);
        res.json(bookmark);
    });
});

module.exports = router;