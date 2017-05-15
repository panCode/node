var http = require("http");
var url = require('url');
function start(route,handle){
	 function onRequest(request, response) {
		 console.log("Request received.");
		 //console.log('mmt')
		 var  postData="";
		 var pathname = url.parse(request.url).pathname;
		 console.log("request for "+pathname+" received");
		 request.setEncoding("utf8");

		 request.addListener("data",function(postDataChunk){
		 	postData+=postDataChunk;
		 	console.log("received post data chunk '"+postDataChunk+"'.");
		 });
		 
		 request.addListener("end",function(){
		 	route(pathname,handle,response,postData);
		 })
		 // response.writeHead(200, {"Content-Type": "text/plain"});
		 // //response.write("Hello World");
		 
		 // //response.confirm('going great');
		 // response.end(content);
	 }

	 http.createServer(onRequest).listen(4900);

	 console.log("Server has started.");
}

exports.start=start;