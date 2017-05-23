var exec = require("child_process").exec;
var querystring= require("querystring"); 
var express = require('express');
var app = express();

function start(response,postData,request,con){
	console.log("Request handler 'start' was called.");

	var body = 

    '<html><body>'
    + '<h1>Ticket System</h1>'
    + '<form name = "form" method="post" action="/showing" enctype="application/x-www-form-urlencoded"><fieldset>'
    + '<div><label for="UserName">User Name:</label><input type="text" id="UserName" name="UserName" /></div>'
    + '<div><label for="Email">Email-ID:</label><input type="text" id="Email" name="Email" /> </div>'
    + '<div><label for="Phone">Phone No:</label><input type="text" id="Phone" name="Phone" value="master" /></div>'
    + '<div><input id="Book Ticket" type="submit" value="Book Ticket" /></div>'
    + '</fieldset></form>'
    + '</body></html>';
	response.writeHead(200,{"Content-Type": "text/html"});
	response.end(body);

}
function showing(response,postData,request,con){
	var tn;
	console.log("calling****");
	con.query('select * from customers',function(error,rows,fields){
		var str="";
		for(var i=0;i<rows.length;++i)
		{
			str += "<tr>";
			str+="<td>"+(i+1)+"<td>" + rows[i].UserName + "</td><td>"+rows[i].Email+"</td><td>"+rows[i].Phone+"</td>";
			str+="<td><form name = 'form1' method = 'post' action = '/"+i+"'><input id=" +i+" type='submit' value = 'Edit'/></form></td>";
			str += "</tr>";
		}
	
	var body=
	'<html>'
   +'<head>'
   +'<style>'
   +  'table, th, td {'
    +' border: 1px solid black;'
    + 'border-collapse: collapse;'
    + 'padding: 5px;'
    + 'text-align: center;'
    +' }'
   +'</style>'
	+'<title></title>'
	+'</head>'
	+'<body >'
	+'<form name = "form2" method = "post" action = "/start"><input id = "abc" type = "submit" value = "Add Ticket"/></form>'
	+'<table style="width:100%">'
	+'<tr>'
	+'<th>Serial No</th>'
	+'<th>UserName</th>'
	+'<th>Email</th>'
	+'<th>Phone</th>'
	+'<th>Edit</th>'
	+'</tr>'
	+ str
	+'</table>'
	+'</body>'
	+'</html>';
	response.writeHead(200,{'Content-Type':'text/html'});
	response.write(body);
 	response.end();
});
}
exports.start = start;
exports.showing= showing;