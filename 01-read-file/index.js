var fs = require('fs');
var path = require('path');

var stream = fs.createReadStream(__dirname + 'text.txt');
 
stream.on('readable', function(){
    var data = stream.read();
    console.log(data.toString);
});