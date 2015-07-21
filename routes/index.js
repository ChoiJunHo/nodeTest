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
    res.render('index');
});

router.get('/search', function(req, res, next){
    var sql = 'SELECT * FROM recipe';
    //if(req.query.ingredients){
    //    var re = /\s*,\s*/;
    //    var ingredients = req.query.ingredients;
    //    var ingredient = ingredients.split(re);
    //
    //}
    pool.getConnection(function(err, connection){
        connection.query(sql, function(err, rows, fields){
            if(err) {
                console.error("err:"+err);
                throw err;
            }
            console.log("rows:" + JSON.stringify(rows));
            res.json(rows);
            connection.release();
        })
    })

});

router.get('/abc', function(req, res, next){
    console.log('aasdfsaf');
    pool.getConnection(function(err, connection){
        connection.query('SELECT * FROM recipe', function(err, rows, fields){
            if(err) {
                console.error("err:"+err);
                throw err;
            }
            console.log("rows:" + JSON.stringify(rows));
            res.json(rows);
            connection.release();
        })
    })

});
module.exports = router;
