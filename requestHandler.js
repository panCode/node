var exec = require("child_process").exec;
var querystring= require("querystring");
//var bodyparser = require("body-parser");
function start(response,postData,request){
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
 //  '<textarea name="text" rows="20" cols="60">input text</textarea>'+
 //  '<input type="submit" value="Submit text" />'+
 //  '</form>'+
 //  '</body>'+
 //  '</html>';
    '<html><body>'
    + '<h1>Ticket System</h1>'
    + '<form name = "form" method="post" action="/proceed" enctype="application/x-www-form-urlencoded"><fieldset>'
    + '<div><label for="UserName">User Name:</label><input type="text" id="UserName" name="UserName" /></div>'
    + '<div><label for="Email">Email-ID:</label><input type="text" id="Email" name="Email" /> </div>'
    + '<div><label for="Phone">Phone No:</label><input type="text" id="Phone" name="Phone" value="master" /></div>'
   // + '<div><button name="submit" onClick= "proceed(response,postData)">submit</button></div>'
    + '<div><input id="Book Ticket" type="submit" value="Book Ticket" /></div>'
    + '</fieldset></form>'
    + '</body></html>';
	response.writeHead(200,{"Content-Type": "text/html"});
	response.end(body);


}
function proceed(response,postData,request){
	console.log("SOMWHERE ****");
	console.log(postData);
	//var x=document.getElementById("form");

	// var text = " ";
	// var i = 0;
	// response.writeHead(200,{"Content-Type": "text/html"});
	// for(i=0;i < x.length ; ++i)
	// {
	// 	text = x.element[i].value ;
	// 	response.write(text);
	// 	text = "";
	// }
	console.log(querystring.parse(postData));
	response.writeHead(200,{"Content-Type": "text/html"});
	// response.write("to edit your ticket press edit ");
	// response.write("to confirm your ticket press submit");
	//response.writeHead(200,{"Content-Type": "text/html"});
	var x=querystring.parse(postData);
	//response.write("\n");
	response.write("user name:"+x.UserName);
	//response.write("\n");
	response.write(", email id:"+x.Email);
	//response.write("\n");
	response.write(", Phone no:"+x.Phone);
	//response.writeHead(200,{"Content-Type": "text/html"});
	var body = 
	'<html>'
	+'<body>'
	+'<form action="/upload" method="post">'
	+'<p>to edit your ticket press edit </p>'
	+'<p>to confirm your ticket press submit</p>'
	+'<button formaction= "/start">edit</button>'
	+'<button type="submit">confirm</button>'
	+'</form>'
	+'</body>'
	+'</html>';
	
	response.end(body);
}
function upload(response,postData,request){
	console.log("Request handler 'upload' was called.");
	console.log(postData);
	var x=querystring.parse(postData);
	console.log(x["UserName"]);
	response.writeHead(200,{"Content-Type":"text/plain"});
	
	response.write("you ticket has been confirmed and your details are as following\n");
	//response.write("\n");

	response.write("user name:"+x["UserName"]);
	response.write("\nemail id:"+x["Email"]);
	response.write("\nPhone no"+x["Phone"]);
	//response.write();
	response.end(); 
	//return "got the upload";
}
exports.start = start;
exports.upload = upload;
exports.proceed = proceed;