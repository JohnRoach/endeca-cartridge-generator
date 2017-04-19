var fs = require('fs');
var builder = require('xmlbuilder');

var template = builder.create('root')
  .ele('template')
    .att('for', 'node-js')
    .att('to','testing-purposes')
    .ele('repo')
      .att('type', 'git')
      .txt('git://github.com/oozcitak/xmlbuilder-js.git') 
      .up()
    .up()
  .ele('test')
  .txt('complete')
.end({ pretty: true });

fs.writeFile("./template.xml", template, function(err) {
    if(err) {
        return console.log('Error while trying to write the template.xml file', err);
    }
    console.log("The file was saved!");
}); 