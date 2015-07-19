/**
 * Created by √÷¡ÿ»£ on 2015-07-19.
 */
var express = require('express');
module.exports = function(app, con){
    var index = require('./routes/index');
    app.use('/', index);
};