var server= require('./server');
var router = require('./router');
var requestHandler = require('./requestHandler');
var mysql = require('mysql');
var http = require('http');
 var fs = require('fs');
 fs.readFile('./test.html',function(err,html){
 	if(err) throw err;
 })


var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Nkhi#hil3321",
    database: "mydb"
    });
con.connect(function(err) {
	  if (err) throw err;
	  console.log("Connected!");
	
	  });



var postData = "";
var handle = {

};
handle["/"]= requestHandler.start;
handle["/start"] = requestHandler.start;
handle["/upload"] = requestHandler.upload;
handle["/proceed"] = requestHandler.proceed;
handle["/showing"] = requestHandler.showing;
server.start(router.route,handle,postData,con);
