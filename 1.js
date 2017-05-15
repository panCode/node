var server= require('./server');
var router = require('./router')
// function route(pathname){
// 	console.log("about to route request for "+pathname);
// }
server.start(router.route);