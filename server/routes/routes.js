const express = require('express');
var router = express.Router();
const db = require('../db/db');

router.get('/getUser', function(req, res) {
    db.getUser(req.query.username, function(err, results) {
        if(err) {
            console.log(err);
            return;
        }
        return res.send(results);
    });
});

router.get('/getStaff', function(req, res) {
    db.getStaff(function(err, results) {
        if(err) {
            console.log(err);
            return;
        }
        return res.send(results);
    });
});

router.post('/update', function(req, res) {
    db.updateStatus(req.query.newStatus, req.query.id, function(err, results) {
        if(err) {
            console.log(err);
            return;
        }
        return res.send(results);
    });
});

module.exports = router;
