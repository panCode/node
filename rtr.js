
var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var router = express.Router();
var session = require('express-session');
var mysql = require('mysql')
var reqhand = require('./reqhand');
var fs = require('fs');

app.use(bodyparser.urlencoded({ extended: true})); 
app.use(bodyparser.json());

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Nkhi#hil3321",
    database: "login"
    });

app.use('/project',express.static(__dirname +'/assets'));

app.post('/login',(req,res)=>{
	reqhand.check(req,res,con);
});

app.post('/insert',(req,res)=>{
	reqhand.insert(req,res,con);
});
app.listen(4100,function(){
	console.log('working');
})