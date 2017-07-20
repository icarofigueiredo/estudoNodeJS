var express = require('express');
var load = require('express-load');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

module.exports = function() {
    var app = express();

    app.use(express.static('./app/public'));
    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(expressValidator());


    consign('routes', {cwd: process.cwd()+'app', verbose: true})
        .then('infra')
        .into(app);

    app.use(function(req,res,next){
        res.status(404).render('error/404');
        next();
    });


    app.use(function(error, req,res,next){
        if(process.env.NODE_ENV == 'production') {
            console.log(error);
            res.status(500).render('error/404');
            return;
        }
        next(error);
    });

    return app;
}