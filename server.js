
var express = require('express');
var path = require('path');
var app = express();

app.set('port', 8080);
app.use('/', express.static(__dirname + '/'));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Running server at http://dawntepper.com:' + port + '/');
});
