'use strict';

var Bookmark = require('../models/bookmark.js');
var express = require("express");
var router = express.Router();

router.get('/api/bookmarks', function(req, res) {
    const page = req.query.page ? parseInt(req.query.page) : 1;
    const limit = req.query.limit ? parseInt(req.query.limit) : 10;
    const order = req.query.order ? req.query.order : 'title';
    const orderDir = req.query.orderDir ? req.query.orderDir : 'asc';
    const orderObj = {};
    orderObj[order] = orderDir;
            
    Bookmark.find()
        // .select('*')
        .limit(limit)
        .skip(limit * (page - 1))
        .sort(orderObj)
        .exec(function(err, records) {
            Bookmark.count().exec(function(err, count) {
                res.json({
                    records : records,
                    page    : page,
                    limit   : limit,
                    pages   : Math.ceil(count / limit),
                    count   : count
                })
            })
        })
    
    // Bookmark.find(function(err, bookmarks) {
        
    //     console.log(req.query);
    //     if (err)
    //         res.send(err)
    //     const data = {
    //         count : bookmarks.count,
    //         records: bookmarks.skip((page-1)*limit).limit(limit)
    //     };
    //     res.json(data);
    // });
});

router.put('/api/bookmarks/:bookmark_id', function(req, res){
    console.log(req.body);
    Bookmark.update({
        _id : req.params.bookmark_id
    }, {
        $set: req.body
    }, function(err, doc) {
        if (doc.ok){
            res.sendStatus(200);
        } else {
            res.sendStatus(400);
        }
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