/**
 * Created by √÷¡ÿ»£ on 2015-07-19.
 */
var mysql = require('mysql');
var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'gagu'
});

var doQuery = function(sql, callback){
    pool.getConnection(function(err, connection){
        connection.query(sql, function(err, rows, field){
            if(err){
                callback(rows, 'query excuted: ' +sql);
            }
            connection.release();
        })
    })

};
exports.doQuery = doQuery;