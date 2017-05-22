var http = require("http");
var url = require('url');
var express = require('express');
var app = express();
var apiRoutes = express.Router();
var querystring = require('querystring');
function start(route,handle,postData,con){
	 function onRequest(request, response) {
		 console.log("Request received.");
		
		 var pathname = url.parse(request.url).pathname;
		 if(pathname=== '/start' || pathname === '/')
		 {
		 	postData="";
		 }


		 console.log("request for "+pathname+" received");
		 request.setEncoding("utf8");

		 request.addListener("data",function(postData){
		 	var x=querystring.parse(postData);
		 	if(isNaN(x)){
			 	 var sql = "INSERT INTO customers (UserName , Email, Phone) VALUES ?";
		 		 var values = [
		 				 [x['UserName'],x['Email'],x['Phone']]];

				  con.query(sql,[values],function(err,result){
				  	if(err) throw err;
		 		 	console.log(result);

		 		 });
			}
			else console.log("happy''''''''");
		 	
		 	console.log("received post data chunk '"+postData+"'.");
		 });
		 
		 request.addListener("end",function(){
		 	route(pathname,handle,response,postData,request,con);
		 	// app.get('/',function(req,res){
		 	// 	res.send('working');
		 	// 	res.end();
		 	// })
		 });
	 }

	 http.createServer(onRequest).listen(4900);

	 console.log("Server has started.");
}

exports.start=start;