var fs = require('fs');
var builder = require('xmlbuilder');
var express = require('express');
var http = require('http');

// var template = builder.create('root')
//   .ele('template')
//     .att('for', 'node-js')
//     .att('to','testing-purposes')
//     .ele('repo')
//       .att('type', 'git')
//       .txt('git://github.com/oozcitak/xmlbuilder-js.git') 
//       .up()
//     .up()
//   .ele('test')
//   .txt('complete')
// .end({ pretty: true });

// fs.writeFile("./template.xml", template, function(err) {
//     if(err) {
//         return console.log('Error while trying to write the template.xml file', err);
//     }
//     console.log("The file was saved!");
// }); 

var app = express();

app.use(function(req, res, next) {
	res.append('Access-Control-Allow-Origin', '*');
	res.append('Access-Control-Allow-Headers', 'content-type');
	next();
});

app.post('/', function(req, res) {
	res.json({success: true, method: 'post'});
});
app.get('/', function(req, res) {
	res.json({success: true, method: 'get'});
});

var server = http.createServer(app);

server.listen('8081');