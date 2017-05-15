var converter = require("csvtojson").converter;
var fs = require("fs");
var file = 	"./airline";
csvConverter.on("end_parsed",function(jsonObj){
    console.log(jsonObj); 
});
fs.createReadStream(csvFileName).pipe(csvConverter);