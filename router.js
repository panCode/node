

function route(pathname,handle,response,postData,request){
	console.log("about to route request for "+pathname);
	if( typeof handle[pathname] ==='function')
	{
		 handle[pathname](response,postData,request);
	}
	else {
		console.log("No request handler found for "+pathname);
		response.writeHead(404,{"Content Type": "text/plain"});
		response.end("404 not found");
	}
}
exports.route = route;