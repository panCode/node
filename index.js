var server= require('./server');
var router = require('./router');
var requestHandler = require('./requestHandler');
// function route(pathname){
// 	console.log("about to route request for "+pathname);
// }
var handle = {
	// // /: requestHandler.start,
	// /start: requestHandler.start,
	// /upload: requestHandler.upload
};
handle["/"]= requestHandler.start;
handle["/start"] = requestHandler.start;
handle["/upload"] = requestHandler.upload;
handle["/proceed"] = requestHandler.proceed;
server.start(router.route,handle);