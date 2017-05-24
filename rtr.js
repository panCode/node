"use strict"
var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var router = express.Router();
var session = require('express-session');
var mysql = require('mysql')
var reqhand = require('./reqhand');
//var lindex = require('./l-index');

app.use(bodyparser.urlencoded({ extended: true})); 
app.use(bodyparser.json());

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Nkhi#hil3321",
    database: "login"
    });
var x=4,
y=3;
var str = 'you miss ${x} hit ${y}';
console.log(str);
app.get('/login',(req,res)=>{
	reqhand.sf(req,res);
});
app.get('/show',(req,res)=>{
	reqhand.show(req,res,con);
});
app.post('/login',(req,res)=>{
	reqhand.check(req,res,con);
});
app.post('/register',(req,res)=>{
	reqhand.reg(req,res);
});
app.post('/insert',(req,res)=>{
	reqhand.insert(req,res,con);
});
app.listen(4100,function(){
	console.log('working');
})