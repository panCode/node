var exec = require("child_process").exec;
var querystring= require("querystring");
function start(response,postData){
	console.log("Request handler 'start' was called.");
	// var sleep = function(millisecond)
	// {
	// 	var starttime = new Date().getTime();
	// 	while(new Date().getTime() < starttime + millisecond);
 
	// }
	// sleep(10000);
	//var content = "empty";
	// exec("find /",{timeout:10000,maxBuffer: 20000*1024},function(error, stdout, stderr){
	// 	//content = stdout;
	// 	response.writeHead(200,{"Content-Type":"text/plain"});
	// 	response.end(stdout); 
	// });
	var body = 
	// '<html>'+
 //  '<head>'+
 //  '<meta http-equiv="Content-Type" content="text/html; '+
 //  'charset=UTF-8" />'+
 //  '</head>'+
 //  '<body>'+
 //  '<form action="/upload" method="post">'+
 //  '<textarea name="text" rows="20" cols="60"></textarea>'+
 //  '<input type="submit" value="Submit text" />'+
 //  '</form>'+
 //  '</body>'+
 //  '</html>';
    '<html><body>'
    + '<h1>Ticket System</h1>'
    + '<form name = "form" method="post" action="/upload" enctype="application/x-www-form-urlencoded"><fieldset>'
    + '<div><label for="UserName">User Name:</label><input type="text" id="UserName" name="UserName" /></div>'
    + '<div><label for="Email">Email-ID:</label><input type="text" id="Email" name="Email" /></div>'
    + '<div><label for="Phone">Phone No:</label><input type="text" id="Phone" name="Phone" value="master" /></div>'
    + '<div><button name="submit" onClick="/upload">submit</button></div>'
   // + '<div><input id="Book Ticket" type="submit" value="Book Ticket" /></div>'
    + '</fieldset></form>'
    + '</body></html>';
	response.writeHead(200,{"Content-Type": "text/html"});
	response.end(body);


}
// function proceed(response,postData){
// 	var body = 
// 	'<html>'
// 	+'<body>'
// 	+'<'
// }
function upload(response,postData){
	console.log("Request handler 'upload' was called.");
	response.writeHead(200,{"Content-Type":"text/plain"});
	response.write("you have sent "+querystring.parse(postData).text);
	//response.write();
	response.end(); 
	//return "got the upload";
}
exports.start = start;
exports.upload = upload;