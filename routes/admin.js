/**
 * Created by user on 2015-07-21.
 */
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'gagu'
});

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('admin');
});

module.exports = router;