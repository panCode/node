var http = require("http");
var url = require('url');
var express = require('express');
var app = express();
var apiRoutes = express.Router();
//var express= require ('express');
function start(route,handle,postData,con){
	 function onRequest(request, response) {
		 console.log("Request received.");
		 //console.log('mmt')
		
		 var pathname = url.parse(request.url).pathname;
		 if(pathname=== '/start' || pathname === '/')
		 {
		 	postData="";
		 }
		 app.use(pathname,function(request,response){
		 	console.log('ddddddddddddddddddddddd');
		 });
		 app.post('/', function(request, response) {
    	        response.send('Hello! The API is at http://localhost:/api');
		});


		 console.log("request for "+pathname+" received");
		 request.setEncoding("utf8");

		 request.addListener("data",function(postDataChunk){
		 	postData+=postDataChunk;
		 	//sho(request,response);
		 	console.log("received post data chunk '"+postDataChunk+"'.");
		 });
		 
		 request.addListener("end",function(){
		 	route(pathname,handle,response,postData,request,con);
		 });
		 // response.writeHead(200, {"Content-Type": "text/plain"});
		 // //response.write("Hello World");
		 
		 // //response.confirm('going great');
		 // response.end(content);
	 }

	 http.createServer(onRequest).listen(4900);

	 console.log("Server has started.");
}

exports.start=start;