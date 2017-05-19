var exec = require("child_process").exec;
var querystring= require("querystring");                                

function start(response,postData,request,con){
	console.log("Request handler 'start' was called.");

	var body = 

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
function proceed(response,postData,request,con){
	console.log("SOMWHERE ****");
	console.log(postData);
	
	console.log(querystring.parse(postData));
	response.writeHead(200,{"Content-Type": "text/html"});	
	var x=querystring.parse(postData);
	response.write("user name:"+x.UserName);
	response.write(", email id:"+x.Email);
	response.write(", Phone no:"+x.Phone);
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
function upload(response,postData,request,con){
	console.log("Request handler 'upload' was called.");
	console.log(postData);


    response.writeHead(200,{"Content-Type":"text/html"});
	var x=querystring.parse(postData);


	  var sql = "INSERT INTO customers (UserName , Email, Phone) VALUES ?";
	  var values = [
	  [x['UserName'],x['Email'],x['Phone']]];

	  con.query(sql,[values],function(err,result){
	  	if(err) throw err;
	  	console.log(result);

	  })

	 // showing(request,response,con);
	 var body =
	 '<html>'
	 +'<body>'
	 +'<form action="/showing" method="post">'
	 +'<button type="submit">show table</button>'
	 +'</form>'
	 +'</html>';

	response.write("you ticket has been confirmed and your details are as following******* ");
	response.write("user name:"+x["UserName"]);
	response.write(" email id:"+x["Email"]);
	response.write(" Phone no:"+x["Phone"]);
	response.end(body); 

}
function showing(response,postData,request,con){
con.query('select * from customers',function(error,rows,fields){
	response.writeHead(200,{'Content-Type':'x-application/json'});
	response.end(JSON.stringify(rows));
})
}
exports.start = start;
exports.upload = upload;
exports.proceed = proceed;
exports.showing= showing;