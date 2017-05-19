

function route(pathname,handle,response,postData,request,con){
	console.log("about to route request for "+pathname);
	if(pathname==='/showing'){
		var tn;
		var i;
		con.query('select * from customers',function(error,rows,fields){
			//tn=JSON.stringify(rows);
	response.writeHead(200,{'Content-Type':'text/plain'});
	for(i=0;i<(rows.length);++i){
	response.write((rows[i]["UserName"]));
	response.write('\n');
    }
    response.end();
});
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