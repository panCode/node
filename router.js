var express=require('express');
var app = express();

function route(pathname,handle,response,postData,request,con){
	console.log("about to route request for "+pathname);
	if( typeof handle[pathname] ==='function')
	{
		 handle[pathname](response,postData,request,con);
	}
	else if(!isNaN(pathname.toString()[1]))
	{
		console.log("be happy! ");
		var str = pathname.toString();
		var res = str.substr(1);
		var int = parseInt(res);
		console.log(int);
		var t;
		con.query("select * from customers",function(error,rows,fields){
			if(error) throw error;
			var q = rows[int].id;
			console.log(q);
			var sql = "delete from customers where id="+rows[int].id+"";
			con.query(sql,function(err,result){
			if(err) throw err; 
			});
			handle['/start'](response,postData,request,con);
			});
		
	}
	else {
		console.log("No request handler found for "+pathname);
		response.writeHead(404,{"Content Type": "text/plain"});
		response.end("404 not found");
	}
}



exports.route = route;