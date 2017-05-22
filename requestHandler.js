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
   // + '<div><button name="submit" onClick= "proceed(response,postData)">submit</button></div>'
    + '<div><input id="Book Ticket" type="submit" value="Book Ticket" /></div>'
    + '</fieldset></form>'
    + '</body></html>';
	response.writeHead(200,{"Content-Type": "text/html"});
	response.end(body);

}
function showing(response,postData,request,con){
	var tn;
	//var i;
	console.log("calling****");
	con.query('select * from customers',function(error,rows,fields){
		var str="";
		for(var i=0;i<rows.length;++i)
		{
			str += "<tr>";
			str+="<td>"+(i+1)+"<td>" + rows[i].UserName + "</td><td>"+rows[i].Email+"</td><td>"+rows[i].Phone+"</td>";
			// str+='<td>'rows[i]["Email"]'</td>'
			// str+='<td>'rows[i]["Phone"]'</td>'
			str+="<td><form name = 'form1' method = 'post' action = '/editing'><input id=" +i+" type='submit' value = 'Edit'/></form></td>";
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
	//+'<button onClick = show()>show</button>'
	+'</body>'
	+'</html>';
	console.log(rows[1]["Phone"]);
	response.writeHead(200,{'Content-Type':'text/html'});
	response.write(body);
	response.end();
});


// 	var body=
// 	'<html>'
// 	+'<body><br/>'
// 	//+'<button type=submit>edit</button>'
// 	//+'<p><br/></p>'
// 	+'</body>'
// 	+'<html>';
// 	var boy=
// 		'<html>'
// 		+'<body>'
// 		//+'<button type=submit>edit</button>'
// 		+'<form name ="del" method="post" action= "/delete">'
// 		+'<div><label for= "toEdit">te:</label><input type= "text" id="toEdit" name="toEdit"/></div>'
// 		+'<div><input id="i" type = "submit" value = "edit"/><br/></dev>'
// 		+'</form>'
// 	//	+'<p><br/></p>'
// 		+'</body>'
// 		+'<html>';
// 	response.writeHead(200,{"Content-Type":"text/html"});
// 	response.write("S.No");
// 	response.write("/ UserName");
// 	response.write("/ Email-ID");
// 	response.write("/ Phone No");
// 	response.write(body);
// 	for(var i=0;i<rows.length;++i)
// 	{

// 		var j=i+1;
// 		response.write(JSON.stringify(j)+".");
// 		response.write(" "+rows[i]["UserName"]);
// 		response.write(" "+rows[i]["Email"]);
// 		response.write(" "+rows[i]["Phone"]);
// 		response.write(" "+body);
// 		response.json(rows);
// 	}
// 	//response.append(rows,body);
// 	response.end(); 
	
// });
	// for(i=0;i<(rows.length);++i){
	// response.write((rows[i]["UserName"]));
	// response.write(" "+(rows[i]["Email"]));
	// response.write(" "+(rows[i]["Phone"]));
	// response.write('\n');
	//     }
	//     response.end();
	// });

}

// function delete(response,postdata,request,con)
// {

// }

// function proceed(response,postData,request,con){
// 	console.log("SOMWHERE ****");
// 	console.log(postData);	
// 	console.log(querystring.parse(postData));
// 	response.writeHead(200,{"Content-Type": "text/html"});	
// 	var x=querystring.parse(postData);
// 	response.write("user name:"+x.UserName);
// 	response.write(", email id:"+x.Email);
// 	response.write(", Phone no:"+x.Phone);
// 	var body = 
// 	'<html>'
// 	+'<body>'
// 	+'<form action="/upload" method="post">'
// 	+'<p>to edit your ticket press edit </p>'
// 	+'<p>to confirm your ticket press submit</p>'
// 	+'<button formaction= "/start">edit</button>'
// 	+'<button type="submit">confirm</button>'
// 	+'</form>'
// 	+'</body>'
// 	+'</html>';
	
// 	response.end(body);
// }
// function upload(response,postData,request,con){
// 	console.log("Request handler 'upload' was called.");
// 	console.log(postData);


//     response.writeHead(200,{"Content-Type":"text/html"});
// 	var x=querystring.parse(postData);


// 	  var sql = "INSERT INTO customers (UserName , Email, Phone) VALUES ?";
// 	  var values = [
// 	  [x['UserName'],x['Email'],x['Phone']]];

// 	  con.query(sql,[values],function(err,result){
// 	  	if(err) throw err;
// 	  	console.log(result);

// 	  })

// 	 // showing(request,response,con);
// 	 var body =
// 	 '<html>'
// 	 +'<body>'
// 	 +'<form action="/showing" method="post">'
// 	 +'<button type="submit">show table</button>'
// 	 +'</form>'
// 	 +'</html>';

// 	response.write("you ticket has been confirmed and your details are as following******* ");
// 	response.write("user name:"+x["UserName"]);
// 	response.write(" email id:"+x["Email"]);
// 	response.write(" Phone no:"+x["Phone"]);
// 	response.end(body); 

// }
 
exports.start = start;
//exports.upload = upload;
//exports.proceed = proceed;
exports.showing= showing;