/**
 * Created by ÃÖÁØÈ£ on 2015-07-19.
 */
var express = require('express');
module.exports = function(app, con){
    var index = require('./routes/index');
    var admin = require('./routes/admin');

    app.use('/', index);
    app.use('/admin', admin);
};