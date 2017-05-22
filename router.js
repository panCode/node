var express=require('express');
var app = express();

function route(pathname,handle,response,postData,request,con){
	console.log("about to route request for "+pathname);
	// if(pathname === '/test'){
	// 	testing
	// }

	if(pathname==='/showing'){
	handle[pathname](response,postData,request,con);
	// app.listen(4900);
	// app.get('/showing',function(req,res){
	// 	con.query('select * from customers',function(error,rows,fields){
	// 		res.json(rows);
	// 		console.log(rows[1]['id']);
	// 	})
	// })
	}
	else if( typeof handle[pathname] ==='function')
	{
		 handle[pathname](response,postData,request,con);
	}
	else {
		console.log("No request handler found for "+pathname);
		response.writeHead(404,{"Content Type": "text/plain"});
		response.end("404 not found");
	}
}



exports.route = route;